"use client"; 
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu hambúrguer

  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="#">Garibaldi</a>
        </div>

        {/* Menu links, com classe "active" aplicada quando o menu hambúrguer estiver aberto */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Sobre Mim</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Conhecimento</a></li>
        </ul>

        {/* Menu hambúrguer */}
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* Overlay escurecido quando o menu está aberto */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

      {/* Estilos CSS inline */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
        }

        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 20px;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: white; /* Navbar com fundo branco */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
          z-index: 1000; /* Garante que a navbar fique acima de outros elementos */
        }

        .navbar .logo a {
          color: black;
          text-decoration: none;
          font-size: 24px;
          font-weight: bold;
        }

        .nav-links {
          list-style: none;
          display: flex;
          transition: transform 0.3s ease; /* Adiciona a transição suave */
        }

        .nav-links li {
          margin-left: 20px;
        }

        .nav-links a {
          color: black;
          text-decoration: none;
          font-size: 18px;
          transition: transform 0.3s ease; /* Adiciona a transição de animação */
        }

        .nav-links a:hover {
          color: #f4a261;
          transform: translateY(-5px); /* "Levanta" o item quando o mouse passa */
        }

        /* Estilos para o Menu Hambúrguer */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }

        .hamburger .bar {
          width: 25px;
          height: 3px;
          background-color: #333;
          margin: 4px 0;
          transition: all 0.3s ease;
        }

        /* Quando o menu estiver aberto, as barras se transformam em "X" */
        .hamburger.open .bar:nth-child(1) {
          transform: rotate(45deg);
          position: relative;
          top: 6px;
        }

        .hamburger.open .bar:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .bar:nth-child(3) {
          transform: rotate(-45deg);
          position: relative;
          top: -6px;
        }

        /* Responsividade */
        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 60px;
            right: 0;
            width: 50%; /* 50% da largura da tela */
            height: 100vh;
            background-color: white;
            flex-direction: column;
            align-items: center;
            display: none;
            z-index: 1;
            box-shadow: -10px 0 15px rgba(0, 0, 0, 0.3); /* Sombras na metade da tela */
            transform: translateX(100%); /* Começa fora da tela */
            transition: transform 0.3s ease-in-out; /* Transição suave ao abrir */
          }

          .nav-links.active {
            display: flex;
            transform: translateX(0); /* Mostra o menu deslizando */
          }

          .hamburger {
            display: flex;
          }
        }

        /* Overlay escurecido */
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5); /* Escurecer o lado oposto */
          z-index: 999;
        }
      `}</style>
    </>
  );
}
