import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../css/Login.css';

export default function Login(props) {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const postData = (e) => {
        e.preventDefault();

        if (!username && !password) {
            alert("Username and password fields cannot be empty.");
            return;
        }
        if (!username) {
            alert("Username cannot be empty.");
            return;
        }
        if (!password) {
            alert("Password cannot be empty.");
            return;
        }
        axios.post(`http://${props.apiKey}/login`, {
            username,
            password
        }).then(() => {
            navigate('/dashboard');
            setTimeout(() => {
                alert("You are logged in successfully");
            }, 300);

        }).catch((error) => {
            console.error("There was an error!", error);
            alert("Invalid Credentials")
        });
    }
    return (

        <div class="body">
            <div class="wrapper">
                <form action="">
                    <h1> Admin Login</h1>
                    <div class="input-box">
                        <input  type="text" id="uname" placeholder="Enter your Username"  onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div class="input-box">
                        <input  type="password" id="password" placeholder="Enter your password"  onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div class="button"> 
                        <a type="submit" href="#" onClick={postData}>Login</a>
                    </div>
                </form>
            </div>
        </div>
    )
}
