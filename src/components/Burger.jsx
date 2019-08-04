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
          <a id="story" className="menu-item" href="#">Story</a>
          <a id="menu" className="menu-item" href="#">Menu</a>
          <a id="contact" className="menu-item" href="#">Contact</a>
          <a id="order" className="menu-item" href="#">Order</a>
          <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
        </Menu>
      </div>
    );
  }
}

export default Burger;