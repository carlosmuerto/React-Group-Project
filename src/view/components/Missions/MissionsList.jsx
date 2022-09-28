import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionsItem from './MissionsItem';
import * as missionRedux from '../../../features/mission/MissionSlice';
import './MissionsList.scss';

const MissionsList = () => {
  const dispatch = useDispatch();
  const missions = useSelector(missionRedux.selectMissions);
  const recerved = useSelector(missionRedux.selectResserved);

  useEffect(() => {
    dispatch(missionRedux.fetch());
  }, [dispatch]);
  return (
    <section className="missions-list">
      {missions.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th className="missions-item-header Name">Missions</th>
              <th className="missions-item-header description">Description</th>
              <th className="missions-item-header Status">Status</th>
              <th className="missions-item-header Recerve-btn">Join</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <MissionsItem
                key={`missions-item-${mission.id}`}
                name={mission.name}
                description={mission.description}
                id={mission.id}
                reserved={recerved.includes(mission.id)}
              />
            ))}
          </tbody>
        </table>
      ) : undefined}
    </section>
  );
};

export default MissionsList;
