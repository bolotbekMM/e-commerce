import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://zeonstore-4d11a-default-rtdb.firebaseio.com/store/',
});


