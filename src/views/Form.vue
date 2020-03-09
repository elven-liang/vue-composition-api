<template>
  <div class="home">
       <form>
             <input id="first-name" @blur="onUserNameBulr" />
             <input id="last-name"  @blur="onUserNameBulr" />
       </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';
import InputTodo from '@/components/InputTodo.vue'
import Lists from '@/components/Lists.vue'

      const onSexChange = (value: string) => {
           otherLoginWhenOnSexChange(value);
           // other login
      }

      const otherLoginWhenOnSexChange = (value: string) => {

      }

       const onBlur = (state: any, event: Event) => {
          const value = (event.target as any).value;
          otherLoginWhenOnSexChange(value);
          state.nickname = state.fristName + state.lastName
      }



const bindFun = (fun: any, state: any) => {
    return fun.bind(null, state)
}


export default defineComponent({
 
  setup() {
      const state = reactive({
         fristName: "",
         lastName: "",
         sex: 0,
         nickname: ''   // firstname + last name
         
      });

      return {
           onBlur: bindFun(onBlur, state),
           onSexChange,
           ...toRefs(state)
      }
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
