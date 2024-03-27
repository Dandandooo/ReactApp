import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
// const OrdersTable = require('./OrdersTable');
import OrdersTable from './OrdersTable';
import { BrowserRouter } from "react-router-dom";

test("simple table is a label", () => {
    // Using queryByLabelText
    render(<BrowserRouter> <OrdersTable /> </BrowserRouter>)
    const table = screen.queryByLabelText('simple table');
    expect(table).toBeInTheDocument();
});