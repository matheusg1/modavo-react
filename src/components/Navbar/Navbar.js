import React, { useEffect, useState } from 'react';
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from 'react-router-dom';
import imgLogo from '../../img/logo.svg'

export default function Navbar() {
    const [checked, setChecked] = useState(false);
    const { user, setUser } = useAuth();
    const navigate = useNavigate();


    const handleChange = (event) => {
        setChecked(event.target.checked);
        let element = document.body;
        element.dataset.bsTheme = element.dataset.bsTheme == "light" ? "dark" : "light";
        localStorage.setItem('darkmode', element.dataset.bsTheme)
    };

    useEffect(() => {
        let localDarkMode = localStorage.getItem('darkmode')
        let element = document.body;

        if (localDarkMode == undefined || localDarkMode == 'light') {
            element.dataset.bsTheme = 'light';
            setChecked(true);
        }
        if (localDarkMode == 'dark') {
            element.dataset.bsTheme = 'dark';
            setChecked(false);
        }
    },)

    async function logout() {
        setUser('')
        localStorage.setItem('usuarioLogado', '')
        navigate('/login');
    }

    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary navbar-custom">
            <div className="container-fluid fw-semibold">
                <Link class="navbar-brand nav-link" to="/">
                    <img src={imgLogo} alt="Logo" width="34" class="d-inline-block mt-0 align-bottom" />
                    Integra
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <label className="navbar-toggler-icon"></label>
                </button>
                <div className="collapse navbar-collapse fw-medium" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        {!user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/cadastro">Cadastro</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/2fa">2FA</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sms">SMS</Link>
                                </li>
                            </>
                        )}
                    </ul>
                    <div className='d-flex'>
                        <label for="switchDarkMode" className="me-2" >☾</label>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="switchDarkMode"
                                checked={checked}
                                onChange={handleChange}
                            />
                            <label for="switchDarkMode" className="me-2" >☼</label>
                        </div>
                    </div>
                    <span class="navbar-text text-primary-emphasis pe-sm-2">
                        {user ? (user.login) : ('')}
                    </span>
                    <div className="d-flex me-sm-2">
                        {user ? (
                            <Link className="nav-link pe-lg-4" to="/login" onClick={logout}>Deslogar</Link>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}