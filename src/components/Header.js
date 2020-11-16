import React from "react";
import '../App.css'
import { ReactComponent as Logo } from '../images/logo.svg';
const Header = () => {
  return (
    <div className="header">
        <Logo className="logo"/>
      <div className="header-right">
        <a className="active" href="#home">
          Home
        </a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
};

export default Header;