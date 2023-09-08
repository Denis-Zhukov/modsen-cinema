import { expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { NavButton } from './index';

describe('NavButton', () => {
    it('The NavButton should be rendered without crushing', () => {
        render(<NavButton path="#">Some text</NavButton>);
        const modal = screen.queryByText('Some text');
        expect(modal).toBeTruthy();
    });
});
