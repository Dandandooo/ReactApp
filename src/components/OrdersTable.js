import data from '../data/receipts.json';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from "react-router-dom";

function OrdersTable() {
    return (
        <div class={"row justify-content-center"}>
            <div class={"col-11"}>
                <TableContainer component={Paper}>
                    <Table sx = {{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Order ID</TableCell>
                                <TableCell>Customer ID</TableCell>
                                <TableCell>Customer</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(
                                (order, index) => <TableRow key={order.OrderId}>
                                    <TableCell>{<Link to={"/orders/" + order.OrderId}>{order.OrderId}</Link>}</TableCell>
                                    <TableCell>{<Link to={"/customers/" + order.CustomerId}>{order.CustomerId}</Link>}</TableCell>
                                    <TableCell>{<Link to={"/customers/" + order.CustomerId}>{order.CustomerName}</Link>}</TableCell>
                                    <TableCell>{order.Date}</TableCell>
                                    <TableCell>{order.Total}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}
module.exports = OrdersTable;
export default OrdersTable;