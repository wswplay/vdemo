<template>
  <div class="echart-demo">
    <div class="demo-item">
      <div id="canvas-relation" class="item-echarts"></div>
    </div>
    <div class="demo-item">
      <div id="gl-relation" class="item-echarts"></div>
    </div>
  </div>
</template>

<script>
import * as Echarts from 'echarts';
import 'echarts-gl';
import { mockNodes, mockLinks } from "@/mock/bigdata.js"
const relationData = require("@/mock/relation.json");
relationData.nodes = [ ...mockNodes ];

export default {
  name: "EchartsDemo",
  data() {
    return {
      labelObj: {
        relationText: "关系图",
      },
    }
  },
  mounted() {
    this.initEcharts();
    this.initGlRelationEcharts();
    this.onEvent();
  },
  methods: {
    // 监听一些事件
    onEvent() {
      if(this.relationEchart && this.glRelEchart) {
        window.onresize = () => {
          this.relationEchart.resize();
          this.glRelEchart.resize();
        };
        this.relationEchart.on("click", (params) => {
          console.log(params)
        });
        this.glRelEchart.on("click", (params) => {
          console.log('gl', params)
        });
      }
    },
    initEcharts() {
      if(this.relationEchart) this.relationEchart.dispose();
      this.relationEchart = Echarts.init(document.getElementById('canvas-relation'));
      // this.relationEchart.showLoading();
      // this.relationEchart.hideLoading();
      const graph = relationData;
      graph.nodes.forEach(function (node) {
        node.label = {
          show: node.symbolSize > 30
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
    },
    // 初始化GL图表
    initGlRelationEcharts() {
      const colorList = [
        'rgb(203,239,15)',
        'rgb(73,15,239)',
        'rgb(15,217,239)',
        'rgb(30,15,239)',
        'rgb(15,174,239)',
        'rgb(116,239,15)',
        'rgb(239,15,58)',
        'rgb(15,239,174)',
        'rgb(239,102,15)',
        'rgb(239,15,15)',
        'rgb(15,44,239)',
        'rgb(239,145,15)',
        'rgb(30,239,15)',
        'rgb(239,188,15)',
        'rgb(159,239,15)',
        'rgb(159,15,239)',
      ];
      if(this.glRelEchart) this.glRelEchart.dispose();
      this.glRelEchart = Echarts.init(document.getElementById('gl-relation'));
      const nodes = mockNodes.map(item => (
        { name: item.name, value: parseInt(Math.random()*100) }
      ))
      this.glRelEchart.setOption({
        // backgroundColor: '#000',
        // color: colorList,
        series: [
          {
            type: 'graphGL',
            nodes: nodes,
            edges: mockLinks,
            modularity: {
              resolution: 2,
              sort: true
            },
            lineStyle: {
              color: 'rgba(255,0,0,1)',
              with: 20,
              opacity: 0.5
            },
            itemStyle: {
              opacity: 1,
              color: () => colorList[parseInt(Math.random()*10)],
            },
            symbolSize: () => parseInt(Math.random() * 100),
          }
        ]
      });
    }
  }
}
</script>

<style lang="less" scoped>
.echart-demo {
  padding: 0 30px;
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