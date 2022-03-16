// const search = document.querySelector('.btnSearch');
// search.addEventListener('click', function () {
//   console.log(document.querySelector('.text-jg').value);
//   console.log(document.querySelector('.text-czr').value);
// });

// const reset = document.querySelector('.btnReset');
// function resets(){
//   document.querySelector('.text-jg').value = null;
//   document.querySelector('.text-czr').value = null;
// }
// reset.addEventListener('click', resets);

// let num = document.querySelectorAll('.pagination button');
// num.forEach((item) => {
//   item.addEventListener('click', function (e) {
//     console.log(e.target.innerHTML);
//   });
// });

//添加数据
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
testFn(15);

const tbody = document.querySelector('tbody');
let table = '';
// for (i = 0; i < arr.length; i++) {
//   table = table + '<tr><td>' + arr[i].id + '</td>';
//   table = table + '<td>' + arr[i].code + '</td>';
//   table = table + '<td>' + arr[i].org + '</td>';
//   table = table + '<td>' + arr[i].operator + '</td>';
//   table = table + '<td>' + arr[i].operateTime + '</td></tr>';
// }
// tbody.innerHTML = table;

// 分页
let num = document.querySelectorAll('.pagination button');
num.forEach((item) => {
  item.addEventListener('click', function (e) {
    console.log(e.target.innerHTML);
    if (e.target.innerHTML == 1) {
      let table = '';
      for (i = 0; i < 10; i++) {
        table = table + '<tr><td>' + arr[i].id + '</td>';
        table = table + '<td>' + arr[i].code + '</td>';
        table = table + '<td>' + arr[i].org + '</td>';l
        table = table + '<td>' + arr[i].operator + '</td>';
        table = table + '<td>' + arr[i].operateTime + '</td></tr>';
      }
      tbody.innerHTML = table;
    } else if (e.target.innerHTML == 2) {
      let table = '';
      for (i = 10; i < 15; i++) {
        table = table + '<tr><td>' + arr[i].id + '</td>';
        table = table + '<td>' + arr[i].code + '</td>';
        table = table + '<td>' + arr[i].org + '</td>';
        table = table + '<td>' + arr[i].operator + '</td>';
        table = table + '<td>' + arr[i].operateTime + '</td></tr>';
      }
      tbody.innerHTML = table;
    }
  });
});
