<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MyButton from '@/components/shared/MyButton.vue'
</script>

<template>
<!--  <header class="w-full bg-secondary">-->
<!--    <div class="container flex items-center justify-between h-16 p-3 ">-->
<!--      <div class="text-2xl">-->
<!--        <RouterLink to="/">Monopoly</RouterLink>-->
<!--      </div>-->
<!--      <nav>-->
<!--        <RouterLink to="/login"><MyButton text="Войти" /></RouterLink>-->
<!--        <RouterLink to="/register"><MyButton text="Регистрация" /></RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
  <div class="container">
    <RouterView />
  </div>
<!--  <footer class="w-full bg-secondary">-->
<!--    <div class="container h-20 p-3">-->

<!--    </div>-->
<!--  </footer>-->
</template>

<style lang="scss">
@import "./assets/global.scss";
</style>