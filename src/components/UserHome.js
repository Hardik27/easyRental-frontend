import React, { useState } from "react";
import './Register.css';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import EasyRentalAppBar from "./EasyRentalAppBar";
import { myStorage } from "../App";
import axios from "axios"

const USER_REST_API_URL = "http://localhost:8080"

export default function UserHome() {
    const navigate = useNavigate();
    const regProductPage = () => {
        navigate("/registerProduct");
    }

    const borrowProductPage = () => {
        navigate("/borrowProduct");
    }

    const logout = () => {
        myStorage.clear();
        navigate("/");
    }

    

    function rejectTransaction(bookingId){
        const rejectTransactionPayLoad = { bookingId: bookingId};
        console.log(rejectTransactionPayLoad);
        axios.get(`${USER_REST_API_URL}` + "/rejectTransaction?id="+bookingId)
            .then(res => {
                if (res.data === "Successful") {
                    fetchOutStandingTransactions();
                    navigate("/userHome");
                }
                else {
                    // set Error
                }
            })
    }

    function fetchOutStandingTransactions(){
        axios.get(`${USER_REST_API_URL}` + "/fetchAllProducts?email="+myStorage.getItem("email"))
                .then(res => {
                    myStorage.setItem("pendingTransaction", res.data);
                    
                })
        console.log(myStorage.getItem("pendingTransaction"));
    }

    function approveTransaction(bookingId){
        const approveTransactionPayLoad = { bookingId: bookingId};
        console.log(approveTransactionPayLoad);
        axios.post(`${USER_REST_API_URL}` + "/approveTransaction", approveTransactionPayLoad)
            .then(res => {
                if (res.data === "Successful") {
                    fetchOutStandingTransactions();
                    navigate("/userHome");
                }
                else {
                }
            })
    }

    return (
        <div>
            <EasyRentalAppBar />
            <table>
                <tr>
                    <td>
                        <Paper elevation={1} className='login-paper' >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Lending
                            </Typography>
                            <form noValidate autoComplete='off'>
                                <Button variant="outlined" onClick={regProductPage} className="small-margin-below"> Register a product</Button>
                                <Button variant="outlined" className="small-margin-below"> Manage your inventory</Button>
                                <Button variant="outlined" className="small-margin-below"> My Earnings</Button>
                            </form>
                        </Paper>
                    </td>
                    <td>
                        <Paper elevation={1} className='login-paper' >
                            <Typography variant="h6" component="div">
                                Borrow
                            </Typography>
                            <form noValidate autoComplete='off'>
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
                            {
                                myStorage.getItem("pendingTransaction").map(
                                    transaction =>
                                    <tr key={transaction.title}>
                                        <td>
                                        <form noValidate autoComplete='off'>
                                            <lable>{transaction.title}</lable>
                                            <Button variant="outlined" color="success" onClick={()=>approveTransaction(transaction.bookingId)} className="small-margin-below"> Approve</Button>
                                            <Button variant="outlined" color="error" onClick={()=>rejectTransaction(transaction.bookingId)} className="small-margin-below"> Reject</Button>
                                        </form>
                                        </td>
                                    </tr>
                                )
                            }
                                {/* <tr>
                                    <td>
                                        <form noValidate autoComplete='off'>
                                            <lable>Vaccuum Cleaner Transaction</lable>
                                            <Button variant="outlined" color="success" onClick={()=>approveTransaction(1)} className="small-margin-below"> Approve</Button>
                                            <Button variant="outlined" color="error" onClick={()=>rejectTransaction(1)} className="small-margin-below"> Reject</Button>
                                        </form>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <form noValidate autoComplete='off'>
                                            <lable>Play Station Transaction</lable>
                                            <Button variant="outlined" color="success" onClick={()=>approveTransaction(2)} className="small-margin-below"> Approve</Button>
                                            <Button variant="outlined" color="error" onClick={()=>approveTransaction(2)} className="small-margin-below"> Reject</Button>
                                        </form>
                                    </td>
                                </tr> */}
                            </table>

                        </Paper>
                    </td>
                    <td>
                        <Paper elevation={1} className='login-paper' >
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                My Account
                            </Typography>
                            <form noValidate autoComplete='off'>
                                <Button variant="outlined" className="small-margin-below"> Edit account details</Button>
                                <Button variant="outlined" onClick={logout} className="small-margin-below"> LogOut</Button>
                            </form>
                        </Paper>
                    </td>
                </tr>
            </table>
        </div>
    );
}