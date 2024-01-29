'use client';
import { useEffect, useState } from "react";

export default function DashBoard() {
    const [ isAdm, setIsAdm ] = useState(false);
    const [ userInput, setUserInput ] = useState('');
    const pass = '123';

    const handleEnter = () => {
        if (userInput === pass) {
            setIsAdm(true);
        } else {
            alert('Senha incorreta!');
        }
    };

    return !isAdm ? (
        <div className="flex flex-col items-center justify-center border-2 border-yellow-500 shadow-md p-4 rounded max-w-md mx-auto mt-8 mb-4">
          <p className="text-center">Insira a senha para acessar o painel de administração:</p>
          <input 
            type="password" 
            onChange={(e) => setUserInput(e.target.value)}
            className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt-4 w-full"
          />
        <button
        onClick={() => handleEnter()}
        className="border-2 border-yellow-500 shadow-md bg-white px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-brown-500 mt-4"
        >
        Entrar
        </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center border-2 border-yellow-500 shadow-md p-4 rounded max-w-md mx-auto mt-8 mb-4">
          <p className="text-center">Bem vindo ao painel de administração!</p>
        </div>
      );
}
