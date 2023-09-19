import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";
import imgLogo from '../../img/logo.svg'

export default function Navbar() {
    const [checked, setChecked] = useState(false);

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

    return (
        <nav className="navbar navbar-expand-sm bg-body-tertiary navbar-custom">
            <div className="container-fluid fw-semibold">
                <Link class="navbar-brand nav-link" to="/">
                    <img src={imgLogo} alt="Logo" width="34" class="d-inline-block mt-0 align-bottom"/>
                    Integra
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse fw-medium" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cadastro">Cadastrar</Link>
                        </li>
                    </ul>
                    <div className="d-flex me-sm-2">
                        <span className="me-2" >☾</span>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
                                checked={checked}
                                onChange={handleChange}
                            />
                            <label className="form-check-label" for="flexSwitchCheckDefault">☼</label>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}