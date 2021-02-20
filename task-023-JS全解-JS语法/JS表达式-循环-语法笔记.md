# 什么是表达式和语句

    表达式
        1 + 2
        add(1, 2) 表达式的值为函数的返回值
        console.log表达式的值为函数本身
        console.log(3)表达式的值为 undefined
        console.log()表达式的值为 undefined

    语句
        var a = 1

    二者的区别
        表达式一半都有值 语句可能有值 也可能没有
        语句一半会改变环境 声明 赋值
        上面两句话不是绝对的

# 标识符的规则

    第一个unicode字母 $ _ 中文
    第二个除了上述之外 还可以使用数字
    变量名是标识符

# if-else 语句

    if语句
        if(表达式){
            语句1
        }else{
            语句2
        }
        大括号只有一句的时候可以省略 不建议这样做
    变态情况
        表达式里可以非常变态 例如 a = 1
        语句1里可以非常变态 如 潜逃的if else
        语句2里可以非常变态 如 潜逃的if else
        锁紧也可以很变态 如面试题常常下套
        一个等于号 不是等于的意思 此处表示赋值
        使用 === 表示等于
    永远不要省略花括号
        最推荐的写法
        if () {

        } else if () {

        } else {

        }

# while for 语句

    while
        while(表达式){语句}
        判断表达式的真假
        真 执行语句 执行完再判断表达式的真假
        假 执行后年的语句

    do-while
        使用不多 自行了解

    注意死循环 有时候因为浮点数的精度问题 也会导致死循环
        0.1 + 0.1 + 0.1 === 0.3 false

    for语句 语法糖
        for 是 while的简便写法
        语法
            for(表达式1,表达式2,表达式3) {
                // ...
            }
        for (var i = 0; i < 5; i++) {
            setTimeout(() => {
                console.log(i);
            }, 0)
        }
        // 55555
        // 此处把var 改为 let 就可以得到结果 01234

# break continue

    break
        退出所有循环
        break只会退出离它最近的那个循环
    continue
        退出当前循环
        for(var i = 0 ; i < 10; i++) { if (i %2 === 1) {break} }
        for(var i = 0 ; i < 10; i++) { if (i %2 === 1) {continue} }

# label

    使用很少
        遇到多层循环，想直接跳到最外层循环时，label 的作用就体现
        foo: {
            console.log(1)
            break foo
            console.log('本行不输出')
        }
        console.log(2)
        // 1 2
        {
            foo:1;
        }
        // chrome 1
        // firefox 1
        {
            foo:1
        }
        // chrome {foo:1}
        // firefox 1
