<template>
  <section class="section eventsList">
    <div class="container container--md">
      <div class="head">
        <h2>PORTFOLIO</h2>
        <h3 class="title-md">the book of love</h3>
      </div>
    </div>
    <div class="relative">
      <i class="iconSlide iconSlide__left" @click="moveSlider(-1)" />
      <div class="item__list d-flex" :style="sliderStyles">
        <div class="item__single" v-for="(item, index) in items" :key="index">
          <figure class="item__photo"><img :src="item.image" /></figure>
          <div class="content">
            <h3 class="content__title">{{ item.title }}</h3>
            <div class="content__description">{{ item.description }}</div>
          </div>
        </div>
      </div>
      <i class="iconSlide iconSlide__right" @click="moveSlider(1)" />
    </div>
  </section>
</template>

<script>
import mixins from "@/mixins";
export default {
  data: function() {
    return {
      actualSlide: 0,
      items: [
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" },
        { image: "", title: "", description: "" }
      ]
    };
  },
  computed: {
    sliderStyles() {
      return {
        left: (this.actualSlide * 100) / this.windowDivide + "vw",
        width: (this.items.length / (this.windowDivide * 2)) * 100 + "vw"
      };
    }
  },
  methods: {
    moveSlider(val) {
      if (this.actualSlide === 0 && val === -1) {
        this.actualSlide = this.items.length - 1; // loop: set to last slide
      } else if (this.actualSlide === this.items.length - 1 && val === 1) {
        this.actualSlide = 1; // loop: set to first slide
      } else {
        this.actualSlide = this.actualSlide + val; // default
      }
    }
  },
  mixins: [mixins]
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.section {
  overflow: hidden;
}

h3 {
  position: relative;
  top: -43px;
  left: 235px;
  font-weight: 700;
  text-transform: uppercase;
  color: $color-red1;
}

.head {
  text-align: center;
}

.item {
  &__list {
    flex-wrap: wrap;
  }

  &__single {
    position: relative;
    width: 25vw;
    height: 25vw;

    .content {
      position: absolute;
      top: 0;
      background-color: $color-dark1;

      @include rectangle(100%);

      &--right {
        left: 100%; // default
      }

      &--left {
        right: 100%;
      }
    }
  }
}
</style>
