import React, { useState, useEffect } from 'react';
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from 'react-router-dom';
import { Toast } from '../../services';

export default function Login() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        login: "",
        senha: ""
    })

    useEffect(() => {
        /*if (user) {
            navigate('/menu');
        }*/
    }, [user]);


    const handleChangeValues = (e) => {

        setValues((prevValues) => ({
            ...prevValues,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!values.login || !values.senha) {
            Toast.fire({
                icon: 'error',
                title: 'Preencha os campos'
            })
            return;
        }

        const listaUsuarios = localStorage.getItem("usuarios");
        const listaUsuariosJson = JSON.parse(listaUsuarios);
        if (!listaUsuariosJson) {
            Toast.fire({
                icon: 'error',
                title: 'Usuário não encontrado'
            })
            return;
        }

        const usuarioTentativa = listaUsuariosJson[values.login];
        if (!usuarioTentativa) {
            Toast.fire({
                icon: 'error',
                title: 'Usuário não encontrado'
            })
            return;
        }

        if (values.login === usuarioTentativa.login && values.senha === usuarioTentativa.senha) {
            setUser(usuarioTentativa);
            localStorage.setItem('usuarioLogado', JSON.stringify(usuarioTentativa));
            navigate('/2fa');
        }
        else {
            setUser('');
        }
        return;
    }

    return (
        <>
            <form className="d-flex justify-content-center align-items-center flex-fill"
                onSubmit={handleSubmit}
            >
                <div className="my-auto p-4 col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3 form-card rounded-1">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="InputLogin"
                            name="login"
                            onChange={handleChangeValues}
                            placeholder='login'
                        />
                        <label for="InputLogin" className="form-label">Login</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="InputSenha"
                            name="senha"
                            onChange={handleChangeValues}
                            placeholder='Senha'
                        />
                        <label for="InputSenha" className="form-label">Senha</label>
                    </div>
                    <button type="submit" className="btn btn-lg btn-outline-primary rounded-2 w-100">Entrar</button>
                </div>
            </form>
        </>
    );
}