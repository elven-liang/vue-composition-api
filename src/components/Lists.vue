<template>
  <div class="list">
      <ul>
           <li v-for="todo in todos" :key="todo.id">
              {{todo.title}} -- {{todo.createAt}} 
           </li>
      </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from '@vue/composition-api';
import {Todo} from '@/views/Home.vue'; 
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export default defineComponent({
   props: {
      todos: (null as any) as PropType<Todo[]>,
   },

   setup(props) {
    return {
     
    }
   }
});
</script>
<style scoped>
    ul,li {
      list-style: none;
      text-align: left;
    }
</style>
