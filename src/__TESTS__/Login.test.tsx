import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';

import TemplateWrapper from '../TemplateWrapper';
import Login from '../Pages/Login';

describe('Testing the default Login.tsx', () => {
  test('checks if login button is disabled on Login Page load', async () => {
    // render the Login Page
    render(
      <TemplateWrapper>
        <Login />
      </TemplateWrapper>,
    );

    // check if the login button is disabled
    expect(await screen.findByRole('button', { name: /Login/i })).toBeDisabled();
  });

  test('check if on login with a wrong student name, the form shows an error message', async () => {
    // render the Login Page
    render(
      <TemplateWrapper>
        <Login />
      </TemplateWrapper>,
    );

    // simulate user input
    const studentName = await screen.findByRole('textbox', { name: /Student Name:/i });
    userEvent.type(studentName, 'wrong name');

    // click on the login button
    userEvent.click(await screen.findByRole('button', { name: /Login/i }));

    // wait for the error message to appear
    // waitFor(() => expect(screen.getByText(/Student Name not found/i)).toBeInTheDocument());
    waitFor(() => expect(screen.getByRole('region', { name: /Student Name not found/i })).toBeInTheDocument());
  });

  test('check if on login with a correct student name, the Profile Page shows with student name and his classes', async () => {
    // render the Login Page
    render(
      <TemplateWrapper>
        <Login />
      </TemplateWrapper>,
    );

    // simulate user input
    const studentName = screen.getByRole('textbox', { name: /Student Name:/i });
    userEvent.type(studentName, 'Joe James');

    // click on the login button
    userEvent.click(await screen.findByRole('button', { name: /Login/i }));

    // wait for the Profile Page to appear
    waitFor(() => {
      // check if the Profile Page shows with the student name
      expect(screen.getByRole('heading', { name: /Joe James/i })).toBeInTheDocument();
      // check if the Profile Page shows with the right classes
      expect(screen.getByRole('heading', { name: /CS104/i })).toBeInTheDocument();
      expect(screen.getByRole('listitem', { name: /Khalid/i })).toBeInTheDocument();
    });
  });
});
