import { useSelector } from 'react-redux';
import { filter } from 'lodash';
import ReservedList from '../../components/ReservedItems/ReservedList';
import * as missionRedux from '../../../features/mission/MissionSlice';
import './Profile.scss';

const ProfilePage = () => {
  const AllMissions = useSelector(missionRedux.selectMissions);
  const recervedMissions = useSelector(missionRedux.selectResserved);
  const ReservedmissionLabels = filter(
    AllMissions,
    (mission) => recervedMissions.includes(mission.id),
  ).map((recervedMission) => recervedMission.name);

  const ReservedRocketLabels = [
    'Rocket 01',
    'Rocket 02',
    'Rocket 03',
  ];
  return (
    <main className="app-profile">
      <ReservedList title="My Missions" ReservedListLabels={ReservedmissionLabels} />
      <ReservedList title="My Rockets" ReservedListLabels={ReservedRocketLabels} />
    </main>
  );
};

export default ProfilePage;
