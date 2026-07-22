import React from 'react';

const Card = (props) => {
  const handle = props.name ? props.name.toLowerCase().replace(/\s+/g, '_') : 'user';

  return (
    <div className="card">
      <div className="profile-img-container">
        <div className="story-ring">
          <img src={props.img}/>
        </div>
      </div>

      <div className="profile-info">
        <h2 className="profile-name">
          {props.name} <span className="verified-icon">✓</span>
        </h2>
        <p className="profile-handle">@{handle}</p>
        <p className="profile-bio">💻 Full Stack Developer | 🎂 {props.age} y/o</p>
      </div>

      <div className="profile-stats">
        <div className="stat">
          <span className="stat-num">142</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat">
          <span className="stat-num">12.5k</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-num">410</span>
          <span className="stat-label">Following</span>
        </div>
      </div>

      <div className="card-actions">
        <button className="btn-follow">Follow</button>
        <button className="btn-message">Message</button>
      </div>
    </div>
  );
};

export default Card;
