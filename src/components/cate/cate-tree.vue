<template>
  <div class="cate-tree">
    <CateItem v-for="item in list" :info="item" :key="item.path" />
  </div>
</template>

<script>
import CateItem from './cate-item'
export default {
  name: 'CateTree',
  props: ['list'],
  components: { CateItem },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

</style>