<template>
  <div class="left-bar gBoxInsetShadow">
    <XcollapseTree :list="cateList" />
  </div>
</template>

<script>
import { CateList } from '@/mock/cates';
import XcollapseTree from '@/xvui/xcollapse-tree';
import { mapState } from 'vuex';

export default {
  name: 'LeftBar',
  components: { XcollapseTree },
  data() {
    return {
      cateArr: []
    }
  },
  computed: {
    ...mapState([
      'cateList'
    ])
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
// @import "~@/style/variable.less";
.left-bar {
  position: fixed;
  top: 50px;
  left: 0;
  width: 226px;
  height: calc(100% - 50px);
  overflow-y: auto;
}
</style>