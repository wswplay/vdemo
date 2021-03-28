<template>
  <div class="stack">
    <div class="cate-list">
      <XcollapseTree :list="cateArr" />
    </div>
  </div>
</template>

<script>
import XcollapseTree from '@/xvui/xcollapse-tree'
import { CateList } from '@/mock/cates'
export default {
  name: 'Stack',
  components: { XcollapseTree },
  data() {
    return {
      cateArr: []
    }
  },
  created() {
    this.cateArr = CateList
  },
}
</script>

<style lang="less" scoped>
.stack {
  // color: #fff;
  // font-size: 50px;
  // line-height: 300px;
  // background-color: rgb(224, 204, 178);
  .cate-list {
    width: 200px;
  }
}
</style>