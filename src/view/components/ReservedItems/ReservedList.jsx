import PropTypes from 'prop-types';
import ReservedItem from './ReservedItem';
import './Reserved.scss';

const ReservedList = ({ ReservedListLabels, title }) => (
  <section className="reserved-list">
    <h4>{title}</h4>
    <div className="list-container">
      {ReservedListLabels.map((label) => (
        <ReservedItem
          key={`reserved-mission-${label}`}
          label={label}
        />
      ))}
    </div>
  </section>
);

ReservedList.propTypes = {
  ReservedListLabels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  title: PropTypes.string.isRequired,
};

export default ReservedList;
