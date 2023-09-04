import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

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
        <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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