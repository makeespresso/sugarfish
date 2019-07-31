import React from 'react';
import Burger from './Burger';

export default () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <li className="navbar-link"><a href="#">Story</a></li>
          <li className="navbar-link"><a href="#">Menu</a></li>
          <li className="fish-logo"><a href="#"><img src="/img/sugar-logo.png" alt="Sugarfish-logo" /></a></li>
          <li className="navbar-link"><a href="#">Contact</a></li>
          <li className="navbar-link"><a href="https://postmates.com/merchant/sugarfish-new-york-2" target="_blank">Order</a></li>
        </ul>
      </div >
      <Burger />
    </div>
  )
}