import banner from './banner.js'
require('../assets/index.css');
Date.prototype.format = function (fmt) {
    let o = {
      "y+": this.getFullYear, //年
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
    };
    if (/(y+)/.test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    for (let k in o)
      if (new RegExp("(" + k + ")").test(fmt))
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
        );
    return fmt;
  };
  setInterval(()=>{
    let _t = (new Date()).format('yyyy-MM-dd hh:mm');
    document.getElementById('date').innerHTML = _t.split(' ')[0]
    document.getElementById('time').innerHTML = _t.split(' ')[1]
  },1000);

  banner()