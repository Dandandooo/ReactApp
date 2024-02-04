import React from "react";

import { Header } from "../components";
import { useParams, Link } from "react-router-dom";
import data from "../data/receipts.json";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import {Typography} from "@mui/material";

function OrderDetails() {
    const orderId = useParams().id;
    const orderDetails = getOrderDetails(orderId);

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{marginInline:"20px"}}>

                <Typography variant='h1' fontFamily={"Honk"}>Order Details</Typography>
                {orderDetails &&
                <>
                    <Typography variant='h2'>Order ID: {orderId}</Typography>
                    <Typography variant='h4'>Customer ID: <Link to={"/customers/" + orderDetails.CustomerId}>{orderDetails.CustomerId}</Link> </Typography>
                    <Typography variant='h4'>Customer: <Link to={"/customers/" + orderDetails.CustomerId}>{orderDetails.CustomerName}</Link> </Typography>
                    <Typography variant='h5'>Order Date: {orderDetails.Date} </Typography>
                    <Typography variant='h5'>Order Total: {orderDetails.Total} </Typography>
                    <Typography variant='h4'>Order Items: </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Quantity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orderDetails.Items.map((item, index) => (
                                <TableRow key={index}>
                                    <TableCell>{item.Item}</TableCell>
                                    <TableCell>{item.ItemPrice}</TableCell>
                                    <TableCell>{item.Quantity}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                        
                    </TableContainer>
                </>}
            </div>
        </div>
    );
}

function getOrderDetails(orderId) {
    return data.find(order => order.OrderId === Number(orderId));
}

export default OrderDetails;