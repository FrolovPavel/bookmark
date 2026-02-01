import axios from './axios';

const getProfile = async () => {
  return await axios.get('profile');
}

export default {
  getProfile
}
