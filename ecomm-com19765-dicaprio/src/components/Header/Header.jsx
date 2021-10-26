import React from 'react';
import './header.css'
import Logo from '../Logo/Logo'
import NavBar from '../NavBar/NavBar'
import CartWidget from '../CartWidget/CartWidget'

export default function Header() {
  return (
    <>
        <header>
            <Logo />
            <NavBar />
            <CartWidget />
        </header>
    </>
  );
}
