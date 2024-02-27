import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import {Memory} from "@mui/icons-material";


const CustomerDetails = require('./CustomerDetails');

test('CustomerDetails should be a function', () => {
  expect(typeof CustomerDetails).toBe('function');
});

test("Elizabeth shown on customer id 1 when rendered", () => {
    render(
        <MemoryRouter initialEntries={["/customers/1"]}>
            <Route path="/customers/:id">
                <CustomerDetails />
            </Route>
        </MemoryRouter>
    );
    expect(screen.getByText("Elizabeth")).toBeInTheDocument();
});

test("Check that table exists by key", () => {
    render(
        <MemoryRouter initialEntries={["/customers/1"]}>
            <Route path="/customers/:id">
                <CustomerDetails />
            </Route>
        </MemoryRouter>
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
});

