const string = `
.skin * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
.skin *::after,
.skin *::before {
    box-sizing: border-box;
  }

.skin {
    min-height: 50vh;
    background: #ffe600;
    position: relative;
  }
  /* 眼睛和鼻子 */
  .nose {
    position: absolute;
    width: 0px;
    height: 0px;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    border: 10px solid;
    border-color: #040001 transparent #040001 transparent;
    border-bottom: none;
    z-index: 10;
  }
  .nose:hover {
    transform-origin: 50% 100%;
    animation: wave 200ms infinite linear;
  }
  @keyframes wave {
    0% {
      transform: rotate(0);
    }
    33% {
      transform: rotate(-15deg);
    }
    66% {
      transform: rotate(15deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .circular {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: #040001;
  }
  .eye {
    position: absolute;
    width: 64px;
    height: 64px;
    /* border: 1px solid #000; */
    background: #363334;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    border-radius: 100%;
  }
  .eye.left {
    transform: translateX(-100px);
  }
  
  .eye.right {
    transform: translateX(100px);
  }
  .eye::after {
    position: relative;
    content: "";
    /* 默认显示类型span */
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    /* border: 1px solid red; */
    background: #ffffff;
    left: 8px;
    top: 4px;
    border-radius: 50%;
  }
  /* 嘴巴 */
  .mouth {
    position: absolute;
    width: 200px;
    height: 200px;
    /* border: 1px solid red; */
    top: 170px;
    left: 50%;
    margin-left: -100px;
  }
  /* 上嘴唇 */
  .mouth .up {
    position: relative;
    top: -20px;
    z-index: 1;
  }
  
  .mouth .up .lips {
    border: 5px solid #000;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
  }
  
  .mouth .up .lips.left {
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-46px);
  }
  
  .mouth .up .lips.right {
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(50px);
    top: 1px;
  }
  .mouth .up .lips.left::before {
    position: absolute;
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    right: -5px;
    bottom: -8px;
    background: #ffe600;
  }
  
  .mouth .up .lips.right::before {
    position: absolute;
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    left: -5px;
    bottom: 0px;
    background: #ffe600;
  }
  .mouth .up .hide-1 {
    position: absolute;
    width: 87px;
    height: 10px;
    /* border: 1px solid #000; */
    background: #000;
    transform: rotate(-20deg);
    top: 10px;
    left: 9px;
    background: #ffe600;
  }
  .mouth .up .hide-2 {
    position: absolute;
    width: 25px;
    height: 5px;
    /* border: 1px solid #000; */
    background: #000;
    left: 87px;
    top: 11px;
    transform: rotate(-75deg);
    background: #ffe600;
  }
  /* 下嘴唇 */
  .mouth .down {
    position: absolute;
    /* border: 1px solid red; */
    width: 100%;
    height: 180px;
    top: 5px;
    overflow: hidden;
  }
  .mouth .down .circular-1 {
    border: 3px solid #000;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px / 300px;
    background: #b20f05;
    overflow: hidden;
  }
  .mouth .down .circular-1 .circular-2 {
    position: absolute;
    /* border: 1px solid #000; */
    width: 200px;
    height: 300px;
    background: #ff6569;
    bottom: -156px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
  }
  
  /* 脸颊 */
  .face {
    border: 1px solid #000;
    position: absolute;
    width: 88px;
    height: 88px;
    border: 4px solid #000;
    left: 50%;
    top: 200px;
    /* margin-left: -44px; */
    z-index: 3;
    border-radius: 50%;
  }
  .face.left {
    transform: translateX(-200px);
    background: #ff1a01;
  }
  .face.right {
    transform: translateX(112px);
    background: #ff1a01;
  }
  /* 设置闪电 */
  .face > img {
    /* border: 1px solid #000; */
    position: absolute;
    left: 50%;
    top: 50%;
    /* display: none; */
  }
  
  .face.left > img {
    transform: rotate(180deg);
    transform-origin: 0 0;
  }
`
// 导出
export default string;