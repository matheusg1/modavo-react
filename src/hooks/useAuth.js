import { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
    const [user, setUser] = useState('');
    const [usuarioLogado, setUsuarioLogado] = useState('')

    useEffect(() => {
        async function fetchUser() {


            if(localStorage.getItem('usuarioLogado')){
                console.log(JSON.parse(localStorage.getItem('usuarioLogado')));
                //setUser(user);
            }
            else{
                
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
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}