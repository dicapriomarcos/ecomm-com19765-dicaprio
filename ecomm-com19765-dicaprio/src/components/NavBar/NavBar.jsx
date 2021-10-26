import React from 'react';
import menu from './menu.png';
import './NavBar.css'

function NavBar() {

  function menuToggle(){
    document.getElementById('menu').classList.toggle('open');
  }

  return (
    <div id="menu-wrapper">
          <ul id="menu">
              <li>
               <a href="https://amomimovil.marcosdicaprio.dev">Categoría 1</a> 
              </li>
              <li>
              <a href="https://amomimovil.marcosdicaprio.dev">Categoría 2</a> 
              </li>
              <li>
              <a href="https://amomimovil.marcosdicaprio.dev">Categoría 3</a> 
              </li>
          </ul>
          <div id="menuToggle" onClick={menuToggle}>
              <img src={menu} alt="" />
          </div>
    </div>
  );
}

export default NavBar;
