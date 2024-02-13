import React from "react";

import { Header, OrdersTable } from "../components";
import { Typography } from "@mui/material";

function Orders() {
    return (
        <div>
            <Header/>
            <Typography variant='h1'>Orders</Typography>
            <OrdersTable/>
        </div>
    );
}

export default Orders;