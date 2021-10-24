<template>
  <div>
    <div class="cart-list">
      <div class="cart-list-containor">
        <div class="cart-clear-all" >
          <span class="selected-goods">已选商品</span>
          <i @click="clearCartData" class="clear-cart iconfont ic-ic_delete"></i>
          <div class="clrar-goods-all">
            <span @click="clearCartData">清空</span>
          </div>
        </div>

        <div class="cart-list-wrapper" v-for="(cartItem, idx) in cartData" :key="idx">
          <div class="cart-list-item">
            <!--<div class="goods-track">{{cartItem.goods.deviceChannel.name}}</div>-->
            <div class="goods-info" :class="{'active' : cartItem.goods.interestDiscountPrice}">
              <div class="goods-name">
                {{cartItem.goods.name}}
              </div>
              <div class="layer-list-item-promotion-text-wrapper" v-if="cartItem.goods.isInterestGoods">
                <span class="card">畅饮卡免费喝</span>
                <!--<span class="sale">超值特惠</span>-->
              </div>
            </div>
            <div class="goods-price-num">
              <div class="vip" v-if="cartItem.goods.interestDiscountPrice">
                <div class="vip-price-box">
                  <div class="vip-icon">
                    <img src="@/assets/images/Group12@2x.png"/>
                  </div>
                  <span>¥{{cartItem.goods.interestDiscountPrice}}</span>
                </div>
                <div class="goods-price">¥{{cartItem.goods.salePrice}}</div>
              </div>
              <div class="goods-price" v-else>
                ¥{{cartItem.goods.salePrice}}
              </div>
            </div>
            <div class="goods-number-input">
              数量增减区域
              <!-- <inline-number style="display:block;" :min="0" width="50px"
                button-style="round" v-model="cartItem.num"
                @onAdd="onCartAdd(cartItem.goods)"
                @onSub="onCartSub(cartItem.goods)"
              ></inline-number> -->
            </div>
          </div>
        </div>
        <div class="triangle">
          <i class="iconfont ic-ic_triangle"></i>
        </div>
      </div>
    </div>
    <!-- <select-coupon ref="selectCoupon" @onSelectCoupon="onSelectCoupon"></select-coupon> -->
    <!-- <cart-pay ref="CartPay"></cart-pay> -->
  </div>
</template>

<script>
  // import selectCoupon from '../../coupon/components/select-coupon.vue';
  // import {inlineNumber} from '../../../components';
  // import CartPay from '../components/cart-pay.vue';

  export default {
    name: 'cart',
    data () {
      return {
        showMe: false,
        couponId: null,
        checkedPayChannel: {},
        cartData: [
          {
            goods: {
              interestDiscountPrice: 2.0,
              name: "斯巴鲁",
              isInterestGoods: true,
              salePrice: 6.26,
              num: 8,
            }
          }
        ],
        cartInfo: {
          totalNum: 10
        },
        maxBuyNumber: 24,
      };
    },
    methods: {
      isShow () {
        return this.showMe;
      },
      show () {
        this.showMe = true;
        this.$emit('onShow');
      },
      hide () {
        this.showMe = false;
        this.$emit('onHide');
      },
      onSelectCoupon (coupon) {
        this.initSelectCoupon(coupon);
        if (coupon) {
          this.couponId = coupon.code;
        } else {
          this.couponId = null;
        }
      },
      goToSelectCoupon () {
        this.$refs.selectCoupon.show(this.couponId, this.cartInfo.purePrice);
      },
      goSelectPayType () {
        this.$refs.CartPay.show();
      },
      onCartAdd (goods) {
        // if (this.cartInfo.totalNum >= this.maxBuyNumber) {
          // this.$vux.toast.show({text: '购物车太小啦，只能放下' + this.maxBuyNumber + '件商品'});
          // return false;
        // }
        // const cartItem = this.cartData[goods.id + '_' + goods.grade];
        // if (cartItem && cartItem.num >= goods.stock) {
        //   this.$vux.toast.show({text: '该商品数量不够了，再看看其他商品吧'});
        //   return false;
        // }
        // this.cartAdd(goods);
        return true;
      },
      onCartSub (goods) {
        this.cartSub(goods);
        if (this.cartInfo.totalNum === 0) {
          this.hide();
        }
      },
      clearCartData () {
        this.clearCart();
        this.hide();
      }
    },
    mounted () {
    }
  };
</script>

<style lang="less" scoped>
  .cart-pop{
    pointer-events: none;
  }
  .cart-list{
    padding: 0 15px;
    box-sizing: border-box;
    // margin-bottom: 130px;
    position: absolute;
    left: 0;
    bottom: 50px;
    width: 100%;
    z-index: 100;
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
    .clear-cart{
      font-size: 18px;
    }
    .clrar-goods-all{
      span {
        color: #999;
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
    padding: 20px 0px;

    .goods-info{
      flex: 1;
      .goods-name{
        font-size: 16px;
        color: #333333;
        letter-spacing: 0;
        line-height: 16px;
        max-width: 160px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
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
    .goods-number-input{
      width: 85px;
      display: flex;
      flex: 0 0 85px;
      justify-content: space-between;
      align-items: center;
      height: 24px;
      .layer-list-item-amount{
        color: #333;
        font-size: 16px;
      }
      .sub-btn, .add-btn{
        i{
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
