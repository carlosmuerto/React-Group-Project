import fetchMission from '../../../features/mission/MissionAPI';

const MissionsPage = () => (
  <main className="app-missions">
    <h1>Missions</h1>
    <button type="button" onClick={fetchMission}>btn</button>
  </main>
);

export default MissionsPage;
