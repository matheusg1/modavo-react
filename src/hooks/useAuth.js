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