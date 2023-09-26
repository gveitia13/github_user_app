import React, {Component} from 'react';

export class FormUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
    }

    handleInputChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {username} = this.state;

        console.log('Nombre:', username);
    }

    render() {
        const {username} = this.state;
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
                                       className='form-control' placeholder='usuario'/>
                            </div>
                            <div className="col-12">
                                <button type='submit' className='btn btn-primary'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}