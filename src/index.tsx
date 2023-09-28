import React from 'react';
import { createRoot } from 'react-dom/client';
import GlobalStyles from './styles/GlobalStyles';
import { App } from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement);
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>,
);
serviceWorkerRegistration.register();
