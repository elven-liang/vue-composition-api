<template>
  <div class="input">
      <input class="input" placeholder="enter todo ..." @blur="onBlur" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';
import {Todo} from '@/views/Home.vue'; 
import { v4 as uuidv4 } from 'uuid';
interface State {
  message: string;
}

export default  defineComponent({
   props: {
      inputTodo:  {
        type: Function,   // 类型推导
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
