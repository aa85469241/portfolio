import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Router
import { BrowserRouter as Router } from 'react-router-dom';
// context
import { GlobalProvider } from './context/GlobalContext'

ReactDOM.render(
    <React.StrictMode>
        <GlobalProvider>
            <Router>
                <App />
            </Router>
        </GlobalProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
