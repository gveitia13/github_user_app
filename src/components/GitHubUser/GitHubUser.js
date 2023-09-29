import React, {Component} from 'react';
import './GitHubUser.css'
import GitHubService from "../../services/GitHubService";
import {CardRepository} from "../CardRepository/CardRepository";
import Loader from "../Loader/Loader";


export class GitHubUser extends Component {
  constructor(props) {
    super(props);
    this.gitHubService = new GitHubService()
    this.state = {
      repos: [],
      loader: false,
      length: 6,
      search: ''
    }
  }

  toggleLength = () => {
    console.log(this.state)
    if (this.state.length <= 6)
      this.setState({length: this.state.repos.length})
    else
      this.setState({length: 6})
  }

  componentDidMount() {
    this.setState({loader: true})
    this.gitHubService.getReposByUser(this.props.data.login)
      .then(response => {
        console.log(response.data)
        let sorted_data = response.data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        this.setState({
          repos: sorted_data
        })
        this.setState({loader: false})
        this.setState({length: 6})
      })
  }

  handleInputChange = (event) => {
    let {name, value} = event.target;
    this.setState((prevState)=>({...prevState, [name]: value}));
    // this.setState({[name]: value});
    // this.setState({repos: this.state.repos.filter(e => e.name.includes(value))})
    console.log(value)
    console.log(this.state.search)
  }

  render() {
    // const {search} = this.state
    return (
      <div>
        <div className="card">
          <div className="card-header text-center">
            <h2 className="card-title">Datos del usuario "{this.props.data.login}"</h2>
          </div>
          <div className="card-body">
            <div className="row g-4">
              <div className="col-12 col-md-4 col-xl-3 d-flex flex-column">
                {/*photo and name*/}
                <div className='row g-2 order-0'>
                  <div className='col-3 col-md-12'>
                    <img src={this.props.data.avatar_url} alt="Avatar"
                         className='img-fluid rounded-pill pb-3'/>
                  </div>
                  <div className='col-9 col-md-12 d-flex flex-column justify-content-center'>
                    <h4 className='mt-2 mb-0'>{this.props.data.name}</h4>
                    <p className='text-muted mb-2 fs-5 fw-light'>{this.props.data.login}</p>
                  </div>
                </div>
                {/*follow btn*/}
                <a href={this.props.data.html_url} target='_blank' rel='noreferrer'
                   className='btn btn-light mt-2 order-4 order-md-1 mb-2 btn-sm w-100
                                   border-dark-subtle'>Follow</a>
                {/*bio and public repos*/}
                <div className='order-1 order-md-2'>
                  <p className='mb-2'>{this.props.data.bio}</p>
                  <p className='small'>
                    <a href={this.props.data.html_url + '?tab=repositories'} target='_blank'
                       rel='noreferrer' className='text-decoration-none text-black link-primary'>
                      <i className='bx bx-code-block'></i>&nbsp;
                      {this.props.data.public_repos} public repositories</a></p>
                </div>
                {/*social and company*/}
                <div className='order-2 order-md-4'>
                  {this.props.data.company &&
                    <p><a href={'https://github.com/' + this.props.data.company.slice(1)}
                          target='_blank'
                          rel='noreferrer'
                          className='text-black small user-company text-decoration-none'>
                      <i className='bx-building bx'></i> {this.props.data.company}
                    </a></p>}
                  {this.props.data.location &&
                    <p><i className='bx-map bx small'></i> {this.props.data.location}</p>}
                  {this.props.data.twitter_username &&
                    <p><a href={'https://twitter.com/' + this.props.data.twitter_username}
                          className='text-black small user-social text-decoration-none'><i
                      className='bx bxl-twitter'></i>{'@' + this.props.data.twitter_username}</a>
                    </p>}
                </div>
                {/*followers and following*/}
                <div className="order-3 order-md-3">
                  <p className='text-muted mb-1'>
                    <small>
                      <a href={this.props.data.html_url + '?tab=followers'} target='_blank'
                         rel='noreferrer'
                         className='text-decoration-none link-primary text-muted'>
                        <i className='bx bx-group'></i>{this.props.data.followers} followers
                      </a> .&nbsp;
                      <a href={this.props.data.html_url + '?tab=following'} target='_blank'
                         rel='noreferrer'
                         className='text-decoration-none link-primary text-muted'>
                        {this.props.data.following} following
                      </a>
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-8 col-xl-9">
                <p className='fs-5 mb-2 fw-normal'>Últimos repositorios</p>

                {/*<div className='py-2'>*/}
                {/*  <input type="search" className='form-control border-dark' placeholder='Buscar repositorio'*/}
                {/*         value={search} onChange={this.handleInputChange} name='search'/>*/}
                {/*</div>*/}

                {this.state.loader && <Loader></Loader>}
                <div className='row d-flex g-3'>
                  {this.state.repos.slice(0, this.state.length).map((value, index) =>
                    (<CardRepository repo={value}></CardRepository>)
                  )}
                </div>
                {this.state.repos.length >= 6 && <div className="text-center">
                  <button className='btn btn-light mt-2 border-dark-subtle'
                          onClick={this.toggleLength}>{this.state.length <= 6 ? 'Ver todos' : 'Ver menos'}</button>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
