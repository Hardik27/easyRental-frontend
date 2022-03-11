import React, {useState} from "react";
import './Register.css';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Login from "./Login";

export default function RegisterConfirmation( ){
    const navigate = useNavigate();

    const goBack = () =>{
        navigate("/");
    }

    return(
        <Container>
            <Paper elevation={2} className='login-paper' >
                <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
                    Registration successful
                </Typography>
                <form className='login-form' noValidate autoComplete='off'>
                    <Button variant="outlined" onClick={goBack} className="small-margin-below"> Go back to Login page</Button>
                </form>
            </Paper>
        </Container>
    );
}