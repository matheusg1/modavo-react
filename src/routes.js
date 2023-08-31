import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Index from './pages/inicio'
import Cadastro from './pages/cadastro';
import Login from './pages/login';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to="/" replace />} />
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    )
}