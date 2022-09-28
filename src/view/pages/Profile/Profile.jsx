import ReservedList from '../../components/ReservedItems/ReservedList';
import './Profile.scss';

const ProfilePage = () => {
  const ReservedmissionLabels = [
    'mission 01',
  ];

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
