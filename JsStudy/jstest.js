/*
const arr = [
  {
    id: 1,
    code: 'PS001',
    org: '华北配送中心',
    operator: '操作人001',
    operateTime: '2020/09/08 16:32',
  },
  {
    id: 2,
    code: 'PS002',
    org: '华北配送中心',
    operator: '操作人002',
    operateTime: '2020/09/08 16:32',
  },
  {
    id: 3,
    code: 'PS003',
    org: '华北配送中心',
    operator: '操作人003',
    operateTime: '2020/09/08 16:32',
  },
];

//1、id >= 2 的项
console.log(
  arr.filter((item, index) => {
    return item.id >= 2;
  })
);

//2、查找code=‘PS002的项
console.log(
  arr.filter((item, index) => {
    return item.code === 'PS002';
  })
);

//3、查找出operator = '操作人003'是数组arr的第几项
arr.forEach((item, index) => {
  if (item.operator === '操作人003') {
    console.log(index);
  }
});

//4、对数组arr的每一项id加1，返回一个新数组
let newArry = arr.map((item, index) => {
  item.id = item.id + 1;
  return item;
});
console.log(newArry);

//5、选取数组arr的第0项和第一项组成一个新数组newArr，并且添加一条数据
let newArr = arr.slice(0, 2);
newArr.push({
  id: 4,
  code: 'PS004',
  org: '华北配送中心',
  operator: '操作人004',
  operateTime: '2020/09/08 16:32',
});
console.log(newArr);

class Test {
  constructor(num) {
    this.num = num;
  }
  add(num) {
    this.num += num;
  }
  log() {
    console.log(this.num);
  }
}
const t = new Test(1);
t.add(2);
t.log();
*/

let arr = [];
function testFn(num) {
  for (i = 1; i <= num; i++) {
    if (i <= 2) {
      arr.push({
        id: i,
        code: 'PS' + i,
        org: '华北配送中心',
        operator: '操作人' + i,
        operateTime: '2020/09/08 16:32',
      });
    } else {
      arr.push({
        id: i,
        code: 'PS' + i,
        org: '华南配送中心',
        operator: '操作人' + i,
        operateTime: '2020/09/08 16:32',
      });
    }
  }
  console.log(arr);
}
testFn(5);

const thead = document.querySelector('thead');
thead.innerHTML = '<tr><th>序号</th>';
thead.innerHTML = thead.innerHTML + '<th>编码</th>';
thead.innerHTML = thead.innerHTML + '<th>机构</th>';
thead.innerHTML = thead.innerHTML + '<th>操作人</th>';
thead.innerHTML = thead.innerHTML + '<th>操作时间</th></tr>';
for (i = 0; i < arr.length; i++) {
  const tbody = document.querySelector('tbody');
  tbody.innerHTML = tbody.innerHTML + '<tr><td>' + arr[i].id + '</td>';
  tbody.innerHTML = tbody.innerHTML + '<td>' + arr[i].code + '</td>';
  tbody.innerHTML = tbody.innerHTML + '<td>' + arr[i].org + '</td>';
  tbody.innerHTML = tbody.innerHTML + '<td>' + arr[i].operator + '</td>';
  tbody.innerHTML =
    tbody.innerHTML + '<td>' + arr[i].operateTime + '</td></tr>';
}
