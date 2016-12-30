写了一个简单的每秒改变一次数组的数据
// 单机每秒加一
  startClick() {
    var i = 0;
    let setint = setInterval(()=> {
      i++;
      if(i <= 10) {
        this.doughnutChartData = [10 - i, i];
      }
      else {
        clearInterval(setint);
      }
    }, 1000);
  }
  
 问题困扰，因为ionic2使用的是ES6, 以为可以兼容这样的写法 setTimeout(function() {}, 1000);
 这样写，程序不会报错，但是没有效果，数据没有改变，搞了好久，改成setTimeout(()=>{}, 1000);这样就好了
