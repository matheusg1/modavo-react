import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Index from './pages/inicio';
import Cadastro from './pages/Cadastro/Cadastro';
import TwoFa from './pages/TwoFa/TwoFa';
import Login from './pages/Login/Login';
import Sms from './pages/Sms/Sms';

import { useAuth } from './hooks/useAuth';

export default function AppRoutes() {
    const { user } = useAuth();
    return (

        <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />            
            <Route
                path="/2fa"
                element={user ? <TwoFa /> : <Navigate to="/login" replace />}
            />
            <Route
                path="/sms"
                element={user ? <Sms /> : <Navigate to="/login" replace />}
            />
        </Routes>

    )
}