import axios from './axios';

const fetchProfile = async () => {
  return await axios.get('profile');
}

export default {
  fetchProfile
}
