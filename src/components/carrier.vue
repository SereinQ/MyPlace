<template>
  <main class="main page-carrier">
    <Header />
    <SimpleSubpage />
  </main>
</template>

<script>
import { mapGetters } from "vuex";
import SimpleSubpage from "@/components/sections/SimpleSubpage.vue";

export default {
  computed: {
    ...mapGetters("about", ["content", "excerpt"])
  },
  components: {
    SimpleSubpage
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
</style>
