import axios from 'axios';

export default () => {
    return axios.create({
      baseURL: 'https://ecell.nitrr.ac.in',
      headers: {
        authorization: sessionStorage['token'],
      }
    });
  }