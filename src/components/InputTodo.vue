<template>
  <div class="input">
      <input class="input" placeholder="enter todo ..." @blur="onBlur" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from '@vue/composition-api';
import {Todo} from '@/views/Home.vue'; 
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
type State = {
    test: string;
}

interface InputTodo {
   (todo: Todo): unknown;
}

 const onBlur = (inputTodo: InputTodo, event: FocusEvent): unknown => {
        const value = (event.target as any).value;
        if (value === null || value === '') {
          return false;
        }
        const todo: Todo = {
           id: uuidv4(),
           title: value,
           status: false,
           createAt: moment().format('YYYY-MM-DD HH:mm:ss')
        }
       
        inputTodo(todo)    
}
export default  defineComponent({
   props: {
      inputTodo: {
           type: (null as any) as PropType<InputTodo>,
           required: true
        },
   },
  
   setup(props) {
     const state = reactive<State>({
         test: "fsdfsdf"
     });
     
    return {
      onBlur: onBlur.bind(undefined, props.inputTodo),
      state
    }
   }
});
</script>
<style scoped>
    .input {
      width: 100%;
    }
</style>
