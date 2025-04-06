import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Todo } from './Todo.jsx';
import '@testing-library/jest-dom';

describe('Todo Component', () => {
    test('renders TODO title', () => {
        render(<Todo />);
        expect(screen.getByText('TA-DA')).toBeInTheDocument();
    });

    test('allows text input in the task field', () => {
        render(<Todo />);
        const input = screen.getByPlaceholderText('Введіть завдання');
        fireEvent.change(input, { target: { value: 'Test123' } });
        expect(input.value).toBe('Test123');
    });

    test('shows error when submitting empty form', async () => {
        render(<Todo />);
        fireEvent.click(screen.getByText('Додати'));
        expect(await screen.findByText(/error/i)).toBeInTheDocument();
    });

    test('adds new task to the list', () => {
        render(<Todo />);
        const input = screen.getByPlaceholderText('Введіть завдання');
        const button = screen.getByText('Додати');

        fireEvent.change(input, { target: { value: 'Нове завдання' } });
        fireEvent.click(button);

        expect(screen.getByText('Нове завдання')).toBeInTheDocument();
    });

    test('removes task when delete button is clicked', () => {
        render(<Todo />);
        const input = screen.getByPlaceholderText('Введіть завдання');
        const addButton = screen.getByText('Додати');

        fireEvent.change(input, { target: { value: 'Завдання для видалення' } });
        fireEvent.click(addButton);

        const removeButton = screen.getByText('Remove');
        fireEvent.click(removeButton);

        expect(screen.queryByText('Завдання для видалення')).not.toBeInTheDocument();
    });

    test('clears input after adding task', () => {
        render(<Todo />);
        const input = screen.getByPlaceholderText('Введіть завдання');
        const button = screen.getByText('Додати');

        fireEvent.change(input, { target: { value: 'Тестове завдання' } });
        fireEvent.click(button);

        expect(input.value).toBe('');
    });
});