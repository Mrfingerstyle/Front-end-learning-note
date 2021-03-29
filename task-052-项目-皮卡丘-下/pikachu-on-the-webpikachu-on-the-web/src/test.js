// console.log('test page');

// 模块化
import string from './css'

// 对象的初始化方法

const player = {
    n: 1,
    time: 10,
    id: undefined,
    ui: {
        demo: document.querySelector('#demo'),
        demo_2: document.querySelector('#demo_2')
    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: ()=> {
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo_2.innerHTML = string.substring(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: ()=>{
        // console.log('bind');
        for (let key in player.events) {
            if(player.events.hasOwnProperty(key)) {
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: ()=>{
        player.n += 1
        if (player.n > string.length){
            window.clearInterval(player.id)
            return
        }
        // console.log(n + '' + string.substring(0, n))
        player.ui.demo.innerText = string.substring(0, player.n)
        player.ui.demo_2.innerHTML = string.substring(0, player.n)
        // 把代码显示区域 不断下拉 每次都能看到最新的代码
        // demo.scrollTop = 5062.5
        player.ui.demo.scrollTop = demo.scrollHeight
    },
    play: ()=> {
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        // console.log('pause');
        window.clearInterval(player.id)
    },
    slow: ()=>{
        player.pause()
        player.time = 300
        player.play()
    },
    normal: ()=>{
        player.pause()
        player.time = 100
        player.play()
    },
    fast: ()=>{
        player.pause()
        player.time = 1
        player.play()
    }
}

player.init()



/*
重复率高的代码即为丑的代码
不断封装代码
*/

