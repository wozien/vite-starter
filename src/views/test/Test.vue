<template>
  <p>{{ count }}</p>
  <van-button @click="onClick">Add</van-button>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

// setup rfc state
const count = ref(0)
const onClick = () => count.value++ 
</script>