import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Form from '../Form/Form';
import userEvent from '@testing-library/user-event';

it('User should be able to input and make a reservation', () => {
  const div = document.createElement('div');
  render(<App />)
  let nameInput = screen.getByPlaceholderText('Name')
  let dateInput = screen.getByPlaceholderText('Date (mm/dd)')
  let timeInput = screen.getByPlaceholderText('Time')
  let numberInput = screen.getByPlaceholderText('Number of guests')
  userEvent.type(nameInput, 'Nathaniel')
  userEvent.type(dateInput, '09/23')
  userEvent.type(timeInput, '12:00')
  userEvent.type(numberInput, '4')
  expect(nameInput.value).toEqual('Nathaniel')
  userEvent.click(screen.getByText('Make Reservation'))
  expect(screen.getByText('Number of guests:4')).toBeInTheDocument();
});
