<template>
  <article class="flex justify-center flex-col items-center">
    <h1 class="text-5xl mt-3 mb-6">Добро пожаловать в Монополию!</h1>
    <strong class="text-2xl my-4 text-center">
      Погрузитесь в мир недвижимости,
      бизнеса и финансовых приключений с нашей
      онлайн-версией классической настольной игры Монополия.
    </strong>
    <p class="text-xl text-center mb-3">
      Здесь вы можете испытать свои стратегические навыки, покупая,
      продавая и арендуя недвижимость, строя свою империю и стараясь обанкротить своих соперников.
      <br/>Но будьте осторожны! Каждое ваше решение может привести к успеху или краху.
    </p>
    <RouterLink to="/register"><MyButton text="Начать игру" /></RouterLink>
  </article>
  <article class="flex justify-around">
    <MyContainer class="basis-1/3">
      <h2>Это бесплатно</h2>
      <img src="/free.webp" class="image" alt="Это бесплатно"/>
      <p class="p-text">Просто создайте аккаунт и начните играть — никаких подписок и платежей.</p>
    </MyContainer>
    <MyContainer class="basis-1/3">
      <h2>Интерактивные элементы</h2>
      <img src="/InteractiveElement.webp" class="image" alt="Интерактивные элементы"/>
      <p class="p-text">Оживите свою игру с помощью анимированных фишек, звуковых эффектов и уникальных визуальных тем. Онлайн-Монополия предлагает полное погружение в игру!</p>
    </MyContainer>
    <MyContainer class="basis-1/3">
      <h2>Интерактивная доска</h2>
      <img src="/interactive.webp" class="image" alt="Интерактивная доска"/>
      <p class="p-text">Наслаждайтесь ярким и живым дизайном игры, который заставит вас почувствовать себя, как будто вы играете на настоящей игровой доске.</p>
    </MyContainer>
  </article>
  <article class="flex justify-around">
    <MyContainer class="basis-1/3">
      <h2>Стратегия и удача</h2>
      <img src="/StrategyAndLucky.webp" class="image" alt="Стратегия и удача"/>
      <p class="p-text">Используйте свои стратегические навыки для максимальной выгоды, но помните, что удача также играет важную роль.</p>
    </MyContainer>
    <MyContainer class="basis-1/3">
      <h2>Новые друзья</h2>
      <img src="/friends.webp" class="image" alt="Новые друзья"/>
      <p class="p-text">Находите интересных вам игроков и добавляйте их в друзья. Общайтесь в личных сообщениях, обсуждая новые тактики — ну или делитесь новыми мемами.</p>
    </MyContainer>
    <MyContainer class="basis-1/3">
      <h2>Глобальные соперники</h2>
      <img src="/globus.webp" class="image" alt="Глобальные соперники"/>
      <p class="p-text">Соревнуйтесь с игроками со всего мира! Наша платформа объединяет любителей Монополии, независимо от их местоположения.</p>
    </MyContainer>
  </article>
  <div class="flex flex-col justify-center items-center">
    <p class="p-text">Готовы ли вы стать самым богатым человеком в Монополии? Зарегистрируйтесь сегодня и начните свое путешествие к успеху!</p>
    <RouterLink to="/register"><MyButton text="Начать игру" /></RouterLink>
  </div>

</template>

<script setup lang="ts">

import { RouterLink } from 'vue-router'
import MyButton from '@/components/shared/MyButton.vue'
import MyContainer from '@/components/shared/MyContainer.vue'
</script>

<style scoped>
.image {
  @apply max-w-full max-h-80
}

h2 {
  @apply text-xl mb-2
}
.p-text {
  @apply my-2
}
</style>