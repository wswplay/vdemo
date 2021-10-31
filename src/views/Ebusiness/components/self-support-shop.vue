<template>
  <div class="self-support-shop">
    <div class="shop-main-wrapper">
      <div class="shop-left-wrapper">
        <div v-for="(item,index) in allGoodsData" @click="goToGrade(index)" :key="item.gradeName" class="left-cate-item" :class="index === currentIndex ? 'cate-active': ''" >
          {{item.gradeName}}
          <div v-if="index === currentIndex" class="cate-item-active-flag"></div>
        </div>
      </div>
      <div class="shop-right-wrapper" :class="{'scroll-auto': goodsWrapperScrollAuto}" id="shopRightWrapper" ref="shopRightWrapper" @scroll="onGoodsWrapperScroll">
        <div :ref="'grade' + index" v-for="(gitem,index) in allGoodsData" :key="gitem.gradeName" class="layer-item-wrapper">
          <div class="layer-name">{{gitem.gradeName}}</div>
          <div class="layer-list-wrapper">
            <div v-for="item in gitem.goods" :key="item.id" class="layer-list-item" :class="(!item.id || !item.stock)?'gray-out':''">
              <div class="layer-list-item-left">
                <img v-if="item.pic" :src="item.pic" class="goods-image">
                <img v-else src="@/assets/images/no_goods_pic.png" class="goods-image">
              </div>
              <div class="layer-list-item-right">
                <template v-if="item.id">
                  <div class="layer-list-item-name">{{item.name}}</div>
                  <div class="layer-list-item-promotion-text-wrapper" v-if="item.isInterestGoods">
                    <span class="card">畅饮卡免费喝</span>
                  </div>
                  <div class="layer-list-item-control-wrapper">
                    <div class="layer-list-item-price-wrapper">
                      <div class="vip" v-if="item.interestDiscountPrice">
                        <div class="vip-price-box">
                          <span class="discount-price">¥{{item.interestDiscountPrice}}</span>
                          <div class="vip-icon">
                            <div class="vip-icon-text">会员价</div>
                          </div>
                          <div class="sanjiao"></div>
                          <div class="layer-list-item-pirce-shop">¥{{item.salePrice}}</div>
                        </div>
                      </div>
                      <div class="layer-list-item-pirce-shop" v-else>¥{{item.salePrice}}</div>
                    </div>
                    <div class="layer-list-item-control-btn-wrapper">
                      <template v-if="cartData && cartData[gitem.grade+'_'+item.id] && cartData[gitem.grade+'_'+item.id].num>=1">
                        <div class="sub-btn" @click="cartSub(item)">
                          <i class="iconfont ic-ic_subtracting"></i>
                        </div>
                        <div class="layer-list-item-amount">{{cartData[gitem.grade+'_'+item.id].num}}</div>
                        <div class="add-btn" @click="cartAdd($event, item)">
                          <i class="iconfont ic-ic_add"></i>
                        </div>
                      </template>
                      <template v-else>
                        <div v-if="item.stock == 0" class="layer-list-item-nostock">已售空</div>
                        <div v-else class="layer-list-item-beginadd-btn" @click="cartAdd($event, item)"><i class="iconfont ic-ic_add"></i></div>
                      </template>
                    </div>
                  </div>
                </template>

                <template v-else>
                  <div class="layer-list-item-nodata-img">
                    <img src="@/assets/images/ic_logo24@3x.png"/>
                  </div>
                  <div class="layer-list-item-nodata-text">暂无商品出售</div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as shopsData from "@/mock/shops.js";

export default {
  name: 'self-support-shop',
  components: {
  },
  props: {
  },
  data () {
    return {
      currentIndex: 0,
      goodsWrapperScrollAuto: false,
      allGoodsData: shopsData.goodsList,
      cartData: {},
      gradeHeights: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init () {
      this.currentIndex = 0;
      let goodsDataRes = shopsData.goodsList;
      setTimeout(() => {
        let gradeHeights = [];
        let _height = 0;
        for (let i = 0; i < goodsDataRes.length; i++) {
          _height = _height + this.$refs['grade' + i][0].offsetHeight;
          gradeHeights.push({
            grade: i + 1,
            height: _height
          });
        }
        this.gradeHeights = gradeHeights;
        this.clientHeight = document.body.offsetHeight;
        this.goodsListHeight = this.gradeHeights[this.gradeHeights.length - 1].height;
      }, 500);
    },
    goToGrade(index) {
      let el = document.getElementById('shopRightWrapper');
      this.goodsWrapperScrollAuto = true;
      if (index === 0) {
        el.scrollTop = 0;
      } else if (this.gradeHeights.length >= index + 1) {
        el.scrollTop = this.gradeHeights[index - 1].height;
      }
      setTimeout(() => {
        this.goodsWrapperScrollAuto = false;
      }, 200);
    },
    cartAdd (event, goods) {
      this.setCartData(goods, true);
      this.$emit('cartAdd', event, goods);
    },
    cartSub (goods) {
      this.setCartData(goods, false);
      // this.$emit('cartSub', goods);
    },
    setCartData(goods, isAdd) {
      const idStr = `${goods.grade}_${goods.id}`;
      let tempObj = this.cartData[idStr];
      if(isAdd) {
        if(tempObj) {
          tempObj.num++;
        } else {
          this.$set(this.cartData, idStr, { num: 1, price: parseFloat(goods.salePrice) });
        }
      } else {
        if(tempObj.num >= 1) tempObj.num--;
      }
      this.$emit('calcCartData', this.cartData);
    },
    onGoodsWrapperScroll (e) {
      let scrollHeight = e.target.scrollTop;
      if (scrollHeight + this.clientHeight >= this.goodsListHeight + 150) {
        this.$emit('scrolling', true);
        if (this.timer) clearTimeout(this.timer);
        return;
      }
      this.$emit('scrolling', true);
      if (this.timer) clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.scrollEnd = e.target.scrollTop;
        if (this.scrollEnd === this.scrollSta) {
          this.$emit('scrolling', false);
        }
      }, 200);
      this.scrollSta = scrollHeight;
      if (scrollHeight > 0) {
        this.$emit('setBannerShow', false);
      } else {
        this.$emit('setBannerShow', true);
      }

      for (let i = 0; i < this.gradeHeights.length; i++) {
        let gradeHeight = this.gradeHeights[i];
        if (scrollHeight < gradeHeight.height) {
          this.currentIndex = gradeHeight.grade - 1;
          break;
        }
      }
    },
  },
};
</script>

<style lang="less">
.self-support-shop {
  height: 100%;
  .shop-main-wrapper {
    height: 100%;
    display: flex;
    .shop-left-wrapper {
      width: 80px;
      height: 100%;
      background: #FAFAFC;
      z-index: 25;
      box-sizing: border-box;
      flex: none;
    }
    .left-cate-item {
      position: relative;
      height: 50px;
      line-height: 50px;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #909090;
      letter-spacing: 0.5px;
      text-align: center;
      &.cate-active {
        background: #fff;
        font-size: 16px;
        color: #333333;
      }
    }
    .cate-item-active-flag {
      position: absolute;
      left: 0;
      top: 17px;
      width: 6px;
      height: 16px;
      background: #FFA43E;
    }
    .shop-right-wrapper {
      position:relative;
      width: 100%;
      box-sizing: border-box;
      padding-bottom: 80px;
      -webkit-overflow-scrolling: touch;
      overflow: auto;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    .shop-right-wrapper.scroll-auto{
      -webkit-overflow-scrolling: auto !important;
    }
    .layer-name {
      background: rgba(254,239,234,0.26);
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #FFA43E;
      letter-spacing: 0.43px;
      height: 22px;
      line-height: 22px;
      text-indent: 20px;
    }
    .layer-list-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 10px 10px 0;
      background: #FFFFFF;
      border: 1px solid #F9F9F9;
      box-sizing: border-box;
    }
    .layer-list-item-left {
      /*flex: 0 0 56px;*/
      /*font-family: PingFangSC-Regular;*/
      /*font-size: 14px;*/
      /*color: #FE941E;*/
      /*letter-spacing: 0.5px;*/
      /*text-align: center;*/
      width: 90px;
      height: 90px;
      margin-right: 10px;
      overflow: hidden;
    }
    .goods-image {
      height: 100%;
    }
    .layer-list-item-right {
      flex: 1;
    }
    .layer-list-item-name {
      font-family: PingFangSC-Medium;
      font-weight: 600;
      font-size: 14px;
      color: #333333;
      letter-spacing: 0.5px;
      line-height: 14px;
      max-width: 150px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      text-align: left;
    }
    .layer-list-item-promotion-text-wrapper {
      font-size: 12px;
      color: #FF8334;
      padding-top: 5px;
      height: 14px;
      line-height: 14px;
      span {
        padding: 0 4px;
        border: 1px solid #FFBC71;
        border-radius:3px;
      }
    }
    .layer-list-item-control-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: 25px;
    }
    .layer-list-item-pirce-shop {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0.5px;
      display: inline-block;
      font-weight: 700;
    }
    .vip{
      display: flex;
      flex-direction: column;
      margin-top: 10px;
      position: relative;
      .layer-list-item-pirce-shop{
        font-size: 12px;
        font-weight: 700;
      }
      .vip-price-box{
        display: flex;
        span{
          font-size: 18px;
          line-height: 18px;
          margin-right: 6px;
          font-weight: 500;
          color: #FE491E;
        }
        .vip-icon{
          position: absolute;
          left: 0;
          top: -17px;
          z-index: 10;
          width: 43px;
          height: 14px;
          background: linear-gradient(to left,#D2B667, #FFEFAE);
          border-radius: 2px;
          text-align: center;
          .vip-icon-text {
            font-size: 12px;
            color: #624E22;
            height: 14px;
            line-height: 14px;
            text-align: center;
          }
        }
        .sanjiao {
          width: 6px;
          height: 6px;
          background: linear-gradient(to top,#D2B667, #FFEFAE);
          position: absolute;
          top: -5px;
          left: 21px;
          z-index:9;
          transform: rotate(45deg) translateX(-50%);
        }
        .discount-price {
          color: #624e22;
          font-weight: 700;
          font-size: 18px;
        }
      }
    }
    .layer-list-item-pirce-market {
      font-family: PingFangSC-Regular;
      font-size: 10px;
      color: #999999;
      letter-spacing: 0.42px;
      text-align: center;
      line-height: 10px;
      text-decoration: line-through;
      display: inline-block;
    }
    .layer-list-item-beginadd-btn {
      .ic-ic_add {
        font-size: 30px;
        color: #FFA43E;
      }
    }
    .layer-list-item-control-btn-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 24px;
      .sub-btn, .add-btn{
        i{
          font-size: 30px;
          color: #FFA43E;
        }
      }
    }
    .layer-list-item-control-btn-wrapper img {
      width: 24px;
      height: 24px;
    }
    .layer-list-item-amount {
      width: 12px;
      text-align: center;
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #333333;
      letter-spacing: 0.57px;
      line-height: 16px;
      padding: 0 8px;
    }
    .layer-list-item-nostock {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #999999;
      letter-spacing: 0.5px;
      text-align: center;
      line-height: 14px;
    }
    .layer-list-item-nodata-img {
      width: 71px;
      height: 28px;
    }
    .layer-list-item-nodata-img img {
      width: 71px;
      height: 28px;
      opacity: 0.3;
    }
    .layer-list-item-nodata-text {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #999999;
      letter-spacing: 0.5px;
      line-height: 14px;
      margin-top: 18px;
    }
  }
}
</style>
