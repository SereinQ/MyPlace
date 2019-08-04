<template>
  <div class="button__container">
    <router-link :to="to" v-if="to">
      <button class="button__item"><slot /></button>
    </router-link>
    <button class="button__item" v-else-if="type" :type="type"><slot /></button>
    <button class="button__item" v-else><slot /></button>
  </div>
</template>

<script>
export default {
  mounted() {},
  props: {
    to: String,
    type: String
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

a {
  display: block;
}

.button {
  &__item {
    display: inline-flex;
    justify-content: center;
    font-size: 24px;
    padding: 22px 42px 26px 42px;
    background-color: $color-red3;
    color: $color-brightest;
    border-radius: 20px;
    transition: all 0.2s linear;
    cursor: pointer;
  }
}
</style>
