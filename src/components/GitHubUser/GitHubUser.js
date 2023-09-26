import React, {Component} from 'react';
import GitHubService from "../../services/GitHubService";
import Loader from "../Loader/Loader";

export class GitHubUser extends Component {
    constructor() {
        super();
        this.state = {
            usuario: null,
            error: null,
        };
        this.gitHubService = new GitHubService();
    }

    async componentDidMount() {
        try {
            const usuario = await this.gitHubService.fetchData('gveitia13');
            console.log(usuario)
            this.setState({usuario});
        } catch (error) {
            this.setState({error: 'Error al obtener los datos del usuario.'});
        }
    }

    /**
     * username
     * foto
     * bioggrafia
     * seguidores
     * public repositories
     * lista de repositorios mas recientes (nombre y dessc)
     */

    render() {
        const {usuario, error} = this.state;

        return (
            <div>
                {error ? (
                    <p>{error}</p>
                ) : usuario ? (
                    <div>
                        <h2>Datos del usuario</h2>
                        <p>
                            Nombre: {usuario.name}
                        </p>
                    </div>
                ) : (
                    <Loader></Loader>
                )}
            </div>
        );
    }
}

// export default GitHubUser;
