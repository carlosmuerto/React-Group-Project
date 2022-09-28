import PropTypes from 'prop-types';
import './MissionsList.scss';

const MissionsItem = ({
  name,
  id,
  description,
  reserved,
}) => {
  const onClick = () => {
    // eslint-disable-next-line no-console
    console.log(id);
  };
  return (
    <tr>
      <td className="missions-item name">
        {name}
      </td>
      <td className="missions-item description">
        {description}
      </td>
      <td className="missions-item status">
        <div
          className={`mission-status-label ${reserved ? 'reserved' : undefined}`}
        >
          {reserved ? 'active member' : 'not a member'}
        </div>
      </td>
      <td className="missions-item recerve-btn">
        <button
          className={`${reserved ? 'reserved' : undefined}`}
          type="button"
          onClick={onClick}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

MissionsItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionsItem;
