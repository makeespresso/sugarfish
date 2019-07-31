import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-address">
        <p>SUGARFISH</p>
        <p>33 East 20th Street</p>
        <p>New York, 10003</p>
        <p>Phone: (347)-705-8100</p>
      </div>
      <div className="footer-center">
        <div className="footer-nav">
          <p>Story</p>
          <p>Menu</p>
          <p>Contact</p>
          <p>Order</p>
          <p>Site Map</p>
        </div>
        <p>Copyright © Sushi Nozawa, LLC. All rights reserved.     Privacy Policy  |  Terms of Use</p>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com/SugarfishFlatiron/" target="_blank"><img src="https://img.icons8.com/officel/48/000000/facebook.png" /></a>
        <a href="https://twitter.com/sugarfish" target="_blank"><img src="https://img.icons8.com/color/48/000000/twitter.png" /></a>
        <a href="https://www.instagram.com/sugarfishbynozawa/" target="_blank"><img src="https://img.icons8.com/ios-filled/48/000000/instagram.png" /></a>
        <a href="https://www.pinterest.com/kazunorinozawa/sugarfish/" target="_blank"><img src="https://img.icons8.com/color/48/000000/pinterest.png" /></a>
      </div>
    </div>
  )
}

export default Footer;