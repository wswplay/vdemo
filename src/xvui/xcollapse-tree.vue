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
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>技术栈</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">Vue生态</template>
          <el-submenu index="1-1-1">
            <template slot="title">Vue</template>
            <el-menu-item index="1-1-1-1">2.0</el-menu-item>
            <el-menu-item index="1-1-1-2">3.0</el-menu-item>
          </el-submenu>
          <el-menu-item index="1-1-2">Vue-Router</el-menu-item>
          <el-submenu index="1-1-3">
            <template slot="title">数据管理</template>
            <el-menu-item index="1-1-3-1">Vuex</el-menu-item>
            <el-menu-item index="1-1-3-2">其他</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">Node</template>
          <el-menu-item index="1-2-1">Koa</el-menu-item>
          <el-menu-item index="1-2-2">Webpack</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-3">性能优化</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <template slot="title">
          <i class="el-icon-setting"></i>
          <span>随笔</span>
        </template>
      </el-menu-item> -->
    </el-menu>
  </el-scrollbar>
</template>

<script>
// import Xcollapse from './xcollapse'
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