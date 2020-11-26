<template>
  <div class="bg w-full h-screen absolute top-0 left-0 overflow-hidden z-10">
    <span class="bg-white w-full h-full" style="display: block"></span>
    <div
      v-for="index in maxLen"
      :key="index"
      :class="index - 1 === bgIndex ? 'show' : ''"
    ></div>
  </div>

  <div class="w-full h-screen fixed top-0 left-0">
    <img class="block w-full h-full fb" src="@/assets/background/fb.jpg" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "Background",
  setup() {
    const bgIndex = ref(0);
    const maxLen = 4;
    const readNext = () => {
      setTimeout(() => {
        bgIndex.value = (bgIndex.value + 1) % maxLen;
        readNext();
      }, 5000);
    };

    onMounted(() => {
      readNext();
    });

    return {
      maxLen,
      bgIndex,
    };
  },
});
</script>


<style scoped>
.bg > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  transition: all 0.5s;
  background-size: cover;
}

.bg > div:nth-of-type(1) {
  background-image: url("../assets/background/1.jpg");
}

.bg > div:nth-of-type(2) {
  background-image: url("../assets/background/2.jpg");
}

.bg > div:nth-of-type(3) {
  background-image: url("../assets/background/3.jpg");
}

.bg > div:nth-of-type(4) {
  background-image: url("../assets/background/4.jpg");
}

.bg .show {
  opacity: 0.8;
  display: block;
  animation: fadescale 5s forwards;
}

.fb {
  opacity: 0.2;
}

@keyframes fadescale {
  0% {
    opacity: 0.5;
    transform: scale(1) rotate(0deg);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.8) rotate(20deg);
  }

  100% {
    opacity: 0.5;
    transform: scale(2) rotate(0deg);
  }
}
</style>
