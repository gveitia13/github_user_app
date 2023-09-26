import React, {Component} from 'react';

export class GitHubUser extends Component {

    /**
     * username
     * foto
     * bioggrafia
     * seguidores
     * public repositories
     * lista de repositorios mas recientes (nombre y dessc)
     */

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-header text-center">
                        <h2 className="card-title">Datos del usuario "{this.props.data.login}"</h2>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-md-3">
                                <img src={this.props.data.avatar_url} alt="Avatar" className='img-fluid rounded-pill'/>
                                <h3 className='mt-2 mb-0'>{this.props.data.name}</h3>
                                <p className='text-muted fs-5 fw-light'>{this.props.data.login}</p>
                                <a href={this.props.data.html_url} target='_blank' rel='noreferrer'
                                   className='btn btn-light mb-2 btn-sm w-100 border-dark-subtle'>Follow</a>
                                <p>{this.props.data.bio}</p>
                                <p className='text-muted'>
                                    <small>
                                        <a href={this.props.data.html_url + '?tab=followers'} target='_blank'
                                           rel='noreferrer' className='text-decoration-none link-primary text-muted'>
                                            <i className='bx bx-group'></i>{this.props.data.followers} followers
                                        </a> .&nbsp;
                                        <a href={this.props.data.html_url + '?tab=following'} target='_blank'
                                           rel='noreferrer' className='text-decoration-none link-primary text-muted'>
                                            {this.props.data.following} following
                                        </a>
                                    </small>
                                </p>
                                <p><a href={this.props.data.html_url + '?tab=repositories'} target='_blank'
                                      rel='noreferrer' className='text-decoration-none text-black link-primary'>
                                    <i className='bx bx-code-block'></i>
                                    {this.props.data.public_repos} public repositories</a></p>
                                <p className='mb-0'><a href=''></a></p>
                            </div>
                            <div className="col-12 col-md-9">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
