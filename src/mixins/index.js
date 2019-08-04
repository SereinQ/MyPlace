import Vue from "vue";
import VueObserveVisibility from "vue-observe-visibility";

Vue.use(VueObserveVisibility);
export default {
  data: function() {
    return {
      windowDivide: 4,
      tabletRes: true
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

      window.innerWidth < 1055
        ? (this.tabletRes = true)
        : (this.tabletRes = false);
    },

    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
      if (isVisible) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
      // console.log(entry);
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
