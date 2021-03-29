<template>
  <div class='xcollapse'>
    <template v-if="!info.children">
      <div class="title_wrapper" @click="GetItemInfo(info)">
        <router-link :to="info.path">{{info.name}}</router-link>
      </div>
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
      spread: false,
    }
  },
  computed: {
    iconText() {
      return this.info.children && this.info.children.length ? '>' : ''
    }
  },
  methods: {
    ToggleContent(info) {
      // console.log('info===', info)
      if(this.info.children && this.info.children.length) this.spread = !this.spread
    },
    GetItemInfo(item) {
      // console.log('item===', item.name)
    }
  }
}
</script>

<style lang='less' scoped>
.xcollapse {
  a {
    text-decoration: none;
    color: #333;
  }
  .title_wrapper {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    // border-left: 1px solid #aaa;
    border-bottom: 1px solid #aaa;
    transition: all 0.6s;
    &:hover {
      background-color: #eff;
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
    padding-left: 10px;
    // a, .title {
    //   padding-left: 10px;
    // }
    &.close {
      height: 0;
    }
  }
}
</style>