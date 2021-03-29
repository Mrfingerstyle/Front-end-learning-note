/*
const request = new XMLHttpRequest()
// request.open('GET', '/friends.json')
request.open('GET', 'http://qq.com:8888/friends.json')

// 测试百度的jQuery
// request.open('GET', 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/js/lib/jquery-1-edb203c114.10.2.js')

// Access to XMLHttpRequest at 'http://qq.com:8888/friends.json' from origin 
// 'http://frank.com:9990' has been blocked by CORS policy: 
// No 'Access-Control-Allow-Origin' header is present on the requested resource.

request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.response);
    }
}
request.send()
*/

// 通过JS拿另外一个网站的数据是合法的


// 封装JSONP
function jsonp(url) {
    return new Promise((resolve, reject) => {
        const random = 'callback' + Math.random()
        
        console.log(random);

        // 设置随机函数名 不会重复
        window[random] = (data) => {
            // console.log(data);
            resolve(data)
        }
        const script = document.createElement('script')
        script.src = `${url}?callback=${random}`
        
        // 加载完成删除script
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject()
        }
        document.body.appendChild(script)
    })
}

jsonp('http://qq.com:8888/friends.js')
    .then((data) => {
        console.log(data);
    })




