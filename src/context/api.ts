import axios, {AxiosRequestConfig} from 'axios';

const configAuthorizationHeader = async (config: AxiosRequestConfig) => {
  if (config.headers) {
    config.headers['x-rapidapi-key'] = `token_here`;
    config.headers['}x-rapidapi-host'] = `v3.football.api-sports.io`;
  }
  return config;
};

const api = axios.create({
  baseURL: 'https://v3.football.api-sports.io',
});

api.interceptors.request.use(configAuthorizationHeader);

export default api;
