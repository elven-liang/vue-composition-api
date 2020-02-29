<template>
  <div class="home">
    <InputTodo :inputTodo="inputTodo" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
import HelloWorld from '@/components/HelloWorld.vue';
import InputTodo from '@/components/InputTodo.vue'

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
        console.log(todo)
        todoState.todos.push(todo);
     }
     return {
        inputTodo
     }
  },
  components: {
    HelloWorld,
    InputTodo
 }
})
</script>
<style>
    .home {
       width: 350px;
       height: 600px;
       margin: 200px auto;
    }
</style>
