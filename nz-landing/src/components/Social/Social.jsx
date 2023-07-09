import React from 'react';


import {  Icon } from '@chakra-ui/react';

import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import "./social.css"

export default function Social() {

  return(
 
<div className="redesBar">
<ul className="wrapper">
    <li className="icon instagram">
      <span className="tooltip">Instagram</span>
      <span>
        <a href="https://www.instagram.com/" target="_blank" >
          <Icon  as={FaInstagram} />
        </a>
      </span>
    </li>
  
    <li className="icon mail">
      <span className="tooltip">Mail</span>
      <span><a href="mailto:floarditti@gmail.com" target="_blank">
      <Icon  as={HiOutlineMail} />
        </a>
        </span>
    </li>
    <li className="icon whatsapp">
      <span className="tooltip">WhatsApp</span>
      <span><a href="#" target="_blank">
      <Icon as={FaWhatsapp} />
         </a>
         </span>
    </li>
</ul>
</div>
  )
}