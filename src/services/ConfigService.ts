import API from '@/services';

const API_URL = '/api/config';

const ConfigService = {
  getConfig: () => API.get(API_URL),
};

export default ConfigService;
