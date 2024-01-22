import React from "react";

import Header from "./Nav";
import { useParams, Link } from "react-router-dom";
import data from "./receipts.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function OrderDetails() {
    const orderId = useParams().id;
    const orderDetails = getOrderDetails(orderId);

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{marginInline:"20px"}}>
                <h1>Order Details</h1> {orderDetails && 
                <>
                    <h2>Order ID: {orderId}</h2>
                    <h2>Customer ID: <Link to={"/customers/" + orderDetails.CustomerId}>{orderDetails.CustomerId}</Link> </h2>
                    <h2>Customer: <Link to={"/customers/" + orderDetails.CustomerId}>{orderDetails.CustomerName}</Link> </h2>
                    <h3>Order Date: {orderDetails.Date} </h3>
                    <h3>Order Total: {orderDetails.Total} </h3>
                    <h3>Order Items: </h3>
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