import React, {useState} from "react";
import './Register.css';
import Container from '@mui/material/Container';
import { TextField } from '@mui/material/';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Input from '@material-ui/core/Input';


export default function RegisterProduct(){

    const navigate = useNavigate();

    const[name, setName] = useState('');
    const[price, setPrice] = useState('');
    const[image, setImage] = useState('');
    const[description, setDescription] = useState('');
    
    const onImageChange = (e) =>{
        setImage([...e.target.files])
    }

    return (
        <Container>
            <Paper elevation={2} className='login-paper' >
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Register
                </Typography>
                <form className='login-form' noValidate autoComplete='off'>
                    <TextField label='Product Name'  variant='outlined' fullWidth value={name}
                    onChange={(e)=>setName(e.target.value)} className="small-margin-below"/>
                    <TextField label='Price'  variant='outlined' fullWidth value={price}
                    onChange={(e)=>setPrice(e.target.value)} className="small-margin-below"/>
                    <TextField label='Description'  variant='outlined' fullWidth value={description}
                    onChange={(e)=>setDescription(e.target.value)} multiline className="small-margin-below"/>
                    <br></br>
                    <label>Picture: </label>
                    <input type="file" className="small-margin-below" onChange={onImageChange} />  
                    <br></br>   
                    <Button variant="outlined"  className="small-margin-below">Register</Button>
                    <Button variant="outlined" onClick={() => navigate(-1)} className="small-margin-below">Back</Button>
                </form>
            </Paper>
        </Container>
    )

}
