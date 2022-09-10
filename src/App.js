import React from 'react';
import Header from './Components/Header';
import './App.css';
import Sidebar from './Components/Sidebar';
import Profile from './Components/Profile';

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Sidebar />
                    <div className="main-content">
                        <Profile />
                    </div>
                </div>
                <footer></footer>
            </div>
        </div>
    );
}

export default App;
