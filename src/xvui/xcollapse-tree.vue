<template>
  <el-scrollbar class='xcollapseTree'>
    <el-menu
      default-active="essay"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fff"
      text-color="#000"
    >
      <Xelement v-for="item in list" :key="item.path" :info="item" />
    </el-menu>
  </el-scrollbar>
</template>

<script>
import Xelement from './xelement'
export default {
  name: 'XcollapseTree',
  props: ['list'],
  components: { Xelement },
  data() {
    return {}
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log('open',key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log('close', key, keyPath);
    }
  }
}
</script>

<style lang='less' scoped>
.xcollapseTree {
  text-align: left;
  overflow-x: hidden;
  /deep/.is-active > .el-submenu__title {
    color: green!important;
    font-size: 16px;
  }
  /deep/.el-submenu__title,
  /deep/.el-menu-item {
    box-shadow: 0px 1px 1px -1px #ccc;
    margin-bottom: 1px;
  }
  /deep/.is-active.el-menu-item {
    background-color: #e1f5ea!important;
  }
  /deep/.el-submenu__title:hover,
  /deep/.el-menu-item:hover {
    background-color: #eaf7f0!important;
  }
  /deep/.el-menu-item.is-active {
    font-size: 16px;
  }
}
</style>