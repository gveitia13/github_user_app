import './App.css';
import {GitHubUser} from "./components/GitHubUser/GitHubUser";
import {FormUser} from "./components/FormUser/FormUser";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div>
                    <FormUser></FormUser>
                    <GitHubUser></GitHubUser>
                </div>
            </div>
        </div>
    );
}

export default App;
