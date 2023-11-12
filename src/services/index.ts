import { CMS_API_TOKEN, CMS_API_URL } from '@/config/site';
import axios, { AxiosError, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

const API = axios.create({
  baseURL: CMS_API_URL,
});

API.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Accept = 'application/json';
  config.headers.Authorization = `Bearer ${CMS_API_TOKEN}`;

  return config;
});

API.interceptors.response.use(
  (response: AxiosResponse) => Promise.resolve(response),
  (error: AxiosError) => Promise.reject(error?.response)
);

export default API;
