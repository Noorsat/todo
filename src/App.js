import './App.css';
import { Routes, Route } from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {SignInPage} from "./pages/SignInPage";
import {Auth} from "./context/Auth";
import {useState} from "react";
import {ToDo} from "./pages/ToDo";

function App() {
    const [token, setToken] = useState(localStorage.getItem('idToken'))
    

    return (
        <Auth.Provider value={{ token, setToken }}>
            <div className="App">
                <Navbar token={token}/>

                <Routes>
                    <Route path="/todo" element={<ToDo />} />
                    <Route path="/signin/" element={<SignInPage />} />
                </Routes>
            </div>
        </Auth.Provider>
    );
}

export default App;
