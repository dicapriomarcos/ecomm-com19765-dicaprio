import React from 'react';
import menu from './menu.png';
import './NavBar.css'
import LinkComponent from './LinkComponent/LinkComponent';



function NavBar() {



  function menuToggle(){
    document.getElementById('menu').classList.toggle('open');
  }

  return (
    <div id="menu-wrapper">
          <ul id="menu">
            <LinkComponent slug={'samsung'} title={'Samsung'} />
            <LinkComponent slug={'xiaomi'} title={'Xiaomi'} />
            <LinkComponent slug={'apple'} title={'Apple'} />
          </ul>
          <div id="menuToggle" onClick={menuToggle}>
              <img src={menu} alt="" />
          </div>
    </div>
  );
}

export default NavBar;
