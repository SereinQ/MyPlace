<template>
  <main class="main page-about">
    <Header />
    <ContentSubpage />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import ContentSubpage from "@/components/sections/ContentSubpage.vue";

export default {
  computed: {
    ...mapGetters("about", ["content", "excerpt"])
  },
  components: {
    ContentSubpage
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
</style>
