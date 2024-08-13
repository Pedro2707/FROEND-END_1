import axios from 'axios';
import { domainUrlAPI, loginUrl } from './constants';

export const signin = async (username, password) => {
  try {
    const response = await axios.post(`${domainUrlAPI}/${loginUrl}`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

//en la linea 6 hice un cambio despues de POST