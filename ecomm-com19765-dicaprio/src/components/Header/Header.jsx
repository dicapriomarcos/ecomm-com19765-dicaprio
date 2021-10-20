import React from 'react';
import './header.css'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'

export default function Header() {
  return (
    <div>
        <header>
            <Logo />
            <NavBar />
        </header>
    </div>
  );
}
