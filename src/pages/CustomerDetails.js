import React from "react";

import Header from "../Nav";
import { useParams } from "react-router-dom";
import data from "../receipts.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const StyledTableContainer = styled(TableContainer)
`
    width: 100%;
    margin: 20px;
    margin-inline: 40px;
`;

function OrderDetails() {
    const customerId = useParams().id;
    const customerDetails = getCustomerDetails(customerId);
    const items = getItems(customerId);
    const total = "$" + items.reduce((total, item) => total + Number(item.Total.slice(1)), 0);

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                <Typography variant='h2' fontFamily={'Honk'}>Customer Details</Typography> {customerDetails &&
                <>
                    <Typography variant='h4'>Customer (ID): {customerDetails.CustomerName} ({customerDetails.CustomerId}) </Typography>
                    <Typography variant='h4'>Total Spent: {total}</Typography>
                    <Typography variant='h4'>Orders:</Typography>
                    <StyledTableContainer component={Paper} key="OrderTable">
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
                    </StyledTableContainer>
                    <Typography variant='h4'>All Items:</Typography>
                    <StyledTableContainer component={Paper} key="ItemTable">
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
                                {items.map((order) => (
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
                    </StyledTableContainer>
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

export default OrderDetails;