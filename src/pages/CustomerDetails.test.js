import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import {Memory} from "@mui/icons-material";

// TODO: Pasha take a look at this

const CustomerDetails = require('./CustomerDetails');

test('CustomerDetails should be a function', () => {
  expect(typeof CustomerDetails).toBe('function');
});

test("Elizabeth shown on customer id 1 when rendered", () => {
    render(
        <MemoryRouter initialEntries={["/customers/1"]}>
            <Routes>
                <Route path="/customers/:id">
                    <CustomerDetails />
                </Route>
            </Routes>
        </MemoryRouter>
    );
    expect(screen.getByText("Elizabeth")).toBeInTheDocument();
});

test("Check that table exists by key", () => {
    render(
        <MemoryRouter initialEntries={["/customers/1"]}>
            <Routes>
                <Route path="/customers/:id">
                    <CustomerDetails />
                </Route>
            </Routes>
        </MemoryRouter>
    );
    expect(screen.getByRole("table")).toBeInTheDocument();
});

