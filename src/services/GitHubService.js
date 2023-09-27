import {Octokit} from "@octokit/rest";

class GitHubService {

  getDataByUser = async (user) => {
    const octokit = new Octokit();
    const response = await octokit.request("GET /users/{username}", {
      username: user
    })
    return await response.data
  };
  getReposByUser = async (user) => {
    const octokit = new Octokit();
    return await octokit.request("GET /users/{username}/repos", {
      username: user
    });
  };
}

export default GitHubService