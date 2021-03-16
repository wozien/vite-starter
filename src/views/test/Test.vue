<template>
  <p>{{ count }}</p>
  <van-button @click="onClick">Add</van-button>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, watch, onUpdated } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    const onClick = () => count.value++

    watchEffect((onInvalidate) => { 
      console.log('watchEffect ' + count.value)
      onInvalidate(() => {
        console.log('watchEffect invalidate ' + count.value)
      })
    }, { onTrigger: (e) => console.log(e)})
    
    watch(count, (val: number) => console.log('watch ' + val))

    onUpdated(() => console.log('update hook ' + count.value))

    return {
      count,
      onClick
    }
  }
})
</script>