<template>
  <header class="header">
    <div class="header__background">
      <IconsRickMorty />
    </div>
    <h1 class="header__title">The Rick and Morty</h1>
  </header>
</template>

<script setup>

import IconsRickMorty from "@/components/icons/IconsRickMorty.vue";
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;

  &__backround {

  }

  &__title {
    position: absolute;
    font-size: 60px;
    color: black;
    text-align: center;
  }
}
</style>