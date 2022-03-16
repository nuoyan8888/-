let state = {
  org: '',
  operator: '',
};
//数据生成
const arr = [];
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
//数据生成条数
testFn(15);

//数据初始化
function main() {
  let newarr = arr.slice(0, 10);
  readerData(newarr);
}

//数据录入
function readerData(data) {
  const tbody = document.querySelector('tbody');
  let table = '';
  for (i = 0; i < data.length; i++) {
    table = table + '<tr><td>' + data[i].id + '</td>';
    table = table + '<td>' + data[i].code + '</td>';
    table = table + '<td>' + data[i].org + '</td>';
    table = table + '<td>' + data[i].operator + '</td>';
    table = table + '<td>' + data[i].operateTime + '</td></tr>';
  }
  tbody.innerHTML = table;
}

//搜索事件
const search = document.querySelector('.btnSearch');
search.addEventListener('click', handleSearch);

function handleSearch() {
  const orgInput = document.querySelector('.text-jg');
  const operatorInput = document.querySelector('.text-czr');
  state.org = orgInput.value;
  state.operator = operatorInput.value;
  let newarr = arr.filter((item) => {
    return (
      item.org.indexOf(orgInput.value) > -1 &&
      item.operator.indexOf(operatorInput.value) > -1
    );
  });
  readerData(newarr);
}

// 分页
let num = document.querySelectorAll('.pagination button');
num.forEach((item) => {
  item.addEventListener('click', function (e) {
    if (e.target.innerHTML * 10 < arr.length) {
      let newarr = arr.slice(
        (e.target.innerHTML - 1) * 10,
        e.target.innerHTML * 10
      );
      readerData(newarr);
    } else {
      let newarr = arr.slice((e.target.innerHTML - 1) * 10, arr.length);
      readerData(newarr);
    }
  });
});

main();
