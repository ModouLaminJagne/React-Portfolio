import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai';
import { RiServiceLine } from 'react-icons/ri';
import { IoIosContact } from 'react-icons/io';
import { BiBook } from 'react-icons/bi';
import { useState } from 'react';

const Nav = () => {
  const [activeNave, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#home" className={activeNave==='#'?'active':''}>
        <AiOutlineHome />
      </a>
      <a href="#about" > 
        <AiOutlineUser />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#contact">
        <IoIosContact />
      </a>
    </nav>
  );
}

export default Nav