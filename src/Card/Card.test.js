import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Card from './Card';

describe('Card', ()=>{
  it('Renders a card', () => {
    render(<Card />);
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });
  it('Render all props passed', () => {
    render(<Card
      name='Nathaniel'
      date='09/23'
      time='12:00'
      number='4'
      />);
    expect(screen.getByText('Nathaniel')).toBeInTheDocument();
    expect(screen.getByText('09/23')).toBeInTheDocument();
    expect(screen.getByText('12:00 pm')).toBeInTheDocument();
    expect(screen.getByText('Number of guests:4')).toBeInTheDocument();
  });
})
