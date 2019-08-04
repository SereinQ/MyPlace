<template>
  <section class="section whatCanWeDo">
    <div class="content">
      <img :src="require('@/images/static/whatCanWeDoMobile.jpg')" />
    </div>
  </section>
</template>

<script>
export default {
  mounted() {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.content {
  padding: 180px 0 165px 0;
  text-align: center;
}
</style>
