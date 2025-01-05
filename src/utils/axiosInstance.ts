import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${sessionStorage.getItem('ATOKEN')}`,
  },
});

export default axiosInstance;
