import React, { useState } from 'react';
import '../style/App.scss';
// import { Redirect } from 'react-router-dom';

export default function UserRegistration() {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [role, setRole] = useState(null);

    const handleRegistration = async (e) => {
        e.preventDefault();
        const userData = {
            firstName,
            lastName,
            email,
            password,
            role
        };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        };

        const response = await fetch('http://localhost:3001/contacts', options);
        const data = await response.json();
        console.log('data response:', data);

    };



    return (

        <div className="user-regist-form">
            <div className="form-wrap">
                <form onSubmit={handleRegistration}>
                    <h1>Sign Up!</h1>
                    <input type="text" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                    <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="password" placeholder="Confirm Password" onChange={(e) => setPassword(e.target.value)} />
                    <input type="role" placeholder="User/Admin" onChange={(e) => setRole(e.target.value)} />
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        </div>
    )
}


