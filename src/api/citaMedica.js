import axios from 'axios';
import { domainUrlAPI, baseCitaMedicaUrl } from './constants';


export const findCitaMedicaByPage = async (page) => {
  try {
    const url = `${domainUrlAPI}/${baseCitaMedicaUrl}/page/${page}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
