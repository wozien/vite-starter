import { MockMethod } from 'vite-plugin-mock';

const listData = [
  {
    key: '1',
    title: 'todo first',
    content: 'my first todo',
    status: 'done'
  },
  {
    key: '2',
    title: 'todo second',
    content: 'my second todo',
    status: 'progress'
  }
];

export default [
  {
    url: '/api/getList',
    method: 'get',
    response: {
      ret: 0,
      msg: '',
      data: listData
    }
  }
] as MockMethod[];