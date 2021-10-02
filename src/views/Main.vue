<template>
  <div class="main gBoxInsetShadow">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data() {
    return {}
  },
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  position: fixed;
  top: 50px;
  left: 226px;
  height: calc(100% - 50px);
  width: calc(100% - 226px);
  overflow-x: hidden;
  overflow-y: auto;
}
</style>