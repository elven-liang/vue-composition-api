<template>
  <div class="hello">
   {{state.message}}
   {{tips}}
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from '@vue/composition-api';
 
interface State {
  message: string;
}
export default  defineComponent({
   setup() {
     const state = reactive<State>({
       message: 'hello word',
     });
     const tips = computed(() => state.message + 'computed message !' )

    return {
      state,
      tips
    }
   }
});
</script>
