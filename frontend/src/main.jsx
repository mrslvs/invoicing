import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.jsx';
import RequireAuth from './RequireAuth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route element={<RequireAuth />}>
                        <Route exact path="/app" element={<App />} />
                    </Route>
                </Routes>
            </AuthProvider>
        </Router>
    </React.StrictMode>
);
