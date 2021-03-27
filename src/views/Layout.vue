<template>
  <div class="lay-out">
    <NavBar />
    <LeftBar />
    <Main />
  </div>
</template>

<script>
import NavBar from "@/views/NavBar.vue";
import LeftBar from "@/views/LeftBar.vue";
import Main from "@/views/Main.vue";

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