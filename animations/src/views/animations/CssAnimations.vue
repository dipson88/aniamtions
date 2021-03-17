<template>
  <div class="css-animations animate__animated animate__bounceInRight">
    <h2 class="transition-vue__header">
        1. CSS Animation
    </h2>
    <div class="transform">
      transform
    </div>
    <div class="transition">
      transition
    </div>
    <div class="animation-1" />
    <div class="animation-2" />
    <div class="animation-3" />

    <div class="animation-4-wrapper">
      <img
        src="https://res.cloudinary.com/dqo6ulmjx/image/upload/v1611661789/animations/grumpy_cat.jpg"
        class="animation-4"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssAnimations'
}
</script>

<style lang="scss">
.animation-1,
.animation-2,
.animation-3 {
  height: 100px;
  width: 100px;
  background-color: green;
  margin-bottom: 200px;
  margin-left: 100px;
}

.animation-1 {
  animation-name: animation-1;
  animation-iteration-count: infinite;
  animation-duration: 2s;
}

.animation-2 {
  animation-name: animation-2;
  animation-iteration-count: infinite;
  animation-duration: 2s;
}

.animation-3 {
  animation-name: animation-3;
  animation-iteration-count: infinite;
  animation-duration: 2s;
}

.animation-4 {
  position: absolute;
  animation: scale 4s infinite linear;

  &-wrapper {
    position: relative;
    animation: spin 5s infinite linear;
  }
}

@keyframes spin {
  100% {
    transform: rotate(180deg);
  }
}

@keyframes scale {
  100% {
    transform: scaleX(2) scaleY(2);
  }
}

@keyframes animation-1 {
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(100px);
  }

  100% {
    transform: translateX(0);
  }
}

@keyframes animation-2 {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes animation-3 {
  0% {
    transform: translateY(0);
    background-color: red;
  }

  50% {
    transform: translateY(-100px);
    background-color: green;
  }

  100% {
    transform: translateY(0);
    background-color: red;
  }
}
</style>
