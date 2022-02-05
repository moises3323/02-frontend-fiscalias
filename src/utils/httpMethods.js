import axios from 'axios';

export const getRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const postRequest = async (url, body) => {
  try {
    const resp = await axios.post(url, body);
    return resp;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const putRequest = async (url, body) => {
  try {
    const resp = await axios.put(url, body);
    return resp;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const deleteRequest = async (url) => {
  try {
    const resp = await axios.delete(url);
    return resp;
  } catch (err) {
    console.error(err);
    return err;
  }
};
