"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <a href="#">Garibaldi</a>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Sobre Mim</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Conhecimento</a></li>
        </ul>

        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}

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
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          z-index: 1000;
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
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          transition: transform 0.3s ease;
        }

        .nav-links li {
          margin: 15px 0;
        }

        .nav-links a {
          color: black;
          text-decoration: none;
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .nav-links a:hover {
          color: #f4a261;
          transform: translateY(-5px);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .hamburger .bar {
          width: 25px;
          height: 3px;
          background-color: #333;
          margin: 4px 0;
          transition: all 0.3s ease;
        }

        .hamburger.open .bar:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open .bar:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open .bar:nth-child(3) {
          transform: translateY(-14px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .nav-links {
            position: fixed;
            top: 0;
            right: 0;
            width: 50%;
            height: 100vh;
            background-color: white;
            flex-direction: column;
            align-items: center;
            display: flex;
            transform: translateX(100%);
            transition: transform 0.3s ease-in-out;
            box-shadow: -10px 0 15px rgba(0, 0, 0, 0.3);
          }

          .nav-links.active {
            transform: translateX(0);
          }

          .hamburger {
            display: flex;
          }
        }

        @media (min-width: 769px) {
          .nav-links {
            display: flex;
            flex-direction: row;
            height: auto;
            transform: none;
            position: static;
            background: none;
            box-shadow: none;
          }

          .nav-links li {
            margin: 0 15px;
          }

          .hamburger {
            display: none;
          }
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }
      `}</style>
    </>
  );
}
