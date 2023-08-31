import React from 'react';

export default function Login() {
    return (
        <>
            <form className="d-flex justify-content-center align-items-center flex-fill"
                >
                <div className="my-auto p-4 col-12 col-sm-8 col-md-6 col-lg-5 col-xl-3 form-card rounded-1">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="InputEmail"
                            name="email"

                            placeholder='Email'
                            required
                        />
                        <label for="InputEmail" className="form-label">Login</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="InputSenha"
                            name="password"
                            placeholder='Senha'
                            required
                        />
                        <label for="InputSenha" className="form-label">Senha</label>
                    </div>
                    <button type="submit" className="btn btn-lg btn-outline-primary rounded-2 w-100">Entrar</button>                    
                </div>
            </form>
        </>
    );
}