import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { waitFor } from '@testing-library/dom';

import TemplateWrapper from '../TemplateWrapper';
import Profile from '../Pages/Profile';

describe('Testing the default Profile.tsx', () => {
  test('checks if on clicking on logout button, it redirects to the login Page', async () => {
    // render the Profile Page
    render(
      <TemplateWrapper>
        <Profile />
      </TemplateWrapper>,
    );

    // click on the logout button
    userEvent.click(await screen.findByRole('button', { name: /logout/i }));

    // wait for the Login Page to appear
    waitFor(() => {
      const studentName = screen.findByRole('textbox', { name: /Student Name:/i });
      expect(studentName).toBeInTheDocument();
    });
  });
});
