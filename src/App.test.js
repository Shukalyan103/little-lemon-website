import { BrowserRouter } from 'react-router-dom';
import { fireEvent,render } from '@testing-library/react';
import App from './App';
import BookingForm from './components/Bookingform';
import Header from './components/Header';
import Main from './components/Main';
import Bookingpage from './components/Bookingpage';

test('Renders the Header heading', () => {
    render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve a table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button");
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByLabelText("Date");
    expect(headingElementNew).toBeInTheDocument();
})

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = []
   userEvent.selectOptions(screen.getByLabelText("time"),screen.getByRole('option', { name: testTime}))
   expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);


})