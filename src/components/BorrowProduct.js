import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { Switch, TextField } from '@mui/material/';
import './Login.css'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import LoginService from '../services/LoginService';
import UserHome from './UserHome';
import axios from "axios"
import AppBarSearch from './AppBarSearch';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../img/ps5.jpeg"
import image2 from "../img/switch.jpeg"
import image3 from "../img/xbox.jpg"

const USER_REST_API_URL="http://localhost:8080"


export default function BorrowProduct(){
    
    return(
        <div>
            <AppBarSearch/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Borrow Product Page
            </Typography>
            <hr></hr>
            <AliceCarousel autoPlay autoPlayInterval="3000">
                <img src={image1} className="sliderimg"/>
                <img src={image2} className="sliderimg"/>
                <img src={image3} className="sliderimg"/>
            </AliceCarousel>
        </div>
        
    );
}
