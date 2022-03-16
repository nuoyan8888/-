const userName = document.querySelector('.userName');
const userPass = document.querySelector('.userPass');
const user = document.querySelector('.name');
const pass = document.querySelector('.pass');

//提交事件
function notnull() {
  if (userName.value === '' && userPass.value === '') {
    //用户名输入框颜色
    userName.style.border = '1px solid red';
    //用户名为空提示
    user.innerHTML = '用户名不能为空';
    user.style.color = 'red';
    //密码输入框颜色
    userPass.style.border = '1px solid red';
    //密码为空提示
    pass.innerHTML = '密码不能为空';
    pass.style.color = 'red';
  } else if (userName.value === '') {
    //用户名输入框颜色
    userName.style.border = '1px solid red';
    //用户名为空提示
    user.innerHTML = '用户名不能为空';
    user.style.color = 'red';
  } else if (userPass.value === '') {
    //密码输入框颜色
    userPass.style.border = '1px solid red';
    //密码为空提示
    pass.innerHTML = '密码不能为空';
    pass.style.color = 'red';
  } else {
    if (userName.value === 'test' && userPass.value === '123') {
      alert('登录成功！');
    } else {
      alert('用户名或密码错误！');
    }
  }
}

//鼠标聚焦用户输入框事件
function focusName() {
  user.innerHTML = '';
  userName.style.border = '1px solid black';
}
//鼠标聚焦密码输入框事件
function focusPass() {
  pass.innerHTML = '';
  userPass.style.border = '1px solid black';
}

//点击提交
const btn = document.querySelector('.btn');
btn.addEventListener('click', notnull);

//鼠标聚焦绑定
userName.addEventListener('focus', focusName);
userPass.addEventListener('focus', focusPass);
