import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'todo'
  },
  {
    path: '/todo',
    component: () => import('@/views/todo/Todo.vue')
  },
  {
    path: '/todoCreate',
    component: () => import('@/views/todo/TodoCreate.vue')
  }
];

export default routes;