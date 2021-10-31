<template>
  <div class="Ebusiness">
    <!--商品列表组件-->
    <SelfSupportShop
      @cartAdd="cartAdd"
      @cartSub="cartSub"
      @calcCartData="calcCartData"
    ></SelfSupportShop>
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
    <ball ref="ball"></ball>
    <cart v-if="false" ref="cart" @onShow="activeShopCart = true" @onHide="activeShopCart = false"></cart>
  </div>
</template>

<script>
import SelfSupportShop from './components/self-support-shop';
import Ball from './components/ball.vue';
import Cart from './components/cart.vue';

export default {
  name: "Ebusiness",
  components: {
    SelfSupportShop,
    Ball,
    Cart,
  },
  data() {
    return {
      activeShopCart: false,
      cartInfo: {
        totalNum: 0,
        cartShowPrice: 0,
      },
      canSubmit: true,
    }
  },
  methods: {
    // 操作购物车列表
    toggleCartList () {
      if (this.$refs.cart.isShow()) {
        this.$refs.cart.hide();
      } else {
        if (this.cartInfo.totalNum > 0) {
          this.$refs.cart.show();
        }
      }
    },
    // 去付款
    goToPay() {
      console.log('去付款');
    },
    cartAdd (event, goods) {
      // if (!this.canSubmit) {
      //   this.canSubmit = true;
      // }
      // let addSuc = this.$refs.cart.onCartAdd(goods);
      // if (addSuc) {
        this.$refs.ball.drop(event.target);
      // }
    },
    cartSub (goods) {
      if (!this.canSubmit) {
        this.canSubmit = true;
      }
      this.$refs.cart.onCartSub(goods);
    },
    // 计算购物车
    calcCartData(cartObj) {
      let tempNum = 0, tempPrice = 0;
      for(let key in cartObj) {
        let tempItem = cartObj[key];
        tempNum += tempItem.num;
        tempPrice += tempItem.num * tempItem.price;
      }
      this.cartInfo.totalNum = tempNum;
      this.cartInfo.cartShowPrice = tempPrice.toFixed(2);
    }
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