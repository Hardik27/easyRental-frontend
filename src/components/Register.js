import React, {useState} from "react";
import './Register.css';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from "axios"
import RegisterUserService from "../services/RegisterUserService";
import { useNavigate } from 'react-router-dom';

const USER_REST_API_URL="http://localhost:8080"

export default function Register(){

    const navigate = useNavigate();
    
    const[email, setEmail] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[password, setPassword] = useState('');
    const[number, setNumber] = useState('');
    const[country, setCountry] = useState('');
    const[addressLine1, setAddressLine1] = useState('');
    const[addressLine2, setAddressLine2] = useState('');
    const[city, setCity] = useState('');
    const[state, setState] = useState('');
    const[zipCode, setZipCode] = useState('');
    const[error, setError] = useState('');
    var sha256 = require('js-sha256').sha256;
    const register = (e) =>{
        e.preventDefault();
        const registerUserPayLoad={email: email, password: sha256(password), firstName: firstName, lastName: lastName, mobile: number,
            country: country, addressLine1: addressLine1, addressLine2: addressLine2, city: city, 
            state: state, zipCode: zipCode};
        console.log(registerUserPayLoad);
         
        axios.post(`${USER_REST_API_URL}`+"/registerUser",registerUserPayLoad) 
        .then(res => {
            if(res.data === "Successful")
            {
                navigate("/registerConfirmation");
            }
            else
                {
                   setError("Already registered");
                }
          })
        
    }

    

    return (
        <Container>
            <Paper elevation={2} className='login-paper' >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Register
                </Typography>
                {error}
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
                    <TextField label='Address Line 1'  variant='outlined' fullWidth value={addressLine1}
                    onChange={(e)=>setAddressLine1(e.target.value)} className="small-margin-below"/>
                    <TextField label='Address Line 2'  variant='outlined' fullWidth value={addressLine2}
                    onChange={(e)=>setAddressLine2(e.target.value)} className="small-margin-below"/>
                    <TextField label='State'  variant='outlined' fullWidth value={state}
                    onChange={(e)=>setState(e.target.value)} className="small-margin-below"/>
                    <TextField label='City'  variant='outlined' fullWidth value={city}
                    onChange={(e)=>setCity(e.target.value)} className="small-margin-below"/>
                    <TextField label='Zip Code'  variant='outlined' fullWidth value={zipCode}
                    onChange={(e)=>setZipCode(e.target.value)} className="small-margin-below"/>
                    <Button variant="outlined" onClick={register} className="small-margin-below">Register</Button>
                    <Button variant="outlined" onClick={() => navigate(-1)} className="small-margin-below">Back</Button>
                </form>
            </Paper>
        </Container>
    )

}
