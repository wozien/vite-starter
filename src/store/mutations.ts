import { MutationTree } from 'vuex';
import { State } from './state';

const mutations: MutationTree<State> = {
  'SET_LIST' (state, data) {
    state.list = data;
  },

  'SET_STATUS' (state, { key, status }) {
    const item = state.list.find((item: any) => item.key === key);
    item && (item.status = status);
  },

  'ADD_LIST' (state, data) {
    state.list.push(data);
  }
};

export default mutations;