import { expect } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';
import { Formik } from 'formik';
import { ThemeProvider } from 'styled-components';

import { darkTheme } from '@/application/Themes';

import { TextBox } from './index';

describe('TextBox', () => {
    it('The TextBox should be rendered without crushing', () => {
        const handleSubmit = () => {
        };

        render(
            <Formik initialValues={{ field: '' }} onSubmit={handleSubmit}>
                < ThemeProvider theme={darkTheme}>
                    <TextBox type="text" name="field"/>
                </ThemeProvider>
            </Formik>,
        );
        const modal = screen.queryByTestId('textbox');
        expect(modal)
            .toBeTruthy();
    });

    it('User can enter text in the input field', () => {
        const handleSubmit = () => {
        };

        render(
            <Formik initialValues={{ field: '' }} onSubmit={handleSubmit}>
                < ThemeProvider theme={darkTheme}>
                    <TextBox type="text" name="field"/>
                </ThemeProvider>
            </Formik>,
        );

        const input: HTMLInputElement = screen.getByTestId('textbox-input');
        const testText = 'Test input text';

        fireEvent.change(input!, { target: { value: testText } });

        expect(input.value)
            .toBe(testText);
    });
});
