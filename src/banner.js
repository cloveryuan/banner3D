let imgs = document.getElementsByClassName("image");
let len = imgs.length;
let current = 0;

let timer;

const frount = ()=> {
  let mlen = Math.floor(len / 2);
  let limg, rimg;
  for (let i = 0; i < mlen; i++) {
    limg = len + current - i - 1;
    rimg = current + i + 1;

    if (limg >= len) {
      limg -= len;
    }
    if (rimg >= len) {
      rimg -= len;
    }

    imgs[limg].style.transform =
      `translateX(` +
      -180 * (i + 1) +
      `px) translateZ(` +
      (200 - i * 100) +
      `px) rotateY(30deg)`;
    imgs[rimg].style.transform =
      `translateX(` +
      180 * (i + 1) +
      `px) translateZ(` +
      (200 - i * 100) +
      `px) rotateY(-30deg)`;
  }
  imgs[current].style.transform = `translateZ(300px)`;
}

const bind = ()=> {
  for (let i = 0; i < len; i++) {
    (function (i) {
      imgs[i].onclick = function () {
        current = i;
        frount();
      };
    })(i);
    imgs[i].onmouseenter = function () {
      clearInterval(timer);
    };
    imgs[i].onmouseout = function () {
      autoplay();
    };
  }
}

const autoplay = ()=> {
  timer = setInterval(function () {
    if (current >= len - 1) {
      current = 0;
    } else {
      current++;
    }
    frount();
  }, 2000);
}
const wrapper = ()=> {
  if(imgs.length<=0)return;
  frount();
  bind();
  autoplay();
}
// wrapper();

 export default wrapper
