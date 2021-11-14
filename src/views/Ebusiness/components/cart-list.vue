<template>
  <div class="cart-list" @click.self="setCartListStatus(false)">
    <div class="cart-list-containor">
      <div class="cart-clear-all" >
        <span class="selected-goods">已选商品</span>
        <div class="clear-btn-wrapper" @click="doClearCart">
          <i class="clear-cart iconfont ic-ic_delete"></i>
          <span>清空</span>
        </div>
      </div>
      <div class="cart-list-wrapper">
        <div class="cart-list-item" v-for="(cartItem, idx) in cartData" :key="idx">
          <div class="goods-info">
            <img v-if="cartItem.pic" :src="cartItem.pic" class="goods-image">
            <img v-else src="@/assets/images/no_goods_pic.png" class="goods-image">
            <div class="goods-name">{{cartItem.name}}</div>
          </div>
          <div class="goods-price-num">
            <div class="goods-price">¥{{cartItem.price}}</div>
          </div>
            <div class="control-btn-wrapper">
              <div class="sub-btn" @click="cartListAction(cartItem, false)">
                <i class="iconfont ic-ic_subtracting"></i>
              </div>
              <div class="goods-num">{{cartItem.num}}</div>
              <div class="add-btn" @click="cartListAction(cartItem, true)">
                <i class="iconfont ic-ic_add"></i>
              </div>
            </div>
        </div>
      </div>
      <div class="triangle">
        <i class="iconfont ic-ic_triangle"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

  export default {
    name: 'cart',
    data () {
      return {};
    },
    computed: {
      ...mapState('shop', [
        'cartData',
      ])
    },
    mounted() {},
    methods: {
      ...mapMutations('shop', [
        'selectGoods',
        'calcCartInfo',
        'setCartListStatus',
      ]),
      ...mapActions('shop', [
        'clearCart',
      ]),
      // 清空购物车
      doClearCart () {
        this.clearCart();
      },
      // 操作购物车
      cartListAction(goods, flag) {
        this.selectGoods({ goods, flag });
        this.calcCartInfo();
      },
    },
  };
</script>

<style lang="less" scoped>
  .cart-list{
    padding: 0 15px;
    box-sizing: border-box;
    // margin-bottom: 130px;
    position: absolute;
    left: 0;
    bottom: 50px;
    width: 100%;
    z-index: 100;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: flex-end;
    padding-bottom: 60px;
  }
  .triangle{
    position: absolute;
    left: 15px;
    bottom: -16px;
    transform:rotate(90deg);
    i{
      font-size: 18px;
      color: #fff;
    }
  }
  .cart-list-containor {
    pointer-events: auto;
    background-color: #fff;
    border-radius: 15px 15px 15px 15px;
    font-family: PingFangSC-Regular;

    box-sizing: border-box;
    position: relative;
    width: 100%;
  }

  .cart-clear-all {
    height: 46px;
    line-height: 46px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 15px 15px 0 0;
    border-bottom: 1px solid #eee;
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    align-items:center;
    color: #666;
    font-size: 14px;
    background: #f9f9f9;
    .selected-goods{
      flex: 1;
    }
    .clear-btn-wrapper {
      display: flex;
      align-items: center;
      cursor: pointer;
      color: #999;
      &:hover {
        color: red;
      }
      .clear-cart{
        font-size: 18px;
      }
      span {
        letter-spacing: 0.78px;
        margin-left: 5px;
      }
    }
  }

  .cart-coupon{
    display: flex;
    font-size: 14px;
    line-height: 14px;
    border-top: 1px solid #eee;
    padding: 20px 20px;
    align-items: center;
    .go_select_paytype{
      width: 20px;
      height: 20px;
    }

    .left{
      color: #333333;
      letter-spacing: 0.89px;
      flex: 1;
      font-size: 16px;
    }

    .right{
      /*flex: 1;*/
      color: #6e6e6e;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      span{
        color: #FFA43E;
      }
    }
  }
  .cart-list-wrapper{
    padding: 0 15px;
    box-sizing: border-box;
  }
  .cart-list-item{
    display: flex;
    align-items: center;
    padding: 5px 0px;
    .goods-info {
      flex: 1;
      display: flex;
      align-items: center;
      .goods-image {
        width: 40px;
        height: 40px;
      }
      .goods-name {
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        line-height: 16px;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 10px;
      }
    }
    /*.active {*/
       /*max-width: 140px;*/
     /*}*/
    @media screen and (min-width: 377px) and (max-width: 700px) {
      .active {
        max-width: 177px;
      }
    }
    @media screen and (min-width: 322px) and (max-width: 376px) {
      .active {
        max-width: 140px;
      }
    }
    @media screen and (min-width: 319px) and (max-width: 321px) {
      .active {
        max-width: 90px;
      }
    }
    .layer-list-item-promotion-text-wrapper {
      margin-top: 6px;
      .card{
        font-size: 12px;
        height:12px;
        line-height: 12px;
        border-radius:4px;
        text-align: center;
        border: 1px solid #FFBC71;
        color: #FF8334;
        padding: 0 3px;
      }
      .sale{
        width: 60px;
        height: 15px;
        line-height: 15px;
        border-radius:4px;
        text-align: center;
        border:1px solid #FFBC71;
        color: #FFBC71;
        display: inline-block;
      }
    }

    .goods-price-num{
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      color: #624E22;
      .goods-price{
        flex: 1;
        font-size: 14px;
        letter-spacing: 0;
        line-height: 16px;
        color: #0F0F0F;
      }
      .vip{
        display: flex;
        flex-direction: column;
        .goods-price{
          width: 100%;
          text-align: right;
          font-size: 12px;
          color: #0F0F0F;
        }
        .vip-price-box{
          display: flex;
          margin-top: 4px;
          span{
            font-size: 16px;
            line-height: 14px;
          }
          .vip-icon{
            img{
              width: 43px;
              height: 14px;
            }
          }
        }
      }
    }
    .control-btn-wrapper {
      width: 85px;
      display: flex;
      flex: 0 0 85px;
      justify-content: space-between;
      align-items: center;
      height: 24px;
      .goods-num {
        color: #333;
        font-size: 16px;
      }
      .sub-btn,
      .add-btn {
        i {
          font-size: 30px;
          color: #FE983F;
        }
      }
    }
  }
  .cart_pay_type{
    background: #fff;
    border-top: 1px solid #eee;
    font-size: 14px;
    line-height: 14px;
    border-top: 1px solid #eee;
    padding: 20px 20px;
    display: flex;
    align-items: center;
    .left{
      color: #333;
      letter-spacing: 0.89px;
      flex: 1;
      font-size: 16px;
    }
    .right{
      color: #6e6e6e;
      letter-spacing: 0.5px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      .pay_img{
        width: 22px;
        height: 22px;
        margin-right: 6px;
      }
      .cart_flex{
        .pay_box{
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .new_user{
          font-size:12px;
          color: #FE491E;
          border-radius:10px;
          border:1px solid #FE491E;
          padding: 0px 4px;
          margin-top: 6px;
        }
      }
      .go_select_paytype {
        width: 20px;
        height: 20px;
      }
    }
  }
</style>
