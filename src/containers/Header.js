import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Header.css';

export default () => (
  <Menu right pageWrapId="page-wrap" outerContainerId="outer-container" crossClassName="customCross">
    <a id="home" className="menu-item" href="/">Home</a>
    <a id="about" className="menu-item" href="/">Portfolio</a>
    <a id="contact" className="menu-item" href="/contact">Contact</a>
  </Menu>
);
