const state = {
  cartInfo: {
    totalNum: 0,
    cartShowPrice: 0,
  },
  cartData: {},
  showCartList: false,
};

const mutations = {
  // 设置购物车是否展开
  setCartListStatus(state, status) {
    state.showCartList = status;
  },
  // 增减商品
  selectGoods(state, data) {
    if(data) {
      const { goods, flag } = data;
      const idStr = `${goods.grade}_${goods.id}`;
      const { cartData } = state;
      let tempObj = cartData[idStr];
      if(flag) {
        if(tempObj) {
          tempObj.num++;
        } else {
          tempObj = {
            ...goods,
            num: 1,
            price: parseFloat(goods.salePrice),
          }
          // 这里至关重要！！！添加新key，需要实现响应式，否则主列表界面无法更新
          // Vue文档地址 https://vuex.vuejs.org/zh/guide/mutations.html#mutation-%E9%9C%80%E9%81%B5%E5%AE%88-vue-%E7%9A%84%E5%93%8D%E5%BA%94%E8%A7%84%E5%88%99
          state.cartData = { ...cartData, [idStr]: tempObj };
        }
      } else {
        if(tempObj.num >= 1) tempObj.num--;
        if(!tempObj.num) delete cartData[idStr];
      }
    } else {
      state.cartData = {};
    }
  },
  // 计算购物车总金额
  calcCartInfo(state) {
    let tempNum = 0, tempPrice = 0;
    for(let key in state.cartData) {
      let tempItem = state.cartData[key];
      tempNum += tempItem.num;
      tempPrice += tempItem.num * tempItem.price;
    }
    state.cartInfo.totalNum = tempNum;
    state.cartInfo.cartShowPrice = tempPrice.toFixed(2);
  }
};

const actions = {
  // 清空购物车
  clearCart({ commit }) {
    commit('selectGoods');
    commit('calcCartInfo');
    commit('setCartListStatus', false);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
}