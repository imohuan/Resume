<template>
  <div class="overflow-y-hidden">
    <Background />
    <FixedHeader />
    <Header />
    <About />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Background from "@/components/Background.vue";
import Header from "@/components/Header.vue";
import FixedHeader from "@/components/FixedHeader.vue";
import About from "@/components/About.vue";
export default defineComponent({
  name: "App",
  components: { Background, Header, FixedHeader, About },
});
</script>

