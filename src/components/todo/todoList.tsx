import { defineComponent } from 'vue';
import TodoItem from './TodoItem.vue';

export default defineComponent({
  name: 'TodoList',
  components: {
    TodoItem
  },
  
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },

  setup(props) {
    const renderItems = () => {
      return props.list.map((item: any) => {
        return <TodoItem item={item} key={item.id}/>;
      });
    };

    return () => {
      return <div class="todo-list">
        { renderItems() }
      </div>;
    };
  }
});