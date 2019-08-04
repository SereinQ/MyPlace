<template>
  <section class="mainSlider section">
    <i class="iconSlide iconSlide__left" @click="moveSlider(-1, 'Left')" />
    <h2 class="title">Crazy about events</h2>
    <div class="item__list" ref="itemsList">
      <div
        class="item__single"
        v-for="(item, index) in items"
        :key="index"
        :class="[{ active: index === actualSlide }, item.tag]"
        :style="'background-color:' + item.background"
      >
        <div class="item__single__bg">
          <img
            :src="
              require('' + '@/images/mainSlider/' + item.tag + '/' + item.bg)
            "
            class="item__single__bg__img"
            v-if="item.bg !== ''"
          />
        </div>
        <div>
          <figure
            class="image image__overText"
            v-for="(image, index) in item.imagesOverText"
            :key="index"
          >
            <img
              :src="
                require('' + '@/images/mainSlider/' + item.tag + '/' + image)
              "
            />
          </figure>
        </div>
        <div>
          <figure
            class="image image__underText"
            v-for="(image, index) in item.imagesUnderText"
            :key="index"
          >
            <img
              :src="
                require('' + '@/images/mainSlider/' + item.tag + '/' + image)
              "
            />
          </figure>
        </div>
      </div>
    </div>
    <i class="iconSlide iconSlide__right" @click="moveSlider(1, 'Right')" />
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      actualSlide: 0,
      items: [
        {
          tag: "crazyAboutEvents",
          // title: "Crazy about events",
          bg: "",
          background: "#c2b3da",
          imagesUnderText: ["1.png", "2.png", "3.png"],
          imagesOverText: ["6.png"]
        },
        {
          tag: "stop",
          // title: "Crazy about events",
          bg: "bg.jpg",
          background: "#c2b3da",
          imagesUnderText: [],
          imagesOverText: []
        },
        {
          tag: "stop",
          // title: "Crazy about events",
          bg: "bg.jpg",
          background: "#c2b3da",
          imagesUnderText: [],
          imagesOverText: []
        }
      ]
    };
  },
  methods: {
    moveSlider(val, pos) {
      this.$refs.itemsList.classList.add("posTo" + pos);

      setTimeout(() => {
        if (this.actualSlide === 0 && val === -1) {
          this.actualSlide = this.items.length - 1; // loop: set to last slide
        } else if (this.actualSlide === this.items.length - 1 && val === 1) {
          this.actualSlide = 0; // loop: set to first slide
        } else {
          this.actualSlide = this.actualSlide + val; // default
        }
        setTimeout(() => {
          this.$refs.itemsList.classList.remove("posTo" + pos);
        }, 200);
      }, 200);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

@keyframes posToLeftBg {
  0% {
    opacity: 1;
  }

  45% {
    opacity: 0;
  }

  55% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes posToLeftImage {
  0% {
    transform: translateX(0px);
    opacity: 1;
  }

  45% {
    transform: translateX(-100px);
    opacity: 0;
  }

  55% {
    transform: translateX(100px);
    opacity: 0;
  }

  100% {
    transform: translateX(0vw);
    opacity: 1;
  }
}

.posToLeft {
  .item__single__bg {
    animation: posToLeftBg 0.4s linear running;
  }

  .image {
    animation: posToLeftImage 0.4s linear running;
  }
}

.posToRight {
  .item__single__bg {
    animation: posToLeftBg 0.4s linear running;
  }

  .image {
    &:nth-of-type(1) {
      animation: posToLeftImage 0.2s linear running reverse;
    }

    &:nth-of-type(2) {
      animation: posToLeftImage 0.4s linear running reverse;
    }

    &:nth-of-type(3) {
      animation: posToLeftImage 0.4s linear running reverse;
    }
  }
}

.title {
  color: $color-brightest;
}

.item {
  &__list {
    position: relative;
    height: 800px;
  }

  &__single {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    transition: 0.4s;

    &:not(.active) {
      opacity: 0;
      pointer-events: none;
    }

    &__bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &.crazyAboutEvents {
      .image {
        &__overText {
          &:nth-of-type(1) {
            top: 5.5%;
            left: 7.7%;
          }
        }

        &__underText {
          &:nth-of-type(1) {
            top: 0;
            left: 56.7%;
          }

          &:nth-of-type(2) {
            bottom: -12.6%;
            left: 24.6%;
          }

          &:nth-of-type(3) {
            right: 0;
            bottom: -70px;
          }
        }
      }
    }
  }
}

.title {
  position: absolute;
  top: 50%;
  font-size: calc(100vw / 6);
  z-index: 2;
  white-space: nowrap;
  transform: translateY(-50%);
}

.image {
  position: absolute;
  &__overText {
    z-index: 3;
  }

  &__underText {
    z-index: 1;
  }
}
</style>
