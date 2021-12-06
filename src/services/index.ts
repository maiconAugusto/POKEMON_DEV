import axios from 'axios';
import enviroment from '../enviroments';

const createAxiosInstances = () => {
  const config = {
    baseURL: enviroment.BASE_URL,
    timeout: 20000,
  };

  return axios.create(config);
};

export const axiosDefault = createAxiosInstances();
