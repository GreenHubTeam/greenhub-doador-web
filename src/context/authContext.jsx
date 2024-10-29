import { api } from "../libs/axios";
import { isAxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
    const [token, setToken] = useState("");
    const [user, setUser] = useState("");

    async function loginUser(email, password) {
        try {
            const resposta = await api.post('/login', {
                email: email,
                password: password
            });

            const decoded = jwtDecode(resposta.data.token);
            setUser(decoded);

            setToken(resposta.data.token);

            localStorage.setItem('@greenhubDONOR:token', resposta.data.token);

            return true;
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Error interno no servidor");
            }

            return false
        }
    }

    async function registerUser(body) {
        try {
            const resposta = await api.post('/user', body);

            setToken(resposta.data.token);

            const decoded = jwtDecode(resposta.data.token);
            setUser(decoded);

            localStorage.setItem('@greenhubDONOR:token', resposta.data.token);

            toast.success("Conta criada com sucesso");

            return true
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(error.response.data.message)
            } else {
                toast.error("Error interno no servidor");
            }

            return false
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('@greenhubDONOR:token');

        if (token) {
            setToken(token);
            const decoded = jwtDecode(token);
            setUser(decoded);
        }
    }, [])

    function logout() {
        setToken(null);
        setUser(null);
        localStorage.removeItem('@greenhubDONOR:token');
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                user,
                loginUser,
                registerUser,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}