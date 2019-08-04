<template>
  <section class="section singleEvent">
    <div class="row flex-row-reverse">
      <div class="col-12 col-md-6 d-flex align-items-center">
        <div class="content">
          <h2 class="title-md content__title">totalizator</h2>
          <div class="content__description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div>
          <div>
            <figure class="photo__big"><img src="" /></figure>
          </div>
          <div class="photo__container relative">
            <i class="iconSlide iconSlide__left" @click="moveSlider(-1)" />
            <div class="photo__list relative" :style="sliderStyles">
              <figure
                v-for="(item, index) in items"
                :key="index"
                class="photo__small"
              >
                <img src="" />
              </figure>
            </div>
            <i class="iconSlide iconSlide__right" @click="moveSlider(1)" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import mixins from "@/mixins";
export default {
  data: function() {
    return {
      actualSlide: 0,
      windowDivide: 4,
      items: [
        { title: "królewska obsługa klienta", arrow: "" },
        { title: "dizajnerski design", arrow: "" },
        { title: "kreatywna produkcja", arrow: "" },
        { title: "webski digital", arrow: "" },
        { title: "produktywna kreacja", arrow: "" },
        { title: "utalentowana Fundacja MyWay", arrow: "" },
        { title: "webski digital", arrow: "" },
        { title: "produktywna kreacja", arrow: "" },
        { title: "utalentowana Fundacja MyWay", arrow: "" }
      ]
    };
  },

  methods: {
    handleResize() {
      if (window.innerWidth > 1366) {
        this.windowDivide = 4;
      } else if (window.innerWidth > 992) {
        this.windowDivide = 3;
      } else if (window.innerWidth > 576) {
        this.windowDivide = 2;
      } else {
        this.windowDivide = 1;
      }
    },
    moveSlider(val) {
      if (this.actualSlide === 0 && val === -1) {
        this.actualSlide = this.items.length - this.windowDivide; // loop: set to last slide
      } else if (
        this.actualSlide === this.items.length - this.windowDivide &&
        val === 1
      ) {
        this.actualSlide = 0; // loop: set to first slide
      } else {
        this.actualSlide = this.actualSlide + val; // default
      }
    }
  },

  computed: {
    sliderStyles() {
      return {
        right: (this.actualSlide * 50) / this.windowDivide + "vw",
        width: (this.items.length / (this.windowDivide * 2)) * 100 + "vw"
      };
    }
  },
  mixins: [mixins]
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

$smallPhotoHeight: 150px;

.photo {
  &__big {
    width: 50vw;
    height: calc(0.875 * 50vw);
    min-height: calc(100vh - #{$headerHeight} - #{$smallPhotoHeight});

    background-color: $color-gray3;
  }

  &__container {
    overflow: hidden;
  }

  &__list {
    display: flex;
    transition: all 0.2s linear;
  }

  &__small {
    height: $smallPhotoHeight;
    width: 25%;

    &:nth-of-type(even) {
      background-color: $color-gray1;
    }

    &:nth-of-type(odd) {
      background-color: $color-gray2;
    }
  }
}

.content {
  padding: 0 calc(15px + 22%) 0 calc(15px + 12%);
  &__title {
    margin-bottom: 17px;
    text-transform: uppercase;
  }

  &__description {
    font-size: 21px;
    line-height: 28px;
    color: $color-gray4;
  }
}
</style>
