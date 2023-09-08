/**
 * @jest-environment jsdom
 */
import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { Loader } from './index';

it('The loader should be rendered without crushing', () => {
    render(<Loader color="blue"/>);
    const loader = screen.queryByTestId('line-wave-wrapper');
    expect(loader).toBeTruthy();
});
