import React, {useState} from "react";
import './Register.css';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function UserHome( ){
    const navigate = useNavigate();

    const regProductPage = () =>{
        navigate("/registerProduct");
    }

    return(
        <Container>
            <Paper elevation={1} className='login-paper' >
                <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                    Welcome
                </Typography>
                <form  noValidate autoComplete='off'>
                    <Button variant="outlined" onClick={regProductPage} className="small-margin-below"> Register a product</Button>
                    <Button variant="outlined"  className="small-margin-below"> Search for a product</Button>
                    <Button variant="outlined"  onClick={() => navigate("/")} className="small-margin-below"> LogOut</Button>
                </form>
            </Paper>
        </Container>
    );
}