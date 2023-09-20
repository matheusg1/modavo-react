import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Index from './pages/Inicio/Index';
import Cadastro from './pages/Cadastro/Cadastro';
import TwoFa from './pages/TwoFa/TwoFa';
import Login from './pages/Login/Login';
import Sms from './pages/Sms/Sms';

export default function AppRoutes() {
    return (
        
            <Routes>
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/2fa" element={<TwoFa />} />
                <Route path="/sms" element={<Sms />} />
            </Routes>
        
    )
}