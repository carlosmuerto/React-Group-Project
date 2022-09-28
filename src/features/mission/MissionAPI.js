import axios from 'axios';

const APIMISSIONURL = 'https://api.spacexdata.com/v3/missions';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

// eslint-disable-next-line no-console
const fetchMission = () => axios.get(APIMISSIONURL, config).then((res) => { console.log(res); });
export default fetchMission;
