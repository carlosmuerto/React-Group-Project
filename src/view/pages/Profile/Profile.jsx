import { useSelector } from 'react-redux';
import { filter } from 'lodash';
import ReservedList from '../../components/ReservedItems/ReservedList';
import * as missionRedux from '../../../features/mission/MissionSlice';
import * as rocketRedux from '../../../features/rockets/RocketSlice';
import './Profile.scss';

const ProfilePage = () => {
  const AllMissions = useSelector(missionRedux.selectMissions);
  const AllRockets = useSelector(rocketRedux.selectRockets);
  const recervedMissions = useSelector(missionRedux.selectResserved);
  const recervedRockets = useSelector(rocketRedux.selectResserved);

  const ReservedmissionLabels = filter(
    AllMissions,
    (mission) => recervedMissions.includes(mission.id),
  ).map((recervedMission) => recervedMission.name);

  const ReservedRocketLabels = filter(
    AllRockets,
    (rocket) => recervedRockets.includes(rocket.id),
  ).map((recervedRocket) => recervedRocket.name);

  return (
    <main className="app-profile">
      <ReservedList title="My Missions" ReservedListLabels={ReservedmissionLabels} />
      <ReservedList title="My Rockets" ReservedListLabels={ReservedRocketLabels} />
    </main>
  );
};

export default ProfilePage;
