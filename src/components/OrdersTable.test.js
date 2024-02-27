import { render, screen} from '@testing-library/react';
const OrdersTable = require('./OrdersTable');

test("simple table is a label", () => {
    // Using queryByLabelText
    render(<OrdersTable />)
    const table = screen.queryByLabelText("simple table");
    expect(table).toBeInTheDocument();
});