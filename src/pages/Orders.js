import React from "react";

import { Header, OrdersTable } from "../components";
import { Typography } from "@mui/material";

function Orders() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{margin: "30px", textAlign: "center"}}>
                <Typography variant='h1'>Orders</Typography>
                <OrdersTable/>
            </div>
        </div>
    );
}

export default Orders;