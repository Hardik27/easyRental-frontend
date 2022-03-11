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

    const borrowProductPage = () =>{
        navigate("/borrowProduct");
    }

    return(
            <table>
                <tr>
                    <td>
                        <Paper elevation={1} className='login-paper' >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Lending
                            </Typography>
                            <form  noValidate autoComplete='off'>
                                <Button variant="outlined" onClick={regProductPage} className="small-margin-below"> Register a product</Button>
                                <Button variant="outlined"  className="small-margin-below"> Manage your inventory</Button>
                                <Button variant="outlined"  className="small-margin-below"> My Earnings</Button>
                            </form>
                        </Paper>
                    </td>
                    <td>
                        <Paper elevation={1} className='login-paper' >
                            <Typography variant="h6" component="div">
                                Borrow
                            </Typography>
                            <form  noValidate autoComplete='off'>
                                <Button variant="outlined" onClick={borrowProductPage} className="small-margin-below"> Borrow a new product</Button>
                            </form>
                        </Paper>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Paper elevation={1} className='login-paper' >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Transactions
                            </Typography>
                            <table>
                                <tr>
                                    <td>
                                    <form  noValidate autoComplete='off'>
                                        <lable>Vaccuum Cleaner Transaction</lable>
                                        <Button variant="outlined" color="success" className="small-margin-below"> Approve</Button>
                                        <Button variant="outlined"  color="error" className="small-margin-below"> Reject</Button>
                                    </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                    <form  noValidate autoComplete='off'>
                                        <lable>Play Station Transaction</lable>
                                        <Button variant="outlined" color="success" className="small-margin-below"> Approve</Button>
                                        <Button variant="outlined"  color="error" className="small-margin-below"> Reject</Button>
                                    </form>
                                    </td>
                                </tr>
                            </table>
                            
                        </Paper>
                    </td>
                    <td>
                        <Paper elevation={1} className='login-paper' >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                My Account
                            </Typography>
                            <form  noValidate autoComplete='off'>
                                <Button variant="outlined" className="small-margin-below"> Edit account details</Button>
                                <Button variant="outlined"  onClick={() => navigate("/")} className="small-margin-below"> LogOut</Button>
                            </form>
                        </Paper>
                    </td>
                </tr>
            </table>
        
    );
}