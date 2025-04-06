import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import TodoApp from './App';

// Находим корневой элемент
const container = document.getElementById('root');

// Создаем корень React
const root = createRoot(container);

// Рендерим приложение
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <TodoApp />
        </Provider>
    </React.StrictMode>
);