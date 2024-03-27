import {render, screen, waitFor} from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import * as axios from 'axios';

// TODO: Pasha take a look at this
import CustomerDetails from './CustomerDetails';
import * as React from "react";
import '@testing-library/jest-dom';
import axios from "axios";
// const CustomerDetails = require('./CustomerDetails');

test('CustomerDetails should be a function', () => {
  expect(typeof CustomerDetails).toBe('function');
});

test("Make sure customer details is present", () => {
    render(
        <MemoryRouter initialEntries={["/customers/1"]}>
            <Routes>
                <Route path="/customers/:id" element={<CustomerDetails />}/>
            </Routes>
        </MemoryRouter>
    );
    expect(screen.getByText("Customer Details")).toBeInTheDocument();
});

test("Find elizabeth", () => {

    render(
        <MemoryRouter initialEntries={["/customers/1"]}>
            <Routes>
                <Route path="/customers/:id" element={<CustomerDetails/>}/>
            </Routes>
        </MemoryRouter>
    );
    expect(screen.getByText("Elizabeth")).toBeInTheDocument();
});

test("Feed Mock Data", () => {
    const mock_data = {
        "CustomerName": "John Doe",
        "CustomerId": "1",
        "Date": "2021-10-01",
        "Items": [
                {
                    "Item": "Candle",
                    "ItemPrice": "$3.00",
                    "Quantity": "3"
                },
                {
                    "Item": "Book",
                    "ItemPrice": "$15.00",
                    "Quantity": "1"
                }
        ],
        "OrderId": "1",
        "Total": "$18.00",
    }

    beforeEach(() => {
        axios.get.mockResolvedValue({ customerDetails: mock_data });
    });

    it('renders the component with data from the API', async () => {
        render(<CustomerDetails />);

        // Wait for the API call to resolve and the component to update
        await waitFor(() => {
          expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('User List');
        });
        // Test the presence of the list items
        // const listItems = screen.getAllByRole('listitem');
        // expect(listItems).toHaveLength(3);
        // expect(listItems[0]).toHaveTextContent('John Doe');
        // expect(listItems[1]).toHaveTextContent('Jane Smith');
        // expect(listItems[2]).toHaveTextContent('Bob Johnson');
        expect(screen.getByText("John Doe")).toBeInTheDocument();
    })
});

test("Check that table exists by key", () => {
    render(
        <MemoryRouter initialEntries={["/customers/1"]}>
            <Routes>
                <Route path="/customers/:id" element={<CustomerDetails/>} />
            </Routes>
        </MemoryRouter>
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
});

