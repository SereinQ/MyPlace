<template>
  <section class="simpleSubpage section d-flex align-items-center">
    <img class="image image__top" :src="require('@/images/static/char.png')" />
    <div class="container container--sm">
      <h2>KARIERA</h2>
      <h4>
        Czujesz, że MyPlace <br />
        to Twoje miejsce?
      </h4>
      <div class="description">
        <p>
          Wciąż poszukujemy nowych talentów oraz bardziej lub mniej
          oszlifowanych eventowych diamentów. Jeżeli chcesz dołączyć do X-menów
          eventowego uniwersum, to wyślij nam CV i opis swoich supermocy.
        </p>
      </div>
      <a href="mailto:wspolpraca@myplace.com.pl">wspolpraca@myplace.com.pl</a>
    </div>
    <img
      class="image image__bottom"
      :src="require('@/images/static/char.png')"
    />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.section {
  min-height: calc(100vh - #{$headerHeight});
  overflow: hidden;

  @media only screen and (max-width: 1054px) {
    padding: 100px 0 135px 0;
  }

  @media only screen and (min-width: 1055px) {
    padding: 345px 0;
  }
}

h4 {
  color: $color-red1;
  font-weight: 400;
  text-transform: uppercase;

  @media only screen and (max-width: 1054px) {
    margin: 10px 0 25px 0;
    font-size: 21px;
    line-height: 28px;
  }

  @media only screen and (min-width: 1055px) {
    margin: 15px 0 45px 0;
    font-size: 32px;
    line-height: 34px;
  }
}

p {
  color: $color-gray2;

  @media only screen and (max-width: 1054px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media only screen and (min-width: 1055px) {
    font-size: 28px;
    line-height: 34px;
  }
}

a {
  @media only screen and (max-width: 1054px) {
    font-size: 21px;
    line-height: 28px;
  }

  @media only screen and (min-width: 1055px) {
    font-size: 36px;
    line-height: 34px;
  }

  color: $color-red1;

  &:hover {
    color: $color-red1;
    opacity: 0.8;
  }
}

.description {
  @media only screen and (max-width: 1054px) {
    margin-bottom: 25px;
  }

  @media only screen and (min-width: 1055px) {
    margin-bottom: 35px;
  }
}

.image {
  position: absolute;

  @media only screen and (max-width: 1054px) {
    max-height: 170px;
  }

  &__top {
    top: 0;
    left: 15.7%;
    transform: translateY(-63%) rotate(-5deg);
  }

  &__bottom {
    right: 15.7%;
    bottom: 0;
    transform: rotatey(180deg) translateY(35%);
  }
}
</style>
