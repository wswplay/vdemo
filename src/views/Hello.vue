<template>
  <div class="Hello centerFlex">
    <div class="content">
      {{tips}}
      {{sloga}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      tips: '从今往后，你就是后台。',
      sloga: '一路向前，你就是我们！'
    }
  }
}
</script>

<style lang="less" scoped>
.Hello {
  width: 100%;
  height: 100%;
  font-size: @fontSize18;
}
</style>