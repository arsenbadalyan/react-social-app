import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="wrapper">
                    <Header />
                    <div className="content">
                        <Sidebar />
                        <div className="main-content">
                            <Routes>
                                <Route path="/profile" element={<Profile />} />
                                <Route
                                    path="/messages"
                                    element={<Messages />}
                                />
                            </Routes>
                        </div>
                    </div>
                    <footer></footer>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
