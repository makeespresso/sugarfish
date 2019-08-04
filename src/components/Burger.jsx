import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class Burger extends React.Component {

  showSettings = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <div className="burger-menu">
        <Menu>
          <a id="story" className="menu-item" href="#story-page">Story</a>
          <a id="menu" className="menu-item" href="#menu">Menu</a>
          <a id="contact" className="menu-item" href="#location">Contact</a>
          <a id="order" className="menu-item" href="https://postmates.com/merchant/sugarfish-new-york-2">Order</a>
          <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
      </div>
    );
  }
}

export default Burger;