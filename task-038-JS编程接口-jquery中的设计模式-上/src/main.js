// 返回API对象
// const api = jQuery('.test')
// 遍历所有获取的元素 添加className
    // .addClass('red') // 此处的this就是API
    // .addClass('blue')
    // .addClass('green') // 链式操作

// 链式风格
// 也叫做jQuery风格 window.jQuery是我们提供的全局函数

// 特殊函数jQuery
// jQuery(选择器)用于获取对应的元素
// 但是它不反悔这些元素 相反 它返回一个对象 称为jQuery构造出的对象
// 这个对象可以操作对应的元素

// jQuery是构造函数吗 
// 是 它确实构造出了一个对象
// 不是 因为它不加new就能构造出一个对象 
// 结论
// jQuery是一个不需要加new的构造函数
// jQuery不是常规意义上的构造函数
// 因为jQuery使用了一些技巧

// jQuery对象代指jQuery函数构造出来的对象
// jQuery对象 不是 jQuery这个对象

// const api_1 = jQuery('.test')
// api_1.addClass('blue')

// const api_2 = api_1.find('.child').addClass('red')
// api_1.addClass('green')

/*
jQuery('.test')
.find('.child')
.addClass('red')
.addClass('blue')
.addClass('green')
.end()
.addClass('yellow')
*/

// console.log(jQuery('.test').oldApi);

/*
const child = jQuery('.test')
.find('.child')
child.each((div) => console.log(div))
*/

/*
const child = jQuery('.test')
child.children().print()
*/

$('#test').find('.child').addClass('red') // 请确保这句话成功执行















