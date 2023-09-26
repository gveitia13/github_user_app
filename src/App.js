import logo from './logo.svg';
import './App.css';
import {GitHubUser} from "./components/GitHubUser";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div>
                    <h1>GitHub User</h1>
                    <GitHubUser></GitHubUser>
                </div>
            </div>
        </div>
    );
}

export default App;
