<template>
  <div class="lay-out">
    <NavBar />
    <LeftBar />
    <Main />
  </div>
</template>

<script>
import NavBar from "@/layout/NavBar.vue";
import LeftBar from "@/layout/LeftBar.vue";
import Main from "@/layout/Main.vue";

export default {
  name: 'Layout',
  components: { NavBar, LeftBar, Main },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

</style>