import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

import './SignIn.css';

const SignIn = () => {
    const [email, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();
    const handleSignIn = async(e) => {
        e.preventDefault();
        // Handle sign in logic here
        try {
            await signInWithEmailAndPassword(auth, email ,password)
            navigate("/");
        } catch (error) {
            console.error(error)
        }
    };

    const handleGoogleSignIn = async  (e) => {
        // Handle Google sign in logic here
        e.preventDefault();
        // Handle sign in logic here
        try {
            await signInWithEmailAndPassword(auth, email ,password)
            navigate("/");
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <input type="text" placeholder="email" value={email} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Sign In</button>
            </form>
            <button className="google-signin-button" onClick={handleGoogleSignIn}>
                <img src="/images/google-logo.png" alt="Google logo" />
                Sign In with Google
            </button>
        </div>
    );
}

export default SignIn;