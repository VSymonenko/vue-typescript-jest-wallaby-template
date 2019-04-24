import axios, { AxiosResponse, AxiosInstance, AxiosError } from 'axios';
import './mockApi';

const instanceAxios: AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_API_BASE_URL
    : process.env.VUE_APP_API_DEV_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json;charset=utf-8',
  },
});

instanceAxios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export function pageData(name: string, language: string) {
  instanceAxios.defaults.headers['Accept-language'] = language;
  return instanceAxios.get(`/${name}`).then((response: AxiosResponse) => {
    return response.data;
  });
}
