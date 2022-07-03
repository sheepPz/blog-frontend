<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import bgImg from './components/bg.vue'
import navBar from './components/layout/heard.vue'
</script>

<template>
  <div>
    <nav-bar></nav-bar>
    <bg-img />
    <!-- <div class="text-5xl fw100 mb7">123</div> -->
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  {{ $i18n.locale }} -->
</template>

<style lang="scss">
</style>
