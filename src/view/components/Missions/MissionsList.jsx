import MissionsItem from './MissionsItem';
import missionsMock from './missionsMockItems';
import './MissionsList.scss';

const MissionsList = () => (
  <section className="missions-list">
    <table>
      <tr>
        <th className="missions-item-header Name">Missions</th>
        <th className="missions-item-header description">Description</th>
        <th className="missions-item-header Status">Status</th>
        <th className="missions-item-header Recerve-btn">Join</th>
      </tr>
      {
        missionsMock.map((mission, index) => (
          <MissionsItem
            key={`missions-item-${mission.mission_id}`}
            name={mission.mission_name}
            description={mission.description}
            Id={mission.mission_id}
            reserved={index % 2 === 0}
          />
        ))
      }

    </table>
  </section>
);

export default MissionsList;
