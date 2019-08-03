import React from 'react';

export default () => {
  return (
    <>
      <div className="banner story-banner">
        <p className="location-banner-title">Location</p>
        <img src="/img/desktop_view_location_banner.png" />
      </div>
      <div className="location-section">
        <div className="location-img-container">
          <img className="location-img-top" src="/img/desktop_view_location_1.png" alt="location_1"></img>
          <img src="/img/desktop_view_location_2.png" alt="location_2"></img>
        </div>
        <div className="half-vertical-div location-info">
          <h3>SUGARFISH Flatiron</h3>
          <img src="https://img.icons8.com/android/72/000000/map.png" />
          <div>
            <p>33 East 20th Street</p>
            <p>New York, NY 10003</p>
            <p>Phone: (347) 705-8100</p>
          </div>
          <img src="https://img.icons8.com/windows/100/000000/clock.png" />
          <div>
            <p>Monday - Thursday</p>
            <p>11:30 am - 11:00 pm</p>
          </div>
          <div>
            <p>Friday - Saturday</p>
            <p>11:30 am - midnight</p>
          </div>
          <div>
            <p>Sunday</p>
            <p>12:00 pm - 11:00 pm</p>
          </div>
        </div>
      </div >
    </>
  )
}