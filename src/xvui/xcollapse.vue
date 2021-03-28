<template>
  <div class='xcollapse'>
    <template v-if="!info.children">
      <div class="title_wrapper">
        <div class="title">{{info.name||defaultTitle}}</div>
      </div>
    </template>
    <template v-else>
      <div class="title_wrapper" @click="ToggleContent">
        <div class="title">{{info.name||defaultTitle}}</div>
        <span class="icon" :class="{textRotate: spread}">{{iconText}}</span>
      </div>
      <div class="content_wrapper" :class="{close: !spread}">
        <Xcollapse v-for="item in info.children" :key="item.path" :info="item" />
        <!-- <div v-for="item in info.children" :key="item.path" class="content_item"> -->
          <!-- {{item.name}} -->
          <!-- <template v-if="item.children">
            <Xcollapse v-for="item in item.children" :key="item.path" :info="item" />
          </template> -->
        <!-- </div> -->
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
    ToggleContent() {
      if(this.info.children && this.info.children.length) this.spread = !this.spread
    }
  }
}
</script>

<style lang='less' scoped>
.xcollapse {
  background-color: rgb(189, 207, 241);
  .title_wrapper {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    .icon {
      transition: all 0.6s;
      &.textRotate {
        transform: rotate(90deg);
      }
    }
    &:hover {
      background-color: rgb(150, 182, 241);
      color: #fff;
    }
  }
  .content_wrapper {
    text-align: left;
    transition: all 0.6s;
    overflow: hidden;
    will-change: height;
    padding-left: 10px;
    .content_item {
      padding: 8px 0;
      &:last-child {
        padding-bottom: 16px;
      }
    }
    &.close {
      height: 0;
    }
  }
}
</style>