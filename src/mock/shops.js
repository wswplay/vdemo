export const goodsList = [
  {
    gradeName: "特层",
    grade: "G0",
    goods: [
      { id: "maotai", stock: "1", name: "茅台", salePrice: "999", },
    ],
  },
  {
    gradeName: "第一层",
    grade: "G1",
    goods: [
      { id: "g2", stock: "5", name: "关于文学", salePrice: "6.20", },
      { id: "g3", stock: "5", name: "关于爱情", salePrice: "6.20", },
      { id: "g4", stock: "5", name: "关于穿越世界的旅行", salePrice: "6.20", },
      { id: "g5", stock: "5", name: "春天在桃树上做的事", salePrice: "6.20", },
      { id: "g6", stock: "5", name: "天下有才，于斯为盛", salePrice: "6.20", },
      { id: "g1", stock: "5", name: "斯巴鲁", salePrice: "6.20", },
    ],
  },
  {
    gradeName: "第二层",
    grade: "G2",
    goods: [
      { id: "g1", stock: "5", name: "斯巴鲁", salePrice: "6.20", },
      { id: "g2", stock: "5", name: "雷克萨斯", salePrice: "6.20", },
      { id: "g3", stock: "5", name: "雷克萨斯", salePrice: "6.20", },
      { id: "g4", stock: "5", name: "雷克萨斯", salePrice: "6.20", },
      { id: "g5", stock: "5", name: "雷克萨斯", salePrice: "6.20", },
      { id: "g6", stock: "5", name: "雷克萨斯", salePrice: "6.20", },
    ],
  },
  {
    gradeName: "第三层",
    grade: "G3",
    goods: [
      { id: "g1", stock: "5", name: "路虎", salePrice: "6.20", },
      { id: "g2", stock: "5", name: "猎豹", salePrice: "8.20", },
      { id: "g3", stock: "5", name: "发现者", salePrice: "16.20", },
    ],
  },
];

goodsList.forEach(item => {
  let tempGoods = item.goods;
  tempGoods.forEach(sitem => sitem.grade = item.grade );
})