import {Octokit} from "@octokit/rest";

class GitHubService {

    getDataByUser = async (user) => {
        try {
            const octokit = new Octokit();

            const response = await octokit.request("GET /users/{username}", {
                username: user
            })
            if (!response.status === 200) {
                throw new Error('Error al obtener los datos');
            }

            return await response.data
        } catch (error) {
            console.error(error);
            throw error
        }
    };
    getReposByUser = async (user) => {
        try {
            const octokit = new Octokit();

            const response = await octokit.request("GET /users/{username}/repos", {
                username: user
            })
            if (!response.status === 200) {
                throw new Error('Error al obtener los datos');
            }
            return await response
        } catch (error) {
            console.error(error);
            throw error
        }
    };
}

export default GitHubService