<template>
  <div
    class="fixed-header fixed top-0 w-full h-auto z-20 select-none transition-all ease-in-out duration-300"
  >
    <div
      :class="navShow ? 'show' : ''"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      class="py-3 px-4 sm:px-20 flex justify-between bg-white transition-all ease-in-out duration-300"
    >
      <div>
        <a
          href="#"
          class="text-black hover:text-black text-lg leading-none font-bold font-mono"
        >
          <AHover class="text-2xl">Imohuan</AHover>
        </a>
      </div>
      <div class="flex-1 relative">
        <div
          ref="menuBtn"
          class="block sm:hidden absolute right-0 top-0 -mt-1 p-2 hover:bg-gray-300"
          @click="toggleMenu"
        >
          <svg
            t="1606377909243"
            class="icon h-3 w-3"
            viewBox="0 0 1280 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3497"
            width="200"
            height="200"
          >
            <path
              d="M1280 104.106667c0 56.234667-40.96 101.802667-91.392 101.802666H91.306667C40.96 205.909333 0 160.426667 0 104.106667 0 47.957333 40.96 2.304 91.392 2.304H1188.693333C1239.04 2.304 1280 47.957333 1280 104.106667z m-365.738667 407.210666c0 56.234667-40.96 101.802667-91.392 101.802667H91.306667C40.96 613.12 0 567.552 0 511.317333 0 455.168 40.96 409.6 91.392 409.6h731.477333c50.432 0 91.392 45.653333 91.392 101.802667z m220.586667 407.210667c0 56.234667-40.96 101.888-91.477333 101.888H91.392C40.96 1020.416 0 974.762667 0 918.528c0-56.149333 40.96-101.802667 91.392-101.802667h951.978667c50.517333 0 91.477333 45.653333 91.477333 101.802667z"
              p-id="3498"
            ></path>
          </svg>
        </div>
        <!-- 移动 显示 -->
        <div
          ref="mobile"
          v-show="menuShow"
          :class="menuShow ? 'fade-anim' : ''"
          class="bg-white w-full shadow-2xl px-4 py-5 fixed top-0 left-0 mt-10 transition-all ease-in-out duration-300 sm:hidden"
        >
          <div class="flex items-center justify-center h-5 space-x-10">
            <a
              href="https://www.yuque.com/imohuan"
              target="_brank"
              class="block h-full"
            >
              <img src="@/assets/yuque.png" alt="" class="block h-full" />
            </a>

            <a
              href="https://imohuan.github.io/"
              target="_brank"
              class="block h-full"
            >
              <svg
                class="h-full"
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>

          <div class="space-y-4 flex items-center justify-center flex-col mt-4">
            <AHover><Anchor href="#">首页</Anchor></AHover>
            <AHover><Anchor href="#about">导航</Anchor></AHover>
            <AHover><Anchor href="#about">关于</Anchor></AHover>
          </div>
        </div>
        <!-- PC 显示 -->
        <div
          class="flex justify-between invisible sm:visible absolute sm:relative"
        >
          <div
            class="flex-1 flex items-center justify-start h-5 pl-10 space-x-3 mt-1"
          >
            <a
              href="https://www.yuque.com/imohuan"
              target="_brank"
              class="block h-full"
            >
              <img src="@/assets/yuque.png" alt="" class="block h-full" />
            </a>

            <a
              href="https://imohuan.github.io/"
              target="_brank"
              class="block h-full"
            >
              <svg
                class="h-full"
                height="32"
                viewBox="0 0 16 16"
                version="1.1"
                width="32"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                ></path>
              </svg>
            </a>
          </div>
          <div class="space-x-4">
            <AHover><Anchor href="#">首页</Anchor></AHover>
            <AHover><Anchor href="#about">导航</Anchor></AHover>
            <AHover><Anchor href="#about">关于</Anchor></AHover>
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-full h-4 bg-transparent absolute navhover flex justify-center items-center"
      v-show="!navShow"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
    >
      <svg
        t="1606386236203"
        class="icon w-4 h-4"
        viewBox="0 0 1365 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="5285"
        width="200"
        height="200"
      >
        <path
          d="M682.666667 925.013333l604.16-487.424c17.92-14.506667 47.018667-14.506667 65.024 0 17.92 14.336 17.92 37.973333 0 52.309334L690.176 1024 682.666667 1017.770667 675.157333 1024 13.482667 489.898667c-17.92-14.336-17.92-37.973333 0-52.309334 17.92-14.506667 47.104-14.506667 65.109333 0L682.666667 925.098667z m0-426.666666L1286.826667 11.008c17.92-14.506667 47.018667-14.506667 65.024 0 17.92 14.336 17.92 38.058667 0 52.309333L690.176 597.333333 682.666667 591.104 675.157333 597.333333 13.482667 63.232c-17.92-14.336-17.92-37.973333 0-52.309333 17.92-14.506667 47.104-14.506667 65.109333 0L682.666667 498.432z"
          p-id="5286"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from "vue";
import AHover from "@/components/Tool/AHover.vue";
import Anchor from "@/components/Tool/Anchor.vue";

import useClickOutside from "@/hooks/useClickOutside";
import { debounce } from "lodash";

export default defineComponent({
  name: "fixedHeader",
  components: { AHover, Anchor },
  setup() {
    // 控制 菜单的切换
    const menuShow = ref(false);
    const menuBtn = ref<null | HTMLElement>(null);
    const mobile = ref<null | HTMLElement>(null);
    const isClickOutside = useClickOutside([mobile, menuBtn]);
    const toggleMenu = () => {
      menuShow.value = !menuShow.value;
    };

    watch(isClickOutside, () => {
      if (menuShow.value && isClickOutside.value) {
        menuShow.value = false;
        isClickOutside.value = false;
      }
    });

    // 控制 导航的显示.

    const navShow = ref(false);
    const timer = ref(0);

    // 鼠标移入事件
    const handleMouseOver = () => {
      navShow.value = true;
      if (timer.value) clearTimeout(timer.value);
    };

    const handleMouseLeave = () => {
      timer.value = setTimeout(() => {
        navShow.value = false;
      }, 5000);
    };

    const toggleNav = () => {
      if (timer.value) clearTimeout(timer.value);
      timer.value = setTimeout(() => {
        navShow.value = false;
      }, 5000);
    };

    // 页面Resize事件
    const handleResize = debounce(() => {
      if (document.body.clientWidth < 640) {
        navShow.value = true;
        toggleNav();
      }
    }, 60);

    // 滚动事件
    const handleScroll = debounce(() => {
      if (document.documentElement.scrollTop < 10) {
        navShow.value = true;
        toggleNav();
      }
    }, 60);

    // 事件处理
    onMounted(() => {
      document.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      handleResize();
      handleScroll();
    });

    onUnmounted(() => {
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    });

    return {
      mobile,
      menuShow,
      menuBtn,
      navShow,
      toggleMenu,
      handleMouseOver,
      handleMouseLeave,
    };
  },
});
</script>

<style scoped>
.fixed-header > div {
  transform: translateY(-100%);
}

.fixed-header > div.show {
  transform: translateY(0px);
}

.fixed-header > div:nth-of-type(1) {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.navhover {
  top: 10px;
}

.fade-anim {
  opacity: 0;
  transform: translateY(0px);
  animation: fade 0.8s forwards;
}

@keyframes fade {
  0% {
    opacity: 0.3;
    transform: translateY(-100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>