<template>
  <main class="main page-event">
    <Header />
    <SingleEvent />
  </main>
</template>

<script>
import SingleEvent from "@/components/sections/SingleEvent.vue";
export default {
  components: {
    SingleEvent
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
</style>
