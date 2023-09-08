import { expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';

import { Modal } from './index';

describe('Modal', () => {
    it('The modal should be rendered without crushing', () => {
        const handleClose = () => {};

        render(
            <>
                <Modal onClose={handleClose}>Some text</Modal>
                <div id="modal" />
            </>,
        );
        const modal = screen.queryByTestId('modal-wrapper');
        expect(modal)
            .toBeTruthy();
    });

    it('The modal should be closed on click close button', () => {
        const handleClose = jest.fn();

        render(
            <>
                <Modal onClose={handleClose}>Some text</Modal>
                <div id="modal" />
            </>,
        );

        const close = screen.getByTestId('modal-close');

        fireEvent.click(close);
        expect(handleClose).toBeCalled();
    });

    it('The modal should be closed on click away', () => {
        const handleClose = jest.fn();

        render(
            <>
                <Modal onClose={handleClose}>Some text</Modal>
                <div id="modal" />
            </>,
        );

        const close = screen.getByTestId('modal-wrapper');

        fireEvent.mouseDown(close);
        expect(handleClose).toBeCalled();
    });
});
