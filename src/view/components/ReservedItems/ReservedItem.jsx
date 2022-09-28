import PropTypes from 'prop-types';
import './Reserved.scss';

const ReservedItem = ({ label }) => (
  <div className="reserved-item">
    <h5>{label}</h5>
  </div>
);

ReservedItem.propTypes = {
  label: PropTypes.string.isRequired,
};

export default ReservedItem;
