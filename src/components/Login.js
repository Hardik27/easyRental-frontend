import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material/';
import './Login.css'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Login(){
    const[userName, setUserName]=useState('');
    const[password, setPassword]=useState('');
    const[error, setError]=useState('');
    const login=(e)=>{
        e.preventDefault();
        const loginDetails={email: userName, pass: password};
        console.log(loginDetails);
        if(userName=='abc@gmail.com' && password=='1234'){
            setError("Login successful");
        }else{
            setError("Incorrect username/password");
        }
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
                </form>
                {error}
            </Paper>
        </Container>
    );
}
