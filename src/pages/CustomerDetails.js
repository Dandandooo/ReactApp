import React from "react";

import { useParams, Link } from "react-router-dom";
import data from "../data/receipts.json";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import { Header } from "../components";
import {TableTheme, Theme} from "../theme";

const StyledTableContainer = styled(TableContainer)
`
    margin-bottom: 20px;
`;

function CustomerDetails() {
    const customerId = useParams().id;
    const customerDetails = getCustomerDetails(customerId);
    const items = getItems(customerId);
    const total = "$" + items.reduce((total, item) => total + Number(item.Total.slice(1)), 0);

    return (
        <div>
            <Header/>
            <div class={"row justify-content-center"}>
                <div class={"col-11"}>
                    <Typography variant='h1'>Customer Details</Typography> {customerDetails &&
                    <>
                        <Typography variant='h2'>Customer (ID): {customerDetails.CustomerName} ({customerDetails.CustomerId}) </Typography>
                        <Typography variant='h3'>Total Spent: {total}</Typography>
                        <Typography variant='h3'>Orders:</Typography>
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
                        <Typography variant='h3'>All Items:</Typography>
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
        </div>
    );
}

function getCustomerDetails(customerId) {
    return data.find(customer => customer.CustomerId === Number(customerId));
}

function getItems(customerId) {
    return data.filter(customer => customer.CustomerId === Number(customerId));
}

module.exports = CustomerDetails;d
export default CustomerDetails;