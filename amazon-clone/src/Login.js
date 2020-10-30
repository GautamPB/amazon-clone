import React, { useState } from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './Firebase';

function Login()
{
    const histroy = useHistory();
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const login = (event) => {
        event.preventDefault(); //stops refresh
        //do the login logic

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in successfully, redirect to home page
            histroy.push('/')
        })
        .catch((e) => alert(e.message))
    }

    const register = (event) => {
        event.preventDefault(); //stops refresh
        //do the register logic

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //created user ad logged in, redirect to homepage
            histroy.push('/')
        }).catch((e) => alert(e.message))
    }

    let history = useHistory();
    return (
        <div className = 'login'>
            <Link to = '/'>
                <img className = 'login__logo'
                src = 'http://pngimg.com/uploads/amazon/amazon_PNG21.png'
                alt = ''
                />
            </Link>
            <div className = 'login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value = {email} onChange = {event => setEmail(event.target.value)} type = 'email' />
                    <h5>Password</h5>
                    <input value = {password} onChange = {event => setPassword(event.target.value)} type = 'password' />
                    <button onClick = {login} type = 'submit' className = 'login__signInButton'>Sign in</button>
                </form>
                <p>
                    By signing in, you agree to Amazon's conditions of use and sale. Please see our Privacy Notice for more information
                </p>
                <button onClick = {register} className = 'login__createAccountButton'>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login;