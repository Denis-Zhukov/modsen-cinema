/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react';

import { Loader } from './index';

it('App Router: Works with Client Components (React State)', () => {
    const { container } = render(<Loader color="blue"/>);

    screen.queryByTestId('line-wave-wrapper');
});
