import axios, { AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import { Notify } from 'vant';

const API_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: API_URL as string,
  timeout: 3000
});

// request interceptors
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // add token to header
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);

// response pre-handler
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data: res } = response;
    if(res.ret !== 0) {
      Notify({
        type: 'danger',
        message: res.msg || '接口错误'
      });
      if(res.ret === 10000) {
        // token 过期 
        // redirect to login page
      }
    }
    return response;
  },
  (err: AxiosError) => {
    let errMsg = '';
    if (err && err.response?.status) {
      switch (err.response.status) {
        case 401:
          errMsg = '客户端错误';
          break;

        case 403:
          errMsg = '拒绝访问';
          break;

        case 408:
          errMsg = '请求超时';
          break;

        case 500:
          errMsg = '服务器内部错误';
          break;

        case 501:
          errMsg = '服务未实现';
          break;

        case 502:
          errMsg = '网关错误';
          break;

        case 503:
          errMsg = '服务不可用';
          break;

        case 504:
          errMsg = '网关超时';
          break;

        case 505:
          errMsg = 'HTTP版本不受支持';
          break;

        default:
          errMsg = err.response.data.msg;
          break;
      }
    } else {
      errMsg = err.message;
    }

    Notify({
      type: 'danger',
      message: errMsg
    });
    return Promise.reject(errMsg);
  }
);

export default instance;

