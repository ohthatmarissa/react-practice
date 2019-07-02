import React from 'react';
import { Link } from 'react-router-dom';
import icecream1 from '../assets/images/ice-cream1.jpg';

function Header(){
  return(
    <div>
      <style jsx global>{`
            h1 {
                font-size: 100px:
            }
        `}</style>
      <h1>Marissa Perry Portfolio</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
      <img src={icecream1}/>
      <br/><br/>
    </div>
  );
}

export default Header;