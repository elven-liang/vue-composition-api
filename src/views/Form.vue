<template>
  <div class="home">
       <form>
             <input id="first-name" placeholder="frist name" @blur="onFirstName" />
             <br/><br/>
             <input id="last-name" placeholder="last name"  @blur="onLasttName" />
              <br/>
             nickname: {{nickname}}
       </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from '@vue/composition-api';

// code from hleper.ts
function bind(fn: any, ...restArgs: any[]) {
    const args = new Array(restArgs.length);
    console.log(args)
    for (let i = 0; i < args.length; i++) {
      args[i] = restArgs[i];
    }
    return fn.bind(null, ...args);
}

type State = {
      fristName: string;
      lastName: string;
      nickname: string;  // firstname + last name
}

interface OnBlurHandle {
    (state: State, value: string): void;
}

const composeNickName = (state: State) => {
        state.nickname =  `YJ ${state.fristName} ${state.lastName}`;
}

const onBlur = (state: State, fn: OnBlurHandle, event: Event) => {
      const value = (event.target as any).value;
      composeNickName(state); 
      fn(state, value)
}

const onFirstName = (state: State, value: string) => {
    state.fristName = value;
}

const onLasttName = (state: State, value: string) => {
    state.lastName = value;
}



export default defineComponent({
 
  setup() {
      const state = reactive<State>({
         fristName: "",
         lastName: "",
         nickname: ''   // firstname + last name
      });

      return {
           onFirstName: bind(onBlur, state, onFirstName),
           onLasttName: bind(onBlur, state, onLasttName),
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
