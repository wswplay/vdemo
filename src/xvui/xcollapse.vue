<template>
  <div class='xcollapse'>
    <template v-if="!info.children">
      <router-link :to="info.path">
        <div class="title_wrapper" @click="GetItemInfo(info)">{{info.name}}</div>
      </router-link>
    </template>
    <template v-else>
      <div class="title_wrapper" @click="ToggleContent(info)">
        <div class="title">{{info.name||defaultTitle}}</div>
        <span class="icon" :class="{textRotate: spread}">{{iconText}}</span>
      </div>
      <div class="content_wrapper" :class="{close: !spread}">
        <Xcollapse v-for="item in info.children" :key="item.path" :info="item" />
      </div>
    </template>
  </div>  
</template>

<script>

export default {
  name: 'Xcollapse',
  props: ['info'],
  data() {
    return {
      defaultTitle: '面板标题',
      spread: true,
      curPath: 'stack'
    }
  },
  computed: {
    iconText() {
      return this.info.children && this.info.children.length ? '>' : ''
    }
  },
  methods: {
    ToggleContent(info) {
      if(this.info.children && this.info.children.length) this.spread = !this.spread
    },
    GetItemInfo(path) {
      this.curPath = path
      console.log('this.curPath', this.curPath)
    },
  }
}
</script>

<style lang='less' scoped>
.xcollapse {
  a {
    text-decoration: none;
    color: #333;
    // display: block;
    // height: 100%;
    // width: 100%;
    // margin: 16px;
    &.router-link-active, &.router-link-exact-active {
      color: #42b983;
    }
  }
  .title_wrapper {
    box-sizing: border-box;
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-bottom: 1px solid rgba(235, 234, 234, 0.6);
    // transition: all 0.6s;
    &:hover {
      background-color: #eff;
    }
    &.active {
      background-color: #eff;
      // border-bottom: 1px solid rgb(219, 250, 250);
    }
    .icon {
      transition: all 0.6s;
      &.textRotate {
        transform: rotate(90deg);
      }
    }
  }
  .content_wrapper {
    text-align: left;
    transition: all 0.6s;
    overflow: hidden;
    will-change: height;
    &.close {
      height: 0;
    }
    a, .title {
      text-indent: 10px;
    }
    .content_wrapper {
      a, .title {
        text-indent: 20px;
      }
      .content_wrapper {
        a, .title {
          text-indent: 30px;
        }
        .content_wrapper {
          a, .title {
            text-indent: 40px;
          }
        }
      }
    }
  }
}
</style>