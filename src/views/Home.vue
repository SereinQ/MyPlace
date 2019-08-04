<template>
  <div>
    <home/>
  </div>
</template>

<script>
import home from "@/components/home.vue";
// import Store from "@/stores";

export default {
  components: {
    home
  },

  // async beforeRouteEnter(to, from, next) {
  //   await Store.dispatch("home/GET_PAGE");
  //   next();
  // }
};
</script>
