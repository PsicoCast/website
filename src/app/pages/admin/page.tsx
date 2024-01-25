import React from 'react'

const passWord = '123456';

export default function Admin() {
  return (
    <div>
      <h1>Admin</h1>
      <input type="password" placeholder="Digite a senha" />
      <button>Entrar</button>
    </div>
  )
}
