import { useState } from 'react';
import PropTypes from 'prop-types';

const Rocket = ({ rocket }) => {
  const [reserved, setReserved] = useState(false);
  const {
    // eslint-disable-next-line no-unused-vars
    id,
    name,
    description,
    flickrImages,
  } = rocket;
  return (
    <div className="rockets">
      <img src={flickrImages[0]} alt={name} />
      <div className="rocket-description">
        <h2>{name}</h2>
        <p>
          {reserved ? (<p className="button-reserve">Reserved</p>) : null}
          {description}
        </p>
        {/* reserve button */}
        <button type="button" className={reserved ? 'button-cancel' : 'button-reserved'} onClick={() => setReserved(!reserved)}>
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Rocket;
