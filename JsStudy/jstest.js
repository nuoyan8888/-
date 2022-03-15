const arr = [
  {
    id:1,
    code:'PS001',
    org:'华北配送中心',
    operator:'操作人001',
    operateTime:'2020/09/08 16:32'
  },
  {
    id:2,
    code:'PS002',
    org:'华北配送中心',
    operator:'操作人002',
    operateTime:'2020/09/08 16:32'
  },
  {
    id:3,
    code:'PS003',
    org:'华北配送中心',
    operator:'操作人003',
    operateTime:'2020/09/08 16:32'
  }
];

console.log("1、id >= 2 的项")
console.log(arr.filter((item,index) => {
  return item.id >= 2;
}));

console.log("2、查找code=‘PS002的项’")
console.log(arr.filter((item,index) => {
  return item.code === 'PS002';
}));

console.log("3、查找出operator = '操作人003'是数组arr的第几项")
arr.forEach((item,index) => {
  if(item.operator === '操作人003'){
    console.log(index);
  }
});

console.log("4、对数组arr的每一项id加1，返回一个新数组")
let newArry = arr.map((item,index) => {
    return item.id + 1;
}); 
console.log(newArry);

console.log("5、选取数组arr的第0项和第一项组成一个新数组newArr，并且添加")
let newArr = arr.filter((item,index) => {
  return index === 0 || index === 1
}); 
newArr.push({
  id:4,
  code:'PS004',
  org:'华北配送中心',
  operator:'操作人004',
  operateTime:'2020/09/08 16:32'
})
console.log(newArr)