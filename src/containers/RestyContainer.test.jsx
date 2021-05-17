import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RestyContainer from './RestyContainer';

describe('it tests restys ability to insert and api url and return results', () => {
  it('returns json from an api call', async () => {
    render(<RestyContainer />);

    screen.findByLabelText('GET');

    const input = await screen.findAllByPlaceholderText('URL');
    userEvent.type(
      input,
      'https://hey-arnold-api.herokuapp.com/api/v1/characters'
    );

    const methodButton = await screen.findByLabelText('get');
    userEvent.click(methodButton);

    // const submitButton = await screen.findAllByRole('button', {
    //   name: 'go-button',
    // });
    // userEvent.click(submitButton);
  });
});
