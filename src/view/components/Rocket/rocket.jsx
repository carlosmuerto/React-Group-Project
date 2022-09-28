/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const [reserved, setReserved] = useState(false);
  const {
    id, rocketName, description, flickrImages,
  } = rocket;
  const [image, setImage] = useState(flickrImages[0]);
  return (
    <div className="rocket-card">
      <img src={image} alt={rocketName} />
      <div className="rocket-info">
        <h2>{rocketName}</h2>
        <p>
          {reserved ? (<p className="reserve">Reserved</p>) : null}
          {description}
        </p>
        {/* reserve button */}
        <button type="button" className={reserved ? 'cancel' : 'reserved'} onClick={() => setReserved(!reserved)}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    rocketName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Rocket;
