<script setup lang="ts">
  import style from './main.module.scss'

  const topBlocks = [
    {name: "1", color: "red", type: "block", price: 60},
    {name: "2", color: "none", type: "chance"},
    {name: "3", color: "red", type: "block", price: 60},
    {name: "4", color: "none", type: "chance", price: 200},
    {name: "5", color: "none", type: "chance", price: 200},
    {name: "6", color: "yellow", type: "block", price: 100},
    {name: "7", color: "none", type: "chance"},
    {name: "8", color: "yellow", type: "block", price: 100},
    {name: "9", color: "yellow", type: "block", price: 120},
  ]

  const rightBlocks = [
    {name: "12", color: "green", price: 140, type: "block"},
    {name: "13", color: "none", type: "chance"},
    {name: "14", color: "green", price: 140, type: "block"},
    {name: "15", color: "green", price: 160, type: "block"},
    {name: "16", color: "none", type: "chance"},
    {name: "17", color: "blue", price: 180, type: "block"},
    {name: "18", color: "none", type: "chance"},
    {name: "19", color: "blue", price: 180, type: "block"},
    {name: "20", color: "blue", price: 200, type: "block"},
  ]

  const bottomBlocks = [
    {name: "22", color: "brown", price: 220},
    {name: "23", color: "none", type: "chance"},
    {name: "24", color: "brown", price: 220},
    {name: "25", color: "brown", price: 240},
    {name: "26", color: "none", type: "chance"},
    {name: "27", color: "lightBlue", price: 260},
    {name: "28", color: "lightBlue", price: 260},
    {name: "29", color: "none", type: "chance"},
    {name: "30", color: "lightBlue", price: 280},
  ].reverse()

  const leftBlocks = [
    {name: "31", color: "purple", price: 300},
    {name: "32", color: "none", type: "chance"},
    {name: "33", color: "purple", price: 300},
    {name: "34", color: "purple", price: 320},
    {name: "35", color: "none", type: "chance"},
    {name: "36", color: "none", type: "chance"},
    {name: "37", color: "orange", price: 350},
    {name: "38", color: "none", type: "chance"},
    {name: "39", color: "orange", price: 400},
  ].reverse()
</script>

<template>
  <div :class="style.table">
    <div :class="style.top">
      <div :class="style.start"><img :class="style.image" src="/board/main/start-up.png" alt="start-up"/></div>
      <div :class="style.block" v-for="(block, index) in topBlocks" :key="index">
        <div :class="style[block.color]"/>
        <div :class="block.type === 'block' ? style.imageBlock : style.chanceBlock">
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
          <div v-if="block.type === 'chance'" :class="style.chance"/>
        </div>
        <div v-if="block.price" :class="style.price">
        {{block.price}} M
        </div>
      </div>
      <div :class="style.parking"><img :class="style.image" src="/board/main/parking.png" alt="parking"/></div>
    </div>
  </div>
</template>

<style module lang="scss">
</style>