<template>
  <div class="left-bar gBoxInsetShadow">
    <CateTree :list="cateArr" />
  </div>
</template>

<script>
import { CateList } from '@/mock/cates'
import CateTree from '@/components/cate/cate-tree'

export default {
  name: 'LeftBar',
  components: { CateTree },
  data() {
    return {
      cateArr: []
    }
  },
  beforeCreate() {
  },
  created() {
    this.cateArr = CateList
  },
  mounted() {
    
  }
}
</script>

<style lang="less" scoped>
@import "~@/style/variable.less";
.left-bar {
  position: fixed;
  top: 50px;
  left: 0;
  width: 200px;
  height: calc(100% - 50px);
}
</style>