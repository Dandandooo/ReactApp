import React from "react";

import OrdersTable from "./Table";
import Header from "./Nav";

export default function Orders() {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <div style={{margin: "30px", textAlign: "center"}}>
                <h1>Orders</h1>
                <OrdersTable/>
            </div>
        </div>
    );
}