<template>
  <div @click="handleClick" @touchstart="handleClick"><slot /></div>
  <div
    class="fixed top-0 left-0 w-full h-full z-50 bg-transparent"
    v-show="show"
  ></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Anchor",
  props: {
    href: {
      type: String,
      required: true,
    },
  },
  setup(props: any) {
    let addNumber = 2;
    const show = ref(false);

    const handleClick = () => {
      const offsetTop =
        props.href === "#" ? 0 : document.querySelector(props.href).offsetTop;
      const scrollAnim = () => {
        let currentTop = document.documentElement.scrollTop;
        addNumber *= 1.12;
        const topAdd = offsetTop - currentTop > 0 ? addNumber : -addNumber;

        if (Math.abs(offsetTop - currentTop) <= addNumber * 1.5) {
          document.documentElement.scrollTop = offsetTop;
          show.value = false;
          return;
        }

        currentTop += topAdd;
        document.documentElement.scrollTop = currentTop;
        requestAnimationFrame(scrollAnim);
      };

      show.value = true;
      scrollAnim();
      window.history.pushState(null, "", props.href);
      addNumber = 2;
    };

    return {
      handleClick,
      show,
    };
  },
});
</script>