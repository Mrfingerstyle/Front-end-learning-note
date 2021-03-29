// console.log('this is main.js 1');

let n = 1

getPage.onclick = () => {
    if (n === 3) {
        alert('页数显示完毕');
        return
    }
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id 
                xxx.appendChild(li)
            });
            n += 1
        }
    }
    request.send()
}


getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            // console.log(request.response);
            // 变换为JS的对象 
            // 但是不是所有的都变为对象 还可能是其他 如 bool  
            const obj = JSON.parse(request.response)
            myName.textContent = obj.name 
            // console.log(obj);

        }
    }
    // 发送请求
    request.send() 
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            // console.log(request.responseXML); DOM对象
            // DOM对象 针对 HTML XML 
            const dom = request.responseXML
            .getElementsByTagName('warning')[0].textContent.trim()
            console.log(dom);
            

        }
    }
    // 发送请求
    request.send() 
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () => {
        // 打印请求响应内容
        console.log(request.response);

        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
        
    }
    request.onerror = () => {
        console.log('fail');
    }
    // 发送请求
    request.send()
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onload = () => {
        // 打印请求响应内容
        // console.log(request.response);

        // 创建script标签 插入body中
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('fail');
    }
    // 发送请求
    request.send()
}

getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        // 打印请求响应内容
        // console.log(request.response);
        // console.log('success');

        // 创建style标签 插入head中
        // const style = document.createElement('style')
        // style.innerHTML = request.response
        // document.head.appendChild(style)

        // 2 3 4 因为上面已经打开 open
        // console.log(request.readyState);
        // readystate 只是表示下载完成 但是不知道成功
        // 把成功的代码下载完 还是 失败的代码下载完 不知道？所以使用status

        // 此时才认为是成功了
        if (request.status >= 200 && request.status < 300) {
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        } else {
            console.log('加载css失败');
        }

    }
    
    // 发送请求
    request.send()    
}
