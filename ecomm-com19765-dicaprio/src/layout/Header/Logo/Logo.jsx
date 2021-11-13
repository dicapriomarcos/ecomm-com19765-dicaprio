import React from 'react';
import './Logo.css'
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <div id="logo">
        <Link to="/">
        REACTive Móvil Shop
        </Link>
    </div>
  );
}
