<template>
  <div class="ball-container">
    <div v-for="(ball,idx) in balls" :key="idx">
      <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
        <div class="ball" v-show="ball.show">
          <div class="inner inner-hook"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ball',
    components: {},
    data () {
      return {
        balls: [
          {show: false},
          {show: false},
          {show: false},
          {show: false},
          {show: false}
        ],
        dropBalls: []
      };
    },
    methods: {
      drop (el) {
        // 触发一次事件就会将所有小球进行遍历
        for (let i = 0; i < this.balls.length; i++) {
          let ball = this.balls[i];
          if (!ball.show) { // 将false的小球放到dropBalls
            ball.show = true;
            ball.el = el; // 设置小球的el属性为一个dom对象
            this.dropBalls.push(ball);
            return;
          }
        }
      },

      beforeDrop (el) { // 这个方法的执行是因为这是一个vue的监听事件
        let count = this.balls.length;
        while (count--) {
          let ball = this.balls[count];
          if (ball.show) {
            let rect = ball.el.getBoundingClientRect(); // 获取小球的相对于视口的位移(小球高度)
            let x = rect.left - 46;
            let y = -(window.innerHeight - rect.top - 32); // 负数,因为是从左上角往下的的方向
            el.style.display = ''; // 清空display
            el.style.webkitTransform = `translate3d(0,${y}px,0)`;
            el.style.transform = `translate3d(0,${y}px,0)`;
            // 处理内层动画
            let inner = el.getElementsByClassName('inner-hook')[0]; // 使用inner-hook类来单纯被js操作
            inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
            inner.style.transform = `translate3d(${x}px,0,0)`;
          }
        }
      },

      dropping (el, done) { // 这个方法的执行是因为这是一个vue的监听事件
        /* eslint-disable no-unused-vars */
        let rf = el.offsetHeight; // 触发重绘html
        this.$nextTick(() => { // 让动画效果异步执行,提高性能
          el.style.webkitTransform = 'translate3d(0,-10px,0)';
          el.style.transform = 'translate3d(0,-10px,0)';
          // 处理内层动画
          let inner = el.getElementsByClassName('inner-hook')[0]; // 使用inner-hook类来单纯被js操作
          inner.style.webkitTransform = 'translate3d(232px,0,0)';
          inner.style.transform = 'translate3d(232px,0,0)';
          el.addEventListener('transitionend', done); // Vue为了知道过渡的完成，必须设置相应的事件监听器。
        });
      },

      afterDrop (el) { // 这个方法的执行是因为这是一个vue的监听事件
        let ball = this.dropBalls.shift(); // 完成一次动画就删除一个dropBalls的小球
        if (ball) {
          ball.show = false;
          el.style.display = 'none'; // 隐藏小球
        }
      }
    },
    mounted () {
    }
  };
</script>

<style lang="less" scoped>
  .ball-container{
    .ball {
      position: fixed; //小球动画必须脱离html布局流
      left: 32px;
      bottom: 22px;
      z-index: 200;
      transition: all 1s cubic-bezier(0.49, -0.29, 0.75, 0.41);
      .inner{
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #FFA43E;
        transition: all 1s linear;
      }
    }
  }
</style>
