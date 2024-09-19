import React from 'react';
import { useState } from 'react';
import "./Login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [surname, setSurname] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Enviando", username, surname, email, password);
        alert("Dados sendo Enviados: " + username + " " + surname + " " + email + " " + password);
    };

    return (
        <div className="container-principal">
           <div className="container-esquerda">
           <img src="/logo sem fundo.png" alt="Logo" className="logo" />
    <h1>Seja bem-vindo(a)!</h1>
    <h2>Apoie sua ONG favorita!</h2>
    <img src="/save-planet-concept-leaves-restore_23-2148512777-removebg-preview.png" alt="Support NGO" className="support-image" />
           </div>

            <div className="container-direita">
                <form onSubmit={handleSubmit}>
                    <div className="login-link">
                        Já tem uma conta? <a href="#">Clique Aqui</a>
                    </div>
                    
                    <div className="input-field inline">
                        <input type="text" placeholder="Nome" required onChange={(e) => setUsername(e.target.value)} />
                        <input type="text" placeholder="Sobrenome" required onChange={(e) => setSurname(e.target.value)} />
                    </div>
                    
                    <div className="input-field">
                        <input type="email" placeholder="E-mail" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    
                    <div className="input-field">
                        <input type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit">Criar Conta</button>
                    <div>
                        Ao inscrever-se você concorda com os <a href="#"> termos de uso</a>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
