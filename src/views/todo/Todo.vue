<template>
  <div class="todo-page">
    <TodoList :list="progressList" />
    <h2 class="group-title">已完成</h2>
    <TodoList :list="doneList" />
    <van-button type="primary" icon="plus" to="/todoCreate"/>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';
import TodoList from '@/components/todo/todoList';

export default defineComponent({
  components: {
    TodoList
  },

  setup() {
    const store = useStore();
    const list = computed(() => store.state.list);
    const doneList = computed(() => list.value.filter((item: any) => item.status === 'done'));
    const progressList = computed(() => list.value.filter((item: any) => item.status === 'progress'));

    // store.dispatch('fetchListData');

    return {
      doneList,
      progressList
    };
  }
});
</script>

<style lang="less" scoped>
.todo-page {
  position: relative;
  height: 100%;
  .group-title {
    padding: 10px;
    font-size: 13px;
    color: @text-color;
  }
  &::v-deep(.van-button) {
    width: 44px;
    border-radius: 50%;
    position: absolute;
    right: 10px;
    bottom: 40px;
  }
}
</style>