import axios from 'axios';
import { domainUrlAPI, basePersonaUrl } from './constants';

export const findPersonaByPage = async (page) => {
  try {
    const url = `${domainUrlAPI}/${basePersonaUrl}/page/${page}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
