const $siteList = $('.siteList')
const $lastLi = $siteList.find('li.last')
const x = localStorage.getItem('x')
const xObject = JSON.parse(x)

const hashMap = xObject || [
    {logo: './images/acfun.jpg', logoType:'image', url: 'https://www.acfun.cn'},
    {logo: './images/bilibili.png', logoType:'image', url: 'https://www.bilibili.com'}
]
const render = () => {
    $siteList.find('li:not(.last)').remove()
    hashMap.forEach((node) => {
        const $li = $(`<li>
        <a href="${node.url}">
            <div class="site">
                <div class="logo">${node.logo[0]}</div>
                <div class="link">${node.url}</div>
            </div>
        </a>
        </li>`).insertBefore($lastLi)
    })
}

// 创建网站
// 首先需要知道网站的地址
// 使用jQuery监听div的点击事件
// 使用bootCDN引入jQuery

// console.log(jQuery);

render()

$('.addButton')
    .on('click', () => {
        let url = window.prompt('输入添加的网址->')
        if (url.indexOf('http') !== 0) {
            url = 'https://' + url
        }
        
        console.log(url);
        // 问题 刷新网页之后新建的网站标签会消失
        // 使用haspMap localStorage
        // 有代码维护意识 使用类命名 防止污染全局变量

        hashMap.push({logo: url[0], logoType: 'text', url : url})

        render()
    })

// 即将离开当前页面(刷新或关闭)时执行
window.onbeforeunload = ()=>{
    // console.log('页面要关闭了');
    // console.log(typeof hashMap);
    // console.log(hashMap);
    // console.log(typeof string);
    // console.log(string);
    // localStorage 是全局变量
    // 将字符串存储
    const string = JSON.stringify(hashMap)
    localStorage.setItem('x', string)

    // 清除localStorage数据
    // 清除缓存 或者打开无痕窗口
    
}




