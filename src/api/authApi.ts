import axios from './axios';
import type { Credentials } from '../interfaces/auth.interface';

const login = async (credentials: Credentials) => {
  return await axios.post('auth/login', credentials);
}

export default {
  login
}
