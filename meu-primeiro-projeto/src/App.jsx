import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function Saudacao() {
return (
  <div style={{
    backgroundColor: '#f0f0f0',padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
     <h2 style={{color: '#007bff'}}>Olá, Alunos!</h2>
      <p>Este componente foi criado separadamente.</p>
 </div>
)
}

function Componente() {
return (
  <div style={{
    backgroundColor: '#bfc8ff',padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
     <h2 style={{color: '#3a10f1'}}>Olá, Componente!</h2>
      <p>Este componente foi criado separadamente.</p>
 </div>
)
}

function React() {
return (
  <div style={{
    backgroundColor: '#e6c2fa',padding: '10px', borderRadius: '8px', marginBottom: '10px'}}>
     <h2 style={{color: '#ea00ff'}}>Olá, React!</h2>
      <p>Este componente foi criado separadamente.</p>
 </div>
)
}


function Perfil({teste, cargo}) {
return (
  <div style={{
    backgroundColor: '#c2f0c2',padding: '10px', borderRadius: '8px', padding: '10px', margin: '10px',backgroundColor: '#c2f0c2', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'}}>
    <h3 style={{ margin: '10px', color: '#00b300'}}> 👤 nome: {teste}
    </h3>

    <p style={{margin: 0, color:'#444'}}> 📚 cargo: <strong>{cargo}</strong>
    </p>
 </div>
);
}


function App() {
return (
 <div>
   <h1>Olá, React!</h1>
   <p>Estou alterando meu primeiro componente.</p>

   <div style={{padding:'20px'}}>
     <h1>Minha Primeira Aula de React</h1>
     <hr />

   {/* Aqui nos chamamos o componente que criamos acima */}


    perfil: <Perfil teste="João" cargo="Desenvolvedor Front-end" />
    perfil: <Perfil teste="Maria" cargo="Designer Gráfico e biólogo" />
    <Saudacao />
    <Saudacao />
    <Saudacao />

    <Componente />
    <React />
    
    
    <p>Note que eu posso repetir o componente quantas vezes quiser!</p>
  </div>
 </div>
)
}

export default App


