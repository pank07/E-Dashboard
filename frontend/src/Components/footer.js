import React from 'react';
import {ReactComponent as Facebook} from './facebook-brands-solid.svg';
import {ReactComponent as Twitter } from './square-x-twitter-brands-solid.svg';
import {ReactComponent as Whatsapp } from './square-whatsapp-brands-solid.svg';
import {ReactComponent as Telegram } from './telegram-brands-solid.svg';
import {ReactComponent as Insta } from './square-instagram-brands-solid.svg';
import {ReactComponent as Telephone } from './phone-solid.svg';

function Footer() {
  return (
    <div className='footer'>Copyright © 2024 E-dashboard. All rights are reserved
    <ul className='social'>
      <li id='whatsapp'><a href='/'>
      <Whatsapp width='50' height='50' fill='Red'/></a></li>

      <li id='Facebook'><a href='/'>
      <Facebook width='50' height='50' fill='blue'/>
      </a></li>

      <li id='Twitter'><a href='/'>
      <Twitter width='50' height='50' fill='Black'/>
      </a></li>

      <li id='instagram'><a href='/'>
      <Insta width='50' height='50' fill='red'/></a></li>

      <li id='Telegram'><a href='/'>
      <Telegram width='50' height='50' fill='Black'/>
      </a></li>

      <li id='telephone'>
      <Telephone width='25' height='25' fill='Black'/>
      +91-8725898258</li>
      </ul>
    </div>
);
}

export default Footer;
