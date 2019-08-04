<template>
  <section class="benefits section">
    <div class="row">
      <div class="bigImage__container relative">
        <div
          class="item__single"
          v-for="(item, index) in items"
          :key="index"
          v-observe-visibility="!tabletRes ? visibilityChanged : false"
        >
          <span class="item__single__title" v-html="item.title" />
          <img
            class="item__single__image"
            :src="require('' + '@/images/benefits/arr' + index + '.svg')"
          />
        </div>
        <div class="bigImage__content">
          <span
            class="bigImage__position"
            v-observe-visibility="!tabletRes ? visibilityChanged : false"
          />
          <img
            class="bigImage__single mx-auto"
            :src="require('@/images/static/benefitsHeart.jpg')"
            alt="My place"
          />
        </div>
      </div>
    </div>
    <baseButton to="/hello">Zobacz jak bije nasze serce</baseButton>
  </section>
</template>

<script>
import mixins from "@/mixins";
export default {
  data: function() {
    return {
      items: [
        { title: "królewska <br /> obsługa klienta" },
        { title: "dizajnerski <br /> design" },
        { title: "kreatywna produkcja" },
        { title: "webski digital" },
        { title: "produktywna <br /> kreacja" },
        { title: "utalentowana <br /> Fundacja MyWay" }
      ]
    };
  },
  mixins: [mixins]
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.section {
  padding: 170px 0 70px 0;
  text-align: center;
}

.bigImage {
  &__container {
    margin: auto;
  }

  &__position {
    position: absolute;
    top: 0;
    left: 50%;
    height: 70%;
    transform: translateY(-50%);
  }

  &__position {
    &:not(.active) + .bigImage__single {
      opacity: 0.5;
      transform: rotateX(40deg);
    }
  }

  &__single {
    transition: all 1.2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }
}

.item {
  &__single {
    position: absolute;
    z-index: 2;

    &__title {
      display: block;
      font-family: "PT Script Stream";
      font-size: 35px;
      line-height: 42px;
      transition: all 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }

    &__image {
      position: absolute;
      width: 100%;
      transition: all 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }

    &.active {
      .item__single__title {
        transition-delay: 0.5s;
      }
    }

    &:not(.active) {
      .item__single__title {
        transform: scale(0.4);
        opacity: 0;
      }

      .item__single__image {
        width: 50%;
        transition-delay: 0.5s;
      }

      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3) {
        .item__single__image {
          margin-left: -100px;
        }
      }

      &:nth-of-type(4),
      &:nth-of-type(5),
      &:nth-of-type(6) {
        .item__single__image {
          margin-right: -100px;
        }
      }
    }

    &:nth-of-type(1) {
      top: 148px;
      left: -190px;

      .item__single__title {
        transform: rotate(7deg);
      }

      &:not(.active) .item__single__title {
        transform: rotate(7deg) scale(0.4);
      }

      &.active .item__single__title {
        transform: rotate(7deg);
      }

      .item__single__image {
        top: -54px;
        left: 315px;
        transform: scale(2.6);
      }
    }

    &:nth-of-type(2) {
      top: 377px;
      left: -154px;

      &:not(.active) .item__single__title {
        transform: rotate(-7deg) scale(0.4);
      }

      &.active .item__single__title {
        transform: rotate(-7deg);
      }

      .item__single__image {
        top: -12px;
        left: 220px;
        transform: scale(2.2);
      }
    }

    &:nth-of-type(3) {
      top: 538px;
      left: -252px;

      &:not(.active) .item__single__title {
        transform: rotate(-7deg) scale(0.4);
      }

      &.active .item__single__title {
        transform: rotate(-7deg);
      }

      .item__single__image {
        top: -35px;
        left: 290px;
        transform: scale(1.9);
      }
    }

    &:nth-of-type(4) {
      top: -10px;
      right: -133px;

      &:not(.active) .item__single__title {
        transform: rotate(-5deg) scale(0.4);
      }

      &.active .item__single__title {
        transform: rotate(-5deg);
      }

      .item__single__image {
        top: 73px;
        right: 276px;
        transform: scale(2.3);
      }
    }

    &:nth-of-type(5) {
      top: 198px;
      right: -192px;

      &:not(.active) .item__single__title {
        text-align: left;
        transform: rotate(9deg) scale(0.4);
      }

      &.active .item__single__title {
        text-align: left;
        transform: rotate(9deg);
      }

      .item__single__image {
        top: 50px;
        right: 362px;
        transform: scale(2.9);
      }
    }

    &:nth-of-type(6) {
      top: 375px;
      right: -220px;

      &:not(.active) .item__single__title {
        transform: rotate(-4deg) scale(0.4);
      }

      &.active .item__single__title {
        transform: rotate(-4deg);
      }

      .item__single__image {
        top: 30px;
        right: 310px;
        transform: scale(1.8);
      }
    }
  }
}
</style>
