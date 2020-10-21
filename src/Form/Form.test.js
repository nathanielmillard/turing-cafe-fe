import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form', ()=>{
  it('Should render a form', () => {
    render(<Form />)
    expect(screen.getByText('Make Reservation')).toBeInTheDocument();
  });
  it('Should render all form inputs', () => {
    render(<Form />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Number of guests')).toBeInTheDocument();
  });
  it('Should allow a user to inpout data', () => {
    render(<Form />)
    let nameInput = screen.getByPlaceholderText('Name')
    userEvent.type(nameInput, 'Nathaniel')
    expect(nameInput.value).toEqual('Nathaniel')
  });
})
