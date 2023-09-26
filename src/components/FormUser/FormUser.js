import React, {Component} from 'react';
import GitHubService from "../../services/GitHubService";
import {GitHubUser} from "../GitHubUser/GitHubUser";
import Loader from "../Loader/Loader";

export class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loader: false,
            data: {},
            showCard: false,
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
        const {username, loader, data, showCard} = this.state;

        try {
            await this.gitHubService.fetchData(username)
                .then(data => {
                    console.log(data)
                    this.setState({data: data})
                    this.setState({loader: false})
                    this.setState({showCard: true})
                    this.setState({username: ''})
                })
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        const {username, loader, data, showCard} = this.state;
        return (
            <div>
                <div className="card">
                    <div className="card-header text-center">
                        <h2 className='card-title'>Ingrese un usuario de GitHub</h2>
                    </div>
                    <div className="card-body">
                        <form action="" className='row g-3 text-center' onSubmit={this.handleSubmit}>
                            <div className="col-12">
                                <input type="text" name='username' value={username} onChange={this.handleInputChange}
                                       className='form-control' placeholder='usuario' required/>
                            </div>
                            <div className="col-12">
                                <button type='submit' disabled={!username} className='btn btn-primary'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
                <br/>
                {loader && <Loader/>}
                {showCard && <GitHubUser data={data}/>}
            </div>
        )
    }
}