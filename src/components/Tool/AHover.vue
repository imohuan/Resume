<template>
  <div class="inline-block relative ahover cursor-pointer">
    <span class="text-black hover:text-black text-xs font-bold" v-bind="$attrs"
      ><slot
    /></span>
    <div
      class="w-0 absolute bottom-0 -mb-1 transition-all ease-in-out duration-300"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({ name: "AHover", inheritAttrs: false });
</script>

<style scoped>
.ahover:hover > div {
  width: 100%;
}

.ahover > div {
  height: 2px;
  background: #000;
}
</style>>
