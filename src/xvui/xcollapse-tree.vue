<template>
  <el-scrollbar class='xcollapseTree'>
    <el-menu
      :default-active="activeMenu"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fff"
      text-color="#000"
      :unique-opened="true"
    >
      <Xelement
        v-for="item in list"
        :key="item.path"
        :info="item"
        :basePath="item.path"
      />
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
  computed: {
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log('open',key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log('close', key, keyPath);
    }
  }
}
</script>

<style lang='less' scoped>
.xcollapseTree {
  text-align: left;
  overflow-x: hidden;
  /deep/.el-menu-item .el-icon-moon,
  /deep/.el-submenu__title .el-icon-moon {
    display: none;
  }
  /deep/.is-active > .el-submenu__title {
    color: green!important;
    font-size: 16px;
  }
  /deep/.is-active.el-menu-item .el-icon-moon-night,
  /deep/.is-active > .el-submenu__title .el-icon-moon-night {
    display: none;
  }
  /deep/.is-active.el-menu-item .el-icon-moon,
  /deep/.is-active > .el-submenu__title .el-icon-moon {
    display: inline-block;
  }
  /deep/.is-active > .el-submenu__title i {
    color: green!important;
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