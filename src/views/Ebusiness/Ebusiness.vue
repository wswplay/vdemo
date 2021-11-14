<template>
  <div class="Ebusiness">
    <!--商品列表组件-->
    <ShopList @cartAdd="cartAdd"></ShopList>
    <!--购物车-->
    <ShopCart></ShopCart>
     <!--动画的小球-->
    <Ball ref="ball"></Ball>
    <!--购物车列表-->
    <CartList v-if="showCartList"></CartList>
  </div>
</template>

<script>
import ShopList from './components/shop-list.vue';
import Ball from './components/ball.vue';
import CartList from './components/cart-list.vue';
import ShopCart from './components/shop-cart.vue';
import { mapState } from 'vuex';

export default {
  name: "Ebusiness",
  components: {
    ShopList,
    Ball,
    CartList,
    ShopCart,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState('shop', [
      'showCartList',
    ]),
  },
  methods: {
    cartAdd (event) {
      this.$refs.ball.drop(event.target);
    },
  }
}
</script>

<style lang="less" scoped>
.Ebusiness {
  position: relative;
  height: 100%;
}
</style>