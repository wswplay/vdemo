<template>
  <div class="Ebusiness">
    <!--商品列表组件-->
    <ShopList
      @cartAdd="cartAdd"
    ></ShopList>
    <!--购物车-->
    <div class="shop-cart" :class="{active: activeShopCart}" v-if="cartInfo.totalNum">
      <div class="shop-cart-container">
        <div class="shop-cart-left" @click="toggleCartList">
          <div class="cart-logo-image">
            <div class="cart-logo" v-if="cartInfo.totalNum">
              <i class="iconfont ic-ic_baske"></i>
            </div>
            <div class="no-goods-cart-logo" v-else>
              <i class="iconfont ic-ic_baske"></i>
            </div>
          </div>
          <div v-if="cartInfo.totalNum" class="cart-acount-dot">{{cartInfo.totalNum}}</div>
        </div>
        <div v-if="cartInfo.totalNum" class="shop-cart-middle" @click="toggleCartList"><span>¥{{cartInfo.cartShowPrice}}</span></div>
        <div v-else class="shop-cart-middle" @click="toggleCartList">请选择商品</div>
        <div class="shop-cart-right"  @click="goToPay">
          <span>去结算</span>
          <i class="iconfont ic-ic_triangle"></i>
        </div>
      </div>
    </div>
     <!--动画的小球-->
    <Ball ref="ball"></Ball>
    <!--购物车列表-->
    <CartList ref="cart" v-if="cartActive"></CartList>
  </div>
</template>

<script>
import ShopList from './components/shop-list.vue';
import Ball from './components/ball.vue';
import CartList from './components/cart-list.vue';
import { mapState, mapMutations } from 'vuex';

export default {
  name: "Ebusiness",
  components: {
    ShopList,
    Ball,
    CartList,
  },
  data() {
    return {
      activeShopCart: false,
      canSubmit: true,
      cartGoodsObj: {}
    }
  },
  computed: {
    ...mapState('shop', [
      'cartInfo',
      'cartActive',
    ]),
  },
  watch: {
    'cartInfo.totalNum'(val) {
      if(!val) this.setCartStatus(false);
    }
  },
  methods: {
    ...mapMutations('shop', [
      'setCartStatus',
    ]),
    // 显示隐藏购物车列表
    toggleCartList () {
      this.setCartStatus(!this.cartActive);
    },
    // 去付款
    goToPay() {
      console.log('去付款');
    },
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
  .shop-cart {
    padding: 0 15px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 45px;
    z-index: 120;
  }
  .shop-cart-container{
    width: 100%;
    height: 45px;
    z-index: 120;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #444;
    border-radius: 45px;
    overflow: hidden;
  }
  .shop-cart.active{
    z-index: 1200;
  }
  
  .shop-cart-left {
    flex: 0 0 60px;
    position: relative;
    height: 45px;
  }
  .cart-acount-dot {
    position: absolute;
    top: 5px;
    right: 5px;
    background: #FF3434;
    /*box-sizing: border-box;*/
  
    width: 14px;
    height: 14px;
    border-radius: 50%;
  
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #FFFFFF;
    letter-spacing: 0.5px;
    text-align: center;
    line-height: 14px;
    padding: 2px;
  }
  .cart-logo-image {
    width: 40px;
    height: 40px;
    margin: 3px 0 0 4px;
    .cart-logo, .no-goods-cart-logo{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #fff;
      text-align: center;
      i{
        font-size: 28px;
        line-height: 40px;
      }
    }
    .cart-logo{
      i{
        color: #FFA43E;
      }
    }
    .no-goods-cart-logo{
      i{
        color: #8a8a8a;
      }
    }
  }
  .cart-logo-image img {
    width: 40px;
    height: 40px;
  }
  .shop-cart-middle {
    flex: 1;
    box-sizing: border-box;
    padding-left: 10px;
    font-size: 16px;
    color: #fff;
    letter-spacing: 0.5px;
    font-weight: 500;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .shop-cart-right {
    flex: 0 0 100px;
    height: 46px;
    line-height: 46px;
    background: #FE983F;
    text-align: center;
    border-radius: 0 45px 45px 0;
    margin-right: -1px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
      font-size: 16px;
      margin-right: 7px;
    }
    i{
      font-size: 10px;
    }
  }
}
</style>