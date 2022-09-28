import axios from 'axios';

const APIMISSIONURL = 'https://api.spacexdata.com/v3/missions';

const fetchMission = () => axios.get(APIMISSIONURL)
  .then((res) => res);
export default fetchMission;
