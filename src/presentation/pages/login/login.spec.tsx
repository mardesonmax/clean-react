/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import Login from '.';

describe('Login Component', () => {
  it('Should not render spinner and error on start', () => {
    const { getByTestId } = render(<Login />);

    const errorWrap = getByTestId('error-wrap');

    expect(errorWrap.childElementCount).toBe(0);

    const buttonSubmit = getByTestId('submit') as HTMLButtonElement;

    expect(buttonSubmit.disabled).toBe(true);
  });
});