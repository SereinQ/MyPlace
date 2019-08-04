<template>
  <router-view />
</template>

<style lang="scss">
@keyframes opacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.enter-animation-element {
  animation-name: opacity;
  animation-duration: 0.3s;
  animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
  animation-iteration-count: 1;
}
</style>
