<template>
  <div class="echart-demo">
    <div class="demo-item">
      <div :id="labelObj.relationId" class="item-echarts"></div>
    </div>
  </div>
</template>

<script>
import * as Echarts from 'echarts';
import { nodes } from "@/mock/bigdata.js"
const relationData = require("@/mock/relation.json");
relationData.nodes = nodes;

export default {
  name: "EchartsDemo",
  data() {
    return {
      labelObj: {
        relationText: "关系图",
        relationId: "relation-demo",
      },
    }
  },
  mounted() {
    this.initEcharts();
    this.onEvent();
  },
  methods: {
    // 监听一些事件
    onEvent() {
      if(this.relationEchart) {
        window.onresize = () => this.relationEchart.resize();
        this.relationEchart.on("click", (params) => {
          console.log(params)
        });
      }
    },
    initEcharts() {
      if(this.relationEchart) this.relationEchart.dispose();
      this.relationEchart = Echarts.init(document.getElementById(this.labelObj.relationId));
      // this.relationEchart.showLoading();
      // this.relationEchart.hideLoading();
      const graph = relationData;
      graph.nodes.forEach(function (node) {
        node.label = {
          show: node.symbolSize > 90
        };
      });
      let option = {
        title: {
          text: 'Les Miserables',
          subtext: '6666',
          top: 'bottom',
          left: 'right'
        },
        tooltip: {},
        legend: [
          {
            data: graph.categories.map(function (a) {
              return a.name;
            })
          }
        ],
        animationDuration: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
          {
            name: 'Les Miserables',
            type: 'graph',
            layout: 'none',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            roam: true,
            label: {
              position: 'right',
              formatter: '{b}'
            },
            lineStyle: {
              color: 'source',
              curveness: 0.3
            },
            emphasis: {
              focus: 'adjacency',
              lineStyle: {
                width: 10
              }
            }
          }
        ],
      };
      this.relationEchart.setOption(option);
    }
  }
}
</script>

<style lang="less" scoped>
.echart-demo {
  .demo-item {
    padding: 10px;
    border: 1px dashed #eee;
    border-radius: 5px;
    &:hover {
      border-color: rgba(2, 143, 2, 0.3);
    }
    .item-echarts {
      height: 520px;
    }
  }
}
</style>