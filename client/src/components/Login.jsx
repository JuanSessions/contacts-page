import React, { useState } from 'react';
import '../style/App.scss';
import { Redirect } from 'react-router-dom';


export default function Login(props) {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };
        const response = await fetch('http://localhost:3001/contacts/login', options);
        const data = await response.json();
        console.log('data response:', data);


        if (data.success) {
            props.setLogIn(true)
            console.log("login")
        } else {
            alert("wrong login data")
        }
        console.log(response.headers.get("x-auth"))
    }

    return (
        <div className="login-container">
            {props.LogIn ? <Redirect to="/" /> :
                <div className="form-container">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input type="text" name="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
                        <input type="password" name="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />
                        <button type="submit" className="btn-submit">Login</button>
                    </form>
                </div>
            }
        </div>
    )
}
