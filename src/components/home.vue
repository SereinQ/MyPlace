<template>
  <main class="main page-home">
    <Header />
    <MainSlider />
    <Benefits />
    <EventsList />
    <WhatCanWeDo />
    <Footer />
  </main>
</template>

<script>
import MainSlider from "@/components/sections/MainSlider.vue";
import Benefits from "@/components/sections/Benefits.vue";
import EventsList from "@/components/sections/EventsList.vue";
import WhatCanWeDo from "@/components/sections/WhatCanWeDo.vue";

export default {
  components: {
    MainSlider,
    Benefits,
    EventsList,
    WhatCanWeDo
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/variables.scss";
</style>
