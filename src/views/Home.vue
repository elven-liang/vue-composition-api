<template>
  <div class="home">
    <InputTodo :inputTodo="inputTodo" v-if="false" />
    <Lists :todos="todos" v-if="false" />
    <FormComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import InputTodo from '@/components/InputTodo.vue'
import Lists from '@/components/Lists.vue';
import FormComponent from '@/views/Form.vue';

interface TodoState {
   todos: Todo[];
}

export interface Todo {
   id?: string;
   title: string;
   createAt: string;
   status: boolean;

}
export default defineComponent({
 
  setup() {
     const todoState = reactive<TodoState>({
         todos: []
     });
     const inputTodo = (todo: Todo) => {
        todoState.todos.push(todo);
     }
     return {
        inputTodo,
        todos: todoState.todos
     }
  },
  components: {
    InputTodo,
    Lists,
    FormComponent
 }
})
</script>
<style>
    .home {
       width: 650px;
       height: 600px;
       margin: 200px auto;
    }
</style>
