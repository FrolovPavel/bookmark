import axios from './axios';

const fetchProfile = async () => {
  return await axios.get('auth/profile');
}

export default {
  fetchProfile
}
