<template>
  <div class="todo-create">
    <van-cell-group>
      <van-field v-model="title" label="标题" placeholder="请输入标题"></van-field>
      <van-field v-model="content" label="内容" placeholder="请输入内容" type="textarea"></van-field>
    </van-cell-group>

    <div class="footer">
      <van-button type="primary" block round @click="onSave">保存</van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { uniqueId } from 'lodash-es';
import { useStore } from '@/store';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = reactive({
      title: '',
      content: ''
    });

    const onSave = () => {
      const item = {
        key: uniqueId('todoItem_'),
        title: data.title,
        content: data.content,
        status: 'progress'
      };
      store.commit('ADD_LIST', item);
      data.title = data.content = '';
      router.back();
    };

    return {
      ...toRefs(data),
      onSave
    };
  }
});
</script>

<style lang="less" scoped>
.todo-create {
  position: relative;
  height: 100%;
  .footer {
    position: absolute;
    bottom: 20px;
    width: 100%;
    padding: 0 10px;
  }
}
</style>