import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import * as rocketRedux from '../../../features/rockets/RocketSlice';

const Rocket = ({ rocket }) => {
  const dispatch = useDispatch();
  const {
    id,
    name,
    description,
    flickrImages,
  } = rocket;
  const reservedRockets = useSelector(rocketRedux.selectResserved);

  const reserved = reservedRockets.includes(id);
  const onClick = () => {
    if (reserved) dispatch(rocketRedux.leave(id));
    else dispatch(rocketRedux.reserve(id));
  };
  return (
    <div className="rockets">
      <img src={flickrImages[0]} alt={name} />
      <div className="rocket-description">
        <h2>{name}</h2>
        <div>
          {reserved ? (<p className="button-reserve">Reserved</p>) : null}
          <p>
            {description}
          </p>
        </div>
        <button type="button" className={reserved ? 'button-cancel' : 'button-reserved'} onClick={onClick}>
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
