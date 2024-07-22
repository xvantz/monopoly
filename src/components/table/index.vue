<script setup lang="ts">
  import style from './main.module.scss'
  import Players from './elements/players/index.vue'

  const topBlocks = [
    {name: "1", color: "red", type: "block", price: 60, class: "viber"},
    {name: "2", color: "none", type: "chance"},
    {name: "3", color: "red", type: "block", price: 60, class: "whatsapp"},
    {name: "4", color: "none", type: "chance", price: 200},
    {name: "5", color: "none", type: "block", price: 200, class: "tesla"},
    {name: "6", color: "yellow", type: "block", price: 100, class: "facebook"},
    {name: "7", color: "none", type: "chance"},
    {name: "8", color: "yellow", type: "block", price: 100, class: "instagram"},
    {name: "9", color: "yellow", type: "block", price: 120, class: "telegram"},
  ]

  const rightBlocks = [
    {name: "12", color: "green", price: 140, type: "block", class: "gucci"},
    {name: "13", color: "none", price: 100, type: "block", class: "github"},
    {name: "14", color: "green", price: 140, type: "block", class: "dior"},
    {name: "15", color: "green", price: 160, type: "block", class: "balenciaga"},
    {name: "16", color: "none", price: 200, type: "block", class: "rollsRoyce"},
    {name: "17", color: "blue", price: 180, type: "block", class: "tiffany"},
    {name: "18", color: "none", type: "chance"},
    {name: "19", color: "blue", price: 180, type: "block", class: "chopard"},
    {name: "20", color: "blue", price: 200, type: "block", class: "cartier"},
  ]

  const bottomBlocks = [
    {name: "22", color: "brown", price: 220, type: "block", class: "hennessy"},
    {name: "23", color: "none", type: "chance"},
    {name: "24", color: "brown", price: 220, type: "block", class: "moet"},
    {name: "25", color: "brown", price: 240, type: "block", class: "jagermeister"},
    {name: "26", color: "none", price: 200, type: "block", class: "porsche"},
    {name: "27", color: "lightBlue", price: 260, type: "block", class: "qatar"},
    {name: "28", color: "lightBlue", price: 260, type: "block", class: "etihad"},
    {name: "29", color: "none", price: 100, type: "block", class: "adobe"},
    {name: "30", color: "lightBlue", price: 280, type: "block", class: "flyEmirates"},
  ].reverse()

  const leftBlocks = [
    {name: "31", color: "purple", price: 300, type: "block", class: "movenpick"},
    {name: "32", color: "none", type: "chance"},
    {name: "33", color: "purple", price: 300, type: "block", class: "rixos"},
    {name: "34", color: "purple", price: 320, type: "block", class: "jumeirah"},
    {name: "35", color: "none", price: 200, type: "block", class: "lamborghini"},
    {name: "36", color: "none", type: "chance"},
    {name: "37", color: "orange", price: 350, type: "block", class: "huawei"},
    {name: "38", color: "none", type: "chance"},
    {name: "39", color: "orange", price: 400, type: "block", class: "apple"},
  ].reverse()
</script>

<template>
  <div :class="$style.tableGame">
    <Players />
    <div :class="style.table">
      <div :class="style.top">
        <div :class="style.start"><img :class="style.image" src="/board/main/start-up.png" alt="start-up"/></div>
        <div :class="style.block" v-for="(block, index) in topBlocks" :key="index">
          <div :class="style[block.color]"/>
          <div :class="block.type === 'block' ? style.imageBlock : style.chanceBlock">
            <div v-if="block.class" :class="style[block.class]"/>
            <div v-if="block.type === 'chance'" :class="style.chance"/>
          </div>
          <div v-if="block.price" :class="style.price">{{block.price}} M</div>
        </div>
        <div :class="style.jail"><img :class="style.image" src="/board/main/jail.png" alt="jail"/></div>
      </div>
      <div :class="style.center">
        <div :class="style.left">
          <div :class="style.block" v-for="(block, index) in leftBlocks" :key="index">
            <div :class="style[block.color]"/>
            <div :class="block.type === 'block' ? style.imageBlock : style.chanceBlock">
              <div v-if="block.class" :class="style[block.class]"/>
              <div v-if="block.type === 'chance'" :class="style.chance"/>
            </div>
            <div v-if="block.price" :class="style.price">{{block.price}} M</div>
          </div>
        </div>
        <div :class="style.center"></div>
        <div :class="style.right">
          <div :class="style.block" v-for="(block, index) in rightBlocks" :key="index">
            <div :class="style[block.color]"/>
            <div :class="block.type === 'block' ? style.imageBlock : style.chanceBlock">
              <div v-if="block.class" :class="style[block.class]"/>
              <div v-if="block.type === 'chance'" :class="style.chance"/>
            </div>
            <div v-if="block.price" :class="style.price">{{block.price}} M</div>
          </div>
        </div>
      </div>
      <div :class="style.bottom">
        <div :class="style.toJail"><img :class="style.image" src="/board/main/guard.png" alt="to jail"/></div>
        <div :class="style.block" v-for="(block, index) in bottomBlocks" :key="index">
          <div :class="style[block.color]"/>
          <div :class="block.type === 'block' ? style.imageBlock : style.chanceBlock">
            <div v-if="block.class" :class="style[block.class]"/>
            <div v-if="block.type === 'chance'" :class="style.chance"/>
          </div>
          <div v-if="block.price" :class="style.price">
          {{block.price}} M
          </div>
        </div>
        <div :class="style.parking"><img :class="style.image" src="/board/main/parking.png" alt="parking"/></div>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
  .tableGame {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
  }
</style>