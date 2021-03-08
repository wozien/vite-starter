import http from './http';

export const fetchList = async () => {
  const res = await http.get('/api/getList');
  return res;
};