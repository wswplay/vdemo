<template>
  <div class='xcollapse'>
    <template v-if="!info.children">
      <el-menu-item :index="info.path">
        <template slot="title">
          <i v-if="info.meta && info.meta.icon" :class="iconObj.moon"></i>
          <i v-if="info.meta && info.meta.icon" :class="iconObj.night"></i>
          <span>{{info.name}}</span>
        </template>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu :index="info.path">
        <template slot="title">
          <i v-if="info.meta && info.meta.icon" :class="iconObj.moon"></i>
          <i v-if="info.meta && info.meta.icon" :class="iconObj.night"></i>
          <span>{{info.name}}</span>
        </template>
        <Xelement v-for="citem in info.children" :key="citem.path" :info="citem" />
      </el-submenu>
    </template>
  </div>
</template>

<script>

export default {
  name: 'Xelement',
  props: ['info'],
  data() {
    return {
      iconObj: {
        moon: 'el-icon-moon',
        night: 'el-icon-moon-night',
      }
    }
  },
}
</script>

<style lang='less' scoped>
</style>