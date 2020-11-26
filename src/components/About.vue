<template>
  <div id="about" class="h-screen overflow-hidden relative select-none p-4">
    <div class="flex justify-center items-center flex-col w-full h-full">
      <h2
        class="font-bold sm:text-3xl text-xl font-mono transition-all ease-in-out duration-300 leading-tight text-center"
      >
        关于我
      </h2>
      <img class="rounded-full w-2/5" src="@/assets/portrait.png" />

      <p class="mt-4 text-mono px-2 sm:px-64 tracking-wide font-bold cutext">
        我叫周涛，19岁，坐标成都，是一名前端工程师。前端是一门有容乃大的行业，我自学断断续续已经1年之久了，
        前端开发我非常热爱。<br />
      </p>
    </div>
    about
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
});
</script>

<style>
.cutext {
  text-indent: 3rem;
}
</style>