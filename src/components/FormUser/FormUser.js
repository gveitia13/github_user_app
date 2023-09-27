import React, {Component} from 'react';
import GitHubService from "../../services/GitHubService";
import {GitHubUser} from "../GitHubUser/GitHubUser";
import Loader from "../Loader/Loader";
import {Error} from "../Error/Error";

export class FormUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      loader: false,
      data: {},
      showCard: false,
      showError: false,
      errorMessage: '',
    }
    this.gitHubService = new GitHubService();
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({loader: true})
    this.setState({showCard: false})
    this.setState({showError: false})
    const {username} = this.state;

    try {
      await this.gitHubService.getDataByUser(username)
        .then(data => {
          this.setState({data: data})
          this.setState({loader: false})
          this.setState({showCard: true})
          this.setState({username: ''})
        }).catch(error => {
          this.setState({
            errorMessage: `El usuario "${username}" no existe en GitHub. 
            Por favor ingrese un usuario válido.`
          })
          if (error.status === 500)
            this.setState({errorMessage: 'Hay un error en la conexión.'})
          this.setState({showError: true})
          this.setState({loader: false})
          this.setState({errorUser: username})
          this.setState({username: ''})
        })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const {username, loader, data, showCard, showError, errorMessage} = this.state;
    return (
      <div>
        <div className="card mt-3">
          <div className="card-header text-center">
            <h2 className='card-title'>Ingrese un usuario de GitHub</h2>
          </div>
          <div className="card-body">
            <form action="" className='row g-3 text-center' onSubmit={this.handleSubmit}>
              <div className="col-12">
                <input type="search" name='username' value={username} onChange={this.handleInputChange}
                       className='form-control' placeholder='usuario' onFocus={() => this.setState({showError: false})}
                       required/>
              </div>
              <div className="col-12">
                <button type='submit' disabled={!username} className='btn btn-primary'>Enviar</button>
              </div>
            </form>
          </div>
        </div>
        <br/>
        {showError && <Error message={errorMessage}></Error>}
        {loader && <Loader/>}
        {showCard && <GitHubUser key={data.id} data={data}/>}
      </div>
    )
  }
}