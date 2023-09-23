import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState('');    

    useEffect(() => {
        async function fetchUser() {


            const usuarioLogado = localStorage.getItem('usuarioLogado')

            if (usuarioLogado) {
                const usuarioLogadoJson = JSON.parse(usuarioLogado);

                console.log(localStorage.getItem('usuarioLogado'));

                setUser(usuarioLogadoJson);
                localStorage.setItem('usuarioLogado', JSON.stringify(usuarioLogadoJson));
            }
            else {
                setUser('');
                localStorage.setItem('usuarioLogado', '');
            }


            // const listaUsuarios = localStorage.getItem("usuarios");
            // const listaUsuariosJson = JSON.parse(listaUsuarios);
            // if (!listaUsuariosJson) {
            //     return;
            // }

            // const usuarioTentativa = listaUsuariosJson[values.login];
            // if (!usuarioTentativa) {

            //     return;
            // }
            // else {
            //     setUser(usuarioTentativa);
            // }
        }
        fetchUser();
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}