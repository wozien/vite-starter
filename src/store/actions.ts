import { ActionTree } from 'vuex';
import { State } from './state';
import { fetchList } from '@/api/list';

const actions: ActionTree<State, State> = {
  async fetchListData({ commit }) {
    const { data } = await fetchList();
    commit('SET_LIST', data.data);
  }
};

export default actions;