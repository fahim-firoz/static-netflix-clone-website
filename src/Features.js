import React from "react";

function Features() {
  return (
    <div className="features">
      <div className="row">
        <div className="text-col">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
        </div>
        <div className="image-col">
          <img src="./images/feature-1.png" />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="image-col">
          <img src="./images/feature-2.png" />
        </div>
        <div className="text-col">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="text-col">
          <h1>Watch everywhere</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
        </div>
        <div className="image-col">
          <img src="./images/feature-3.png" />
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="image-col">
          <img src="./images/feature-4.png" />
        </div>
        <div className="text-col">
          <h1>Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
