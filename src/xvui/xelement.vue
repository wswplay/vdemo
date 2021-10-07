<template>
  <div class='xcollapse'>
    <template v-if="!info.children">
      <router-link :to="info.isWaiting?`${basePath}?name=${info.label}`:basePath">
        <el-menu-item :index="basePath">
          <template slot="title">
            <i v-if="info.meta && info.meta.icon" :class="iconObj.moon"></i>
            <i v-if="info.meta && info.meta.icon" :class="iconObj.night"></i>
            <span>{{info.label}}</span>
          </template>
        </el-menu-item>
      </router-link>
    </template>
    <template v-else>
      <el-submenu :index="info.path">
        <template slot="title">
          <i v-if="info.meta && info.meta.icon" :class="iconObj.moon"></i>
          <i v-if="info.meta && info.meta.icon" :class="iconObj.night"></i>
          <span>{{info.label}}</span>
        </template>
        <Xelement
          v-for="citem in info.children"
          :key="citem.path"
          :info="citem"
          :basePath="combPath(citem.path)"
        />
      </el-submenu>
    </template>
  </div>
</template>

<script>
import Path from 'path';

export default {
  name: 'Xelement',
  props: ['info', 'basePath'],
  data() {
    return {
      iconObj: {
        moon: 'el-icon-moon',
        night: 'el-icon-moon-night',
      }
    }
  },
  methods: {
    combPath(path) {
      return Path.resolve(this.basePath, path)
    }
  },
}
</script>

<style lang='less' scoped>
</style>