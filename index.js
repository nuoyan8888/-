const search = document.querySelector('.btnSearch');
search.addEventListener('click', function () {
  console.log(document.querySelector('.text-jg').value);
  console.log(document.querySelector('.text-czr').value);
});

const reset = document.querySelector('.btnReset');
reset.addEventListener('click', function () {
  document.querySelector('.text-jg').value = null;
  document.querySelector('.text-czr').value = null;
});

let num = document.querySelectorAll('.pagination button');
num.forEach((item) => {
  item.addEventListener('click', function (e) {
    console.log(item.innerHTML);
  });
});