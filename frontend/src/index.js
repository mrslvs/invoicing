import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import RequireAuth from './RequireAuth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="*" element={<Home />} />
                    {/* <PrivateRoute path="/app" element={<App />} /> */}
                    <Route element={<RequireAuth />}>
                        <Route path="/app" element={<App />}></Route>
                    </Route>
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
