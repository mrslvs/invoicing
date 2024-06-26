import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.jsx';
import Home from './components/home/Home.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider.jsx';
import { ThemeProvider } from './context/ThemeProvider.jsx';
import { TranslationProvider } from './context/TranslationProvider.jsx';
import RequireAuth from './RequireAuth.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <ThemeProvider>
                <TranslationProvider>
                    <AuthProvider>
                        <Routes>
                            <Route exact path="/" element={<Home />} />
                            <Route element={<RequireAuth />}>
                                <Route exact path="/app" element={<App />} />
                            </Route>
                        </Routes>
                    </AuthProvider>
                </TranslationProvider>
            </ThemeProvider>
        </Router>
    </React.StrictMode>
);
