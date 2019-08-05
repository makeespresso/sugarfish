import React from 'react';

const Story = () => {
  return (
    <div id="story-page">
      <div className="banner story-banner">
        <h2 className="banner-title">OUR STORY</h2>
        <img className="banner-img" src="/img/desktop_view_story_banner.png" alt="a bunch of fish" />
      </div>
      <div className="story-page">
        <div className="chef">
          <img className="nozawa" src="/img/desktop_view_story_chef.png" alt="Mr. Nozawa" />
        </div>
        <div className="story-text">
          <p>SUGARFISH by sushi nozawa, with multiple locations in USA, is a different kind of sushi dining experience. Our restaurants serve only traditional sushi of the highest quality based on Chef Nozawa’s style of sushi. Our passion is to carry forward his great tradition and style of food – which many believe is the best sushi there is.</p>
          <p>SUGARFISH embodies the philosophy of celebrated sushi chef Kazunori Nozawa, well-known for his Trust Me-style sushi at Sushi Nozawa, which operated in Studio City from 1985-2012. Nozawa shuns “American-style” extravagant rolls and fusion dishes. Instead he concentrates on the purity of his basic ingredients— nurturing relationships with the finest fish purveyors across the globe, cutting his fish with an artisan’s painstaking care, and even making his own fresh soy sauce and ponzu.</p>
          <p className="story-long">New school vision Chef Nozawa’s legendary brings legendary food to our guests with quality and efficiency, The SUGARFISH team has made more changes defying the conventional wisdom about sushi places. Our menu, while always featuring the highest quality items is greatly simplified. Guests often choose from three core menus called Trust Me’s. These takeoff from the traditional Japanese omakase. The biggest change is there are no visible sushi chef’s behind the sushi bar. By moving our sushi-making to the kitchen we are set up for maximum quality and efficiency (not for show).</p>
          <p className="story-long">Zagat rated “Most Popular Restaurant in Los Angeles” Kazunori Nozawa and Jerry A. Greenberg founded Sushi Nozawa, LLC. These two have been friends for decades and their plan was to take the food Chef Nozawa perfected at his namesake restaurant, Sushi Nozawa located in Studio City and make it more accessible while remaining 100% committed to quality food.</p>
        </div>
      </div>
    </div >
  )
}

export default Story;