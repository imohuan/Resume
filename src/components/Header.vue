<template>
  <div class="h-screen overflow-hidden relative select-none">
    <div
      class="w-full h-full absolute flex justify-center items-center flex-col z-10"
    >
      <h2
        class="sm:text-5xl text-2xl font-mono transition-all ease-in-out duration-300 leading-tight text-center"
      >
        Hello, I'm Imohuan
      </h2>
      <p
        class="sm:text-lg text-sm tracking-wider font-bold sm:-mt-6 -mt-2 text-center px-6"
      >
        车到山前必有路，传到桥头自然直
      </p>
      <div
        class="space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 flex justify-center items-center flex-col sm:flex-row transition-all ease-in-out duration-300"
      >
        <button
          class="block rounded text-white bg-gray-800 px-16 sm:px-6 py-2 border-2 border-gray-800 focus:outline-none hover:bg-gray-700 transition-all ease-in-out duration-300 font-bold"
        >
          <!-- <a href="#about" class="text-white hover:text-white">关于我</a> -->
          <Anchor href="#about">关于我</Anchor>
        </button>
        <button
          class="block rounded px-16 sm:px-6 py-2 border-2 border-gray-800 focus:outline-none box-content font-bold hover:border-blue-700 hover:text-blue-700 transition ease-in-out duration-300"
        >
          我的作品
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, computed } from "vue";
import Anchor from "./Tool/Anchor.vue";
export default defineComponent({
  name: "Header",
  components: {
    Anchor,
  },
});
</script>
