<template>
  <section class="section contentSubpage">
    <div class="container container--regular">
      <h2><span>HELLO</span></h2>
      <h3 class="title-md">FROM THE OTHER SIDE</h3>
      <div class="description">
        <p>
          Jesteśmy agencją eventową, więc nasz świat kręci się wokół organizacji
          wydarzeń najróżniejszego typu i o różnej skali: od kameralnych
          konferencji po największe imprezy masowe, jakie kiedykolwiek odbyły
          się w kraju nad Wisłą. To jednak nie wszystko! Nasze uniwersum mieści
          w sobie także komunikację digitalową, szeroko pojęty design oraz
          fundację wspierającą młode muzyczne talenty. We wszystkim, co robimy
          prowadzi nas pierwotny zew efektu woow. „Woow” przez dwa „o”, bo jedno
          to dla nas zdecydowanie za mało. <br /><br />
          Tworząc eventy, jesteśmy z jednej strony konsekwentni i sumienni jak
          Winston Churchill, ale z drugiej, niczym Mick Jagger, wiemy na czym
          polega spektakularna zabawa. Na tym właśnie opiera się zasada
          szalonego profesjonalizmu, która jest MyPlace’owym mottem i stylem
          życia.
        </p>
      </div>
    </div>
    <div class="container container--md">
      <div class="list__container">
        <span
          class="list__title"
          v-observe-visibility="!tabletRes ? visibilityChanged : false"
        >
          EVENT <br />
          <span>X-MEN</span>
        </span>
        <ul class="list__list">
          <li
            class="list__single"
            v-for="(item, index) in items"
            :key="index"
            v-observe-visibility="!tabletRes ? visibilityChanged : false"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import mixins from "@/mixins";
export default {
  data: function() {
    return {
      items: [
        "piłkarz",
        "golfista",
        "wędkarz",
        "miłośnik skuterów",
        "kociary",
        "youtuber",
        "pasjonat mody",
        "muzyk",
        "koszykarz",
        "psiarze",
        "alpakoterapeuta",
        "barman",
        "prawnik",
        "architekt",
        "karateka",
        "piosenkarka",
        "tancerka",
        "charakteryzatorka",
        "biegacz"
      ]
    };
  },
  mixins: [mixins]
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.section {
  @media only screen and (max-width: 1054px) {
    padding-top: 45px;
  }

  @media only screen and (min-width: 1055px) {
    padding-top: 100px;
  }
}

h2 {
  span {
    display: inline-block;
    transform: rotate(180deg);
  }
}

h3 {
  position: relative;

  @media only screen and (max-width: 1054px) {
    top: -20px;
    font-size: 28px;
    line-height: 44px;
  }

  @media only screen and (min-width: 1055px) {
    top: -45px;
    margin-bottom: 70px;
  }
}

.description {
  color: $color-gray2;

  @media only screen and (max-width: 1054px) {
    margin-bottom: 45px;
    font-size: 16px;
    line-height: 22px;
  }

  @media only screen and (min-width: 1055px) {
    margin-bottom: 80px;
    font-size: 28px;
    line-height: 44px;
  }
}

.list {
  &__container {
    position: relative;
    padding: 0 30px;

    @media only screen and (max-width: 1054px) {
      text-align: center;
    }

    @media only screen and (min-width: 1055px) {
      height: 600px;
    }
  }

  &__list {
    @media only screen and (max-width: 1054px) {
      padding-bottom: 30px;
    }

    @media only screen and (min-width: 1055px) {
      height: 100%;
    }
  }

  &__title {
    font-weight: 900;
    color: $color-red2;

    @media only screen and (max-width: 1054px) {
      position: relative;
      display: block;
      left: -45px;
      margin-bottom: 15px;
      font-size: 64px;
    }

    span {
      position: relative;
      top: 0px;
      left: 90px;
      transition: all 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    }

    @media only screen and (min-width: 1055px) {
      position: absolute;
      top: 57.1%;
      left: 7.5%;
      font-size: 92px;
      transition: all 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);

      &:not(.active) {
        left: calc(7.5% - 15px);

        span {
          top: 15px;
        }
      }
    }
  }

  &__single {
    text-transform: uppercase;
    color: $color-dark1;

    @media only screen and (max-width: 1054px) {
      font-size: 16px;
      line-height: 22px;
    }

    @media only screen and (min-width: 1055px) {
      position: absolute;
      font-size: 12px;
      line-height: 11px;
      letter-spacing: 1.2px;
      transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
      transform: translateX(0px);

      &::after {
        top: 50%;
        right: calc(100% + 5px);
        width: 53px;
        height: 6px;
        background-color: $color-red2;
        transform: translateY(-50%);
        transition: all 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        transition-delay: 0.15s;
      }

      &:not(.active) {
        color: transparent;
        transform: translateX(15px);

        &::after {
          width: 0px;
        }
      }
    }

    &::after {
      @extend %dombasic;
    }

    @media only screen and (min-width: 1055px) {
      &:nth-of-type(1) {
        top: 22.3%;
        left: 28.4%;
      }

      &:nth-of-type(2) {
        top: 30.6%;
        left: 18%;
      }

      &:nth-of-type(3) {
        top: 28%;
        left: 36.7%;
      }

      &:nth-of-type(4) {
        top: 37%;
        left: 24.5%;
      }

      &:nth-of-type(5) {
        top: 23.7%;
        left: 73.7%;
      }

      &:nth-of-type(6) {
        top: 25.9%;
        left: 62.8%;
      }

      &:nth-of-type(7) {
        top: 32.5%;
        left: 51.8%;
      }

      &:nth-of-type(8) {
        top: 38.6%;
        left: 43%;
      }

      &:nth-of-type(9) {
        top: 47%;
        left: 37.6%;
      }

      &:nth-of-type(10) {
        top: 37.3%;
        left: 88%;
      }

      &:nth-of-type(11) {
        top: 39.2%;
        left: 67%;
      }

      &:nth-of-type(12) {
        top: 48.4%;
        left: 54.5%;
      }

      &:nth-of-type(13) {
        top: 48.7%;
        left: 82.7%;
      }

      &:nth-of-type(14) {
        top: 58.3%;
        left: 64.9%;
      }

      &:nth-of-type(15) {
        top: 70.4%;
        left: 59.4%;
      }

      &:nth-of-type(16) {
        top: 61.7%;
        left: 87.6%;
      }

      &:nth-of-type(17) {
        top: 66.5%;
        left: 79.6%;
      }

      &:nth-of-type(18) {
        top: 82.2%;
        left: 67.7%;
      }

      &:nth-of-type(19) {
        top: 82%;
        left: 88.8%;
      }
    }
  }
}
</style>
