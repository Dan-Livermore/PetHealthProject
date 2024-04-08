import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UpdatePassword from '../../../Components/Accounts/UpdatePassword';


test('Renders UpdatePassword Component', () => {
    render(
      <BrowserRouter>
        <UpdatePassword />
      </BrowserRouter>
    );
  
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });