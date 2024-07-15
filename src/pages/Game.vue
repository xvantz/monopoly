<script setup lang="ts">
// import { ref } from 'vue'
import Table from '../components/table/index.vue'

// const topLine = ref([...Array(9).keys()].map(i => i + 1));
// const rightLine = ref([...Array(9).keys()].map(i => i + 10));
// const bottomLine = ref([...Array(9).keys()].reverse().map(i => i + 19));
// const leftLine = ref([...Array(9).keys()].reverse().map(i => i + 28));
</script>

<template>
  <div class="gameBlock">
    <Table />
  </div>
<!--  <div class="flex">-->
<!--    <div class="board flex">-->
<!--&lt;!&ndash;      Центр поля&ndash;&gt;-->
<!--      <div class="center">-->
<!--        <h1 class="col-start-1 col-end-9 row-start-4 row-end-auto">MONOPOLY</h1>-->
<!--      </div>-->
<!--      <div class="space row-start-1 row-end-1 field">-->
<!--          <img src="/board/main/start-up.png" alt="start-up"/>-->
<!--      </div>-->
<!--      <div class="row horizontal-row col-start-2 col-end-11 row-start-1">-->
<!--        <div class="space" v-for="i in topLine">-->
<!--          <div class="price top">300$</div>-->
<!--          Field {{i}}-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="space row-start-1 row-end-1 field">-->
<!--        <img src="/board/main/jail.png" alt="jail"/>-->
<!--      </div>-->
<!--      <div class="row right-row">-->
<!--        <div class="space" v-for="i in rightLine">-->
<!--          <div class="price right">300$</div>-->
<!--          Field {{i}}-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="space row-start-11 col-start-11 field">-->
<!--        <img src="/board/main/parking.png" alt="parking"/>-->
<!--      </div>-->
<!--      <div class="row horizontal-row col-start-11 col-end-2 row-start-11">-->
<!--        <div class="space" v-for="i in bottomLine" :key="i">-->
<!--          <div class="price bottom">300$</div>-->
<!--          Field {{i}}-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="space row-start-11 row-end-11 field">-->
<!--        <img src="/board/main/guard.png" alt="guard"/>-->
<!--      </div>-->
<!--      <div class="row left-row">-->
<!--        <div class="space" v-for="i in leftLine">-->
<!--          <div class="price left">300$</div>-->
<!--          Field {{i}}-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</template>

<style lang="scss" scoped>
.gameBlock {
  width: 100%;
  display: flex;
  justify-content: center;
}

.board {
  @apply grid gap-0.5 grid-cols-custom grid-rows-custom m-auto my-10 bg-white border-2 border-solid border-white w-[655px] h-full;
}

.center {
  @apply grid col-start-2 col-end-11 row-start-2 row-end-11 grid-cols-7 grid-rows-7 bg-main justify-items-center items-center;
}

.field {
  @apply flex justify-center items-center;
  img {
    @apply w-1/2 h-1/2;
  }
}

.row {
  @apply grid gap-0.5
}

.horizontal-row {
  @apply grid-cols-9
}

.left-row {
  @apply col-start-1 row-start-11 row-end-2;
}

.top-row {
  @apply col-start-2 col-end-11 row-start-1;
}

.right-row {
  @apply row-start-2 row-end-11 col-start-11 col-end-auto;
}

.space {
  @apply bg-secondary text-center relative;
  .container {
    @apply flex flex-col justify-between relative origin-center h-[125px] w-20;
  }
  .price {
    @apply bg-white text-main h-5 absolute w-[50px] flex justify-center items-center;
  }
  .top {
    @apply -top-5;
  }
  .right {
    @apply rotate-90 origin-bottom-right bottom-0 right-0;
  }
  .bottom {
    @apply -bottom-5;
  }
  .left {
    @apply -rotate-90 origin-bottom-left bottom-0;
  }
}
</style>