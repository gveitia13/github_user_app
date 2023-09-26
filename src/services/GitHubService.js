import {Octokit} from "@octokit/rest";

class GitHubService {

    fetchData = async (user) => {
        try {
            const octokit = new Octokit();

            const response = await octokit.request("GET /users/{username}", {
                username: user
            })
            console.log(response)
            if (!response.status === 200) {
                throw new Error('Error al obtener los datos');
            }

            return await response.data
        } catch (error) {
            console.error(error);
            throw error
        }
    };
}

export default GitHubService