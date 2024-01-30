import React from "react";

import OrdersTable from "../components/OrdersTable";
import Header from "../Nav";
import Typography from "@mui/material/Typography";

function Orders() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{margin: "30px", textAlign: "center"}}>
                <Typography variant='h2' fontFamily={"Honk"}>Orders</Typography>
                <OrdersTable/>
            </div>
        </div>
    );
}

export default Orders;