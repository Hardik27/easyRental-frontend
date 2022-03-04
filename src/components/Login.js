import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Switch, TextField } from '@mui/material/';
import './Login.css'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, NavLink, BrowserRouter as Router, Route } from 'react-router-dom';
import LoginService from '../services/LoginService';
import { sha256 } from 'js-sha256';


export default function Login(){
    const[userName, setUserName]=useState('');
    const[password, setPassword]=useState('');
    const[error, setError]=useState('');
    var sha256 = require('js-sha256').sha256;
    const login=(e)=>{
        e.preventDefault();
        const loginDetails={email: userName, password: sha256(password)};
        console.log(loginDetails);
        LoginService.login(loginDetails);
    }

    return(
        <Container>
            <Paper elevation={2} className='login-paper' >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Login
                </Typography>
                <form className='login-form' noValidate autoComplete='off'>
                    <TextField  type='email' label='Email' variant='outlined' fullWidth value={userName}
                    onChange={(e)=>setUserName(e.target.value)} className="small-margin-below"/>
                    <TextField label='Password' type='password' variant='outlined' fullWidth value={password}
                    onChange={(e)=>setPassword(e.target.value)} className="small-margin-below"/>
                    <Button variant="outlined" onClick={login} className="small-margin-below">Login</Button>
                    <Button variant="outlined"  className="small-margin-below">Register</Button>
                </form>
                {error}
            </Paper>
        </Container>
    );
}
