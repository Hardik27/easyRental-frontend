import React, { useState } from "react";
import './Register.css';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios"
import { myStorage } from "../App";

const USER_REST_API_URL = "http://localhost:8080"


export default function RegisterProduct() {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const [specififcation, setSpecification] = useState('');
    const [tags, setTags] = useState('');

    const onImageChange = (e) => {
        setImage([...e.target.files])
    }

    const [error, setError] = useState('');

    const registerProduct = (e) => {
        e.preventDefault();
        const registerProductData = { title: name, price: price, description: description, image: image, productMetaData: specififcation, tags, tags };
        registerProductData.email = myStorage.getItem("email");
        console.log(registerProductData);

        axios.post(`${USER_REST_API_URL}` + "/registerProduct", registerProductData)
            .then(res => {
                if (res.data === "Successful") {
                    navigate("/userHome");
                }
                else {
                    setError("Unable to register Product");
                }
            })
    }

    return (
        <Container>
            <Paper elevation={2} className='login-paper' >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Register Product
                </Typography>
                {error}
                <form className='login-form' noValidate autoComplete='off'>
                    <TextField label='Product Name' variant='outlined' fullWidth value={name}
                        onChange={(e) => setName(e.target.value)} className="small-margin-below" />
                    <TextField label='Price' variant='outlined' fullWidth value={price}
                        onChange={(e) => setPrice(e.target.value)} className="small-margin-below" />
                    <TextField label='Relevant tags' variant='outlined' fullWidth value={tags}
                        onChange={(e) => setTags(e.target.value)} className="small-margin-below" />
                    <TextField label='Description' variant='outlined' fullWidth value={description}
                        onChange={(e) => setDescription(e.target.value)} multiline className="small-margin-below" />
                    <TextField label='Specifications' variant='outlined' fullWidth value={specififcation}
                        onChange={(e) => setSpecification(e.target.value)} multiline className="small-margin-below" />
                    <label>Picture: </label>
                    <input type="file" className="small-margin-below" onChange={onImageChange} />
                    <br></br>
                    <Button variant="outlined" onClick={registerProduct} className="small-margin-below">Register</Button>
                    <Button variant="outlined" onClick={() => navigate(-1)} className="small-margin-below">Back</Button>
                </form>
            </Paper>
        </Container>
    )

}
