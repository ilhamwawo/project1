import React from "react";
import logo from "./logo.svg"


function Welcome() {
    return (
        <div>
            <div className="Header"> 
                <img src={logo}></img>
                <button>Login</button>
            </div>
            <div className="Main">
                <h1>Selamat Datang di React App pertama saya</h1>
            </div>
            <div className="Footer"> 
                <p>Copyright 2022</p>
            </div>
        </div>
    );   
}

export default Welcome