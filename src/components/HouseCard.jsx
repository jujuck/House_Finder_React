import React from 'react';

const HouseCard = ({ house }) => {

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-img"
          style={{ backgroundImage: `url(${house.img})`, }}>
        </div>
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${house.img})`,
          }}
        ></div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{house.name}</h2>
        <p className="card-description">{house.desc}</p>
        <div style={{ display: 'flex' }} >
          {house.stars.map(star => <p key={star}>{star}</p>)}
        </div>
        <button className="card-button">I want it!</button>
      </div>
    </div>
  )
}

export default HouseCard