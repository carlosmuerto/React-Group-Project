import axios from 'axios';

const APIMISSIONURL = 'https://api.spacexdata.com/v3/rockets';

const fetchRocket = () => axios.get(APIMISSIONURL)
  .then((res) => res);
export default fetchRocket;
