<template>
  <header class="header">
    <div class="header__container d-flex container">
      <router-link to="/" class="logo__container">
        <img
          class="logo__image"
          :src="require('@/images/ico/logo.svg')"
          alt="My place"
        />
      </router-link>
      <ul>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/">home</router-link></li>
        <li><router-link to="/">home</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.header {
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: $headerHeight;
  background-color: $color-dark2;
  z-index: 99;
}

.logo {
  &__container {
    display: inline-flex;
  }
}
</style>
