<template>
  <button class="px-5 py-2 m-2 rounded-md font-bold border-2 border-solid hover:bg-white hover:text-main duration-300">{{ buttonProps.text }}</button>
</template>

<script setup lang="ts">
type Button = {
  text: string,
  function?: () => {},
}
const buttonProps = defineProps<Button>()


</script>

<style scoped>
</style>