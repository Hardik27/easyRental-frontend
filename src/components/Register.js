import React, {useState} from "react";
import './Register.css';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function Register(){
    const[email, setEmail] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[password, setPassword] = useState('');
    const[number, setNumber] = useState('');
    const[country, setCountry] = useState('');
    const[address, setAddress] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[zipCode, setZipCode] = useState('');
    const[error, setError] = useState('');

    const register = (e) =>{
        e.preventDefault();
        const loginDetails={email: email, pass: password, fname: firstName, lname: lastName, number: number,
            country: country,address: address,city: city,state: state,pin: zipCode};
        console.log(loginDetails);  
        setError("Registration successful");  
    }

    return (
        <Container>
            <Paper elevation={2} className='login-paper' >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Register
                </Typography>
                <form className='login-form' noValidate autoComplete='off'>
                    <TextField  type='email' label='Email' variant='outlined' fullWidth value={email}
                    onChange={(e)=>setEmail(e.target.value)} className="small-margin-below"/>
                    <TextField label='First Name'  variant='outlined' fullWidth value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)} className="small-margin-below"/>
                    <TextField label='Last Name'  variant='outlined' fullWidth value={lastName}
                    onChange={(e)=>setLastName(e.target.value)} className="small-margin-below"/>
                    <TextField label='Password' type='password' variant='outlined' fullWidth value={password}
                    onChange={(e)=>setPassword(e.target.value)} className="small-margin-below"/>
                    <TextField label='Number'   variant='outlined' fullWidth value={number}
                    onChange={(e)=>setNumber(e.target.value)} className="small-margin-below"/>
                    <TextField label='Country'  variant='outlined' fullWidth value={country}
                    onChange={(e)=>setCountry(e.target.value)} className="small-margin-below"/>
                    <TextField label='Address'  variant='outlined' fullWidth value={address}
                    onChange={(e)=>setAddress(e.target.value)} className="small-margin-below"/>
                    <TextField label='State'  variant='outlined' fullWidth value={state}
                    onChange={(e)=>setState(e.target.value)} className="small-margin-below"/>
                    <TextField label='City'  variant='outlined' fullWidth value={city}
                    onChange={(e)=>setCity(e.target.value)} className="small-margin-below"/>
                    <TextField label='Zip Code'  variant='outlined' fullWidth value={zipCode}
                    onChange={(e)=>setZipCode(e.target.value)} className="small-margin-below"/>
                    <Button variant="outlined" onClick={register} className="small-margin-below">Register</Button>
                </form>
                {error}
            </Paper>
        </Container>
    )

}
