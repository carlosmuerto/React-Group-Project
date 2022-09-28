import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import MissionsItem from './MissionsItem';
import * as missionRedux from '../../../features/mission/MissionSlice';
import loadingStatus from '../../../features/reduxConst';
import './MissionsList.scss';
/*

    id: missions.mission_id,
    name: missions.mission_name,
    description: missions.description,

*/
const MissionsList = () => {
  const dispatch = useDispatch();
  const loading = useSelector(missionRedux.selectloadingStatus);
  const missions = useSelector(missionRedux.selectMissions);

  useEffect(() => {
    if (loading === loadingStatus.idle) dispatch(missionRedux.fetch());
  }, [dispatch, loading]);
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
            {missions.map((mission, index) => (
              <MissionsItem
                key={`missions-item-${mission.id}`}
                name={mission.name}
                description={mission.description}
                id={mission.id}
                reserved={index % 2 === 0}
              />
            ))}
          </tbody>
        </table>
      ) : undefined}
    </section>
  );
};

export default MissionsList;
