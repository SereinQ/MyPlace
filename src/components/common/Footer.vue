<template>
  <footer class="footer">
    <img
      :src="require('@/images/static/footer.jpg')"
      class="bigImage"
      alt="My place"
    />
    <div class="container container--md">
      <div class="row justify-content-end">
        <div class="content col-12 col-sm-8 col-md-6">
          <h2>HELLO</h2>
          <h3>IS IT ME YOU'RE LOOKING FOR?</h3>
          <h4>NASZ CZŁOWIEK OD BRIEFÓW</h4>
          <div class="manbox">
            <p><strong>Grzegorz Nowakowski</strong></p>
            <p>New Business Director</p>
          </div>
          <div class="contactbox">
            <p><a href="tel:+48515116607">48 515 116 607</a></p>
            <p>
              <a href="mailto:g.nowakowski@myplace.com.pl"
                >g.nowakowski@myplace.com.pl</a
              >
            </p>
          </div>
          <span class="copyright d-block"
            >Copyrights ⓒ 2019 MyPlace. Wszelkie prawa zastrzeżone.</span
          >
          <div class="infobox row">
            <div class="col-12 col-lg-6">
              <span> <strong>MyPlace Sp. z o. o.</strong> </span> <br />
              <span>
                <a
                  href="https://www.google.com/maps?q=ul.+M%C5%82ynarska+42,+01-171+Warszawa&um=1&ie=UTF-8&sa=X&ved=0ahUKEwivzqe3j-HjAhWppYsKHdCJCNsQ_AUIESgB"
                  target="_blank"
                  >ul. Młynarska 42, 01-171 Warszawa</a
                >
              </span>
            </div>
            <div class="col-12 col-lg-6">
              <span>
                <a href="tel:+48515116607">48 515 116 607</a> <br />
              </span>
              <span>
                <a href="mailto:g.nowakowski@myplace.com.pl"
                  >g.nowakowski@myplace.com.pl</a
                >
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

// non standalone
strong {
  font-weight: 600;
  color: $color-dark2;
}

a {
  &:hover,
  &:focus {
    color: $color-gray1;
  }

  &:hover {
    opacity: 0.8;
  }
}

// multi rules
p,
span,
a {
  color: $color-gray1;
}

h3,
h4 {
  font-weight: 900;
}

// single rules
h3 {
  color: $color-dark1;

  @media only screen and (max-width: 1054px) {
    margin-bottom: 30px;
    font-size: 32px;
    line-height: 40px;
  }

  @media only screen and (min-width: 1055px) {
    margin-bottom: 54px;
    font-size: 64px;
    line-height: 0.88;
  }
}

h4 {
  color: $color-red1;

  @media only screen and (max-width: 1054px) {
    margin-bottom: 15px;
  }

  @media only screen and (min-width: 1055px) {
    margin-bottom: 27px;
  }
}

p {
  @media only screen and (max-width: 1054px) {
    font-size: 16px;
    line-height: 22px;
  }

  @media only screen and (min-width: 1055px) {
    font-size: 21px;
    line-height: 24px;
  }
}

span {
  font-size: 16px;
  line-height: 22px;
}

.bigImage {
  position: absolute;
  max-width: 50vw;
  bottom: 0;
  left: 0;
  max-width: 50vw;
  max-height: 100%;

  @media only screen and (max-width: 767px) {
    max-width: calc(100% / 3);
  }

  @media only screen and (max-width: 576px) {
    display: none;
  }

  @media only screen and (min-width: 1055px) {
    // max-width: 50vw;
  }
}

.content {
  padding-bottom: 30px;
}

.manbox {
  margin-bottom: 10px;
}

.contactbox {
  @media only screen and (max-width: 1054px) {
    margin-bottom: 60px;
  }

  @media only screen and (min-width: 1055px) {
    margin-bottom: 120px;
  }
}

.copyright {
  margin-bottom: 26px;
}

.infobox {
  @media only screen and (max-width: 1054px) {
    > div:not(:last-of-type) {
      margin-bottom: 10px;
    }
  }
}
</style>
