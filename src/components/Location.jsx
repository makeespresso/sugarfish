import React from 'react';

export default () => {
  return (
    <div className="location-section">
      <div className="banner location-banner">
        <img src="/img/desktop_view_location_banner.png" />
        <h2>LOCATION</h2>
      </div>
      <div className="location-img-container">
        <div className="quarter-div-img">
          <img src="/img/desktop_view_location_1.png" alt="location_1"></img>
        </div>
        <div className="quarter-div-img">
          <img src="/img/desktop_view_location_2.png" alt="location_2"></img>
        </div>
      </div>
      <div className="half-vertical-div location-info">
        <h3>SUGARFISH Flatiron</h3>
        <img src="https://img.icons8.com/android/72/000000/map.png" />
        <p>33 East 20th Street</p>
        <p>New York, NY 10003</p>
        <p>Phone: (347) 705-8100</p>
        <img src="https://img.icons8.com/windows/100/000000/clock.png" />
        <p>Monday - Thursday</p>
        <p>11:30 am - 11:00 pm</p>
        <br />
        <p>Friday - Saturday</p>
        <p>11:30 am - midnight</p>
        <br />
        <p>Sunday</p>
        <p>12:00 pm - 11:00 pm</p>
      </div>
    </div >
  )
}