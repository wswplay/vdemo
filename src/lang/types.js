const typeList = [
  'cn', // 中文
  'en', // 英文
];
let langTypes = {};
typeList.forEach(item => langTypes[item] = item);

export default langTypes;