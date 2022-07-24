/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import Login from '.';

describe('Login Component', () => {
  it('Should start with initial state', () => {
    const { getByTestId } = render(<Login />);

    const errorWrap = getByTestId('error-wrap');

    expect(errorWrap.childElementCount).toBe(0);

    const buttonSubmit = getByTestId('submit') as HTMLButtonElement;

    expect(buttonSubmit.disabled).toBe(true);

    const emailStatus = getByTestId('email-status');

    expect(emailStatus.title).toBe('Campo obrigatório');

    const passwordStatus = getByTestId('password-status');

    expect(passwordStatus.title).toBe('Campo obrigatório');
  });
});
