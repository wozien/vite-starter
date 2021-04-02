<template>
  <div class="todo-item">
    <div class="info">
      <h2 class="title">{{ item?.title }}</h2>
      <p class="content">{{ item?.content }}</p>
    </div>
    <van-checkbox shape="square" v-model="done" @change="onChange" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watchEffect } from 'vue';
import { useStore } from '@/store';
import { Item } from '#/global';

export default defineComponent({
  props: {
    item: Object as PropType<Item>
  },

  setup(props) {
    const store = useStore();
    const done = ref(false);

    const onChange = () => {
      store.commit('SET_STATUS', { key: props.item?.key, status: done.value ? 'done': 'progress' });
    };

    watchEffect(() => {
      done.value = props.item?.status === 'done';
    });

    return {
      done,
      onChange
    };
  }
});
</script>

<style lang="less" scoped>
.todo-item {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px #ededed;
  padding: 14px 10px;
  display: flex;
  margin: 10px;
  .info {
    flex: 1;
    .title {
      font-size: 16px;
      margin-bottom: 8px;
    }
    .content {
      color: @my-text-color;
      font-size: 13px;
    }
  }
}
</style>