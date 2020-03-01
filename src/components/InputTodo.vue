<template>
  <div class="input">
      <input class="input" placeholder="enter todo ..." @blur="onBlur" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@vue/composition-api';
import {Todo} from '@/views/Home.vue'; 
import { v4 as uuidv4 } from 'uuid';
interface State {
   title: string;
}

interface PropsOption {
   inputTodo: (todo: Todo) => void;
}

export default  defineComponent({
   props: {
      inputTodo: {
           type: (null as any) as PropType<PropsOption>,
           required: true
        },
   },
   setup(props) {
    
     const onBlur = (event: FocusEvent) => {
        const value = (event.target as any).value;
        if (value === null || value === '') {
          return false;
        }
        const todo: Todo = {
           id: uuidv4(),
           title: value,
           status: false,
           createAt: (new Date()).toTimeString()
        }
        console.log(props);

        props.inputTodo(todo)
        
     }
    return {
      onBlur
    }
   }
});
</script>
<style scoped>
    .input {
      width: 100%;
    }
</style>
