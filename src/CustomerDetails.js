import React from "react";

import Header from "./Nav";
import { useParams } from "react-router-dom";
import data from "./receipts.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom'

export default function OrderDetails() {
    const customerId = useParams().id;
    const customerDetails = getCustomerDetails(customerId);
    const items = getItems(customerId);
    const total = "$" + items.reduce((total, item) => total + Number(item.Total.slice(1)), 0);

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{marginLeft:"20px"}}>
                <h1>Customer Details</h1> {customerDetails && 
                <>
                    <h2>Customer (ID): {customerDetails.CustomerName} ({customerDetails.CustomerId}) </h2>
                    <h3>Total Spent: {total}</h3>
                    <h3>Orders:</h3>
                    <TableContainer component={Paper} key="OrderTable">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>OrderId</TableCell>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((order, index) => (
                                <TableRow key={order.OrderId}>
                                    <TableCell>{<Link to={"/orders/" + order.OrderId}>{order.OrderId}</Link>}</TableCell>
                                    <TableCell>{order.Date}</TableCell>
                                    <TableCell>{order.Total}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <h3>All Items:</h3>
                    <TableContainer component={Paper} key="ItemTable">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>OrderId</TableCell>
                                    <TableCell>Item</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Quantity</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items.map((order, index) => (
                                    
                                        order.Items.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{<Link to={"/orders/" + order.OrderId}>{order.OrderId}</Link>}</TableCell>
                                                <TableCell>{item.Item}</TableCell>
                                                <TableCell>{item.ItemPrice}</TableCell>
                                                <TableCell>{item.Quantity}</TableCell>
                                            </TableRow>
                                        ))
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>}
            </div>
        </div>
    );
}

function getCustomerDetails(customerId) {
    return data.find(customer => customer.CustomerId === Number(customerId));
}

function getItems(customerId) {
    return data.filter(customer => customer.CustomerId === Number(customerId));
}