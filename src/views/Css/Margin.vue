<template>
  <div class="Margin" :class="{ MarginCollapse }">
    <div
      class="page-title"
      @click="toggleCollapse"
    >{{textObj.firstEl}}<span>（{{collapseText}}）</span></div>
    <div class="content-box">
      <pre>
        <code>{{textObj.cssCode}}</code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Margin",
  data() {
    return {
      textObj: {
        pageTitle: "Margin塌陷",
        firstEl: "第1元素",
        cssCode: `
          .MarginCollapse {
            &::before {
              content: "";
              display: inline-block;
            }
          }
        `,
      },
      MarginCollapse: true,
    };
  },
  computed: {
    collapseText() {
      return this.MarginCollapse ? "不塌陷" : '塌陷';
    }
  },
  methods: {
    // 安排margin是否塌陷
    toggleCollapse() {
      this.MarginCollapse = !this.MarginCollapse;
    },
  },
};
</script>

<style lang="less" scoped>
.Margin {
  width: 100%;
  background: #000;
  height: 520px;
  .page-title {
    margin-top: 50px;
    background: #efefef;
    line-height: 56px;
    cursor: pointer;
    font-weight: bolder;
    span:hover {
      color: green;
    }
  }
  .content-box {
    text-align: left;
    background: #fff;
  }
}
</style>