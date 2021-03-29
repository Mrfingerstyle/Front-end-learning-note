### jQuery 如何获取元素

    使用jQuery的第一步，往往就是将一个选择表达式，放进构造函数jQuery()（简写为$），然后得到被选中的元素

    选择表达式可以是CSS选择器
    $(document) //选择整个文档对象
    $('#myId') //选择 ID 为 myId 的网页元素
    $('div.myClass') // 选择 class 为 myClass 的 div 元素
    $('input[name=first]') // 选择 name 属性等于 first 的 input 元素

    也可以是jQuery特有的表达式
    $('a:first') //选择网页中第一个 a 元素
    $('tr:odd') //选择表格的奇数行
    $('#myForm :input') // 选择表单中的 input 元素
    $('div:visible') //选择可见的 div 元素
    $('div:gt(2)') // 选择所有的 div 元素，除了前三个
    $('div:animated') // 选择当前处于动画状态的 div 元素

### jQuery 的链式操作是怎样的

    它的原理在于每一步的jQuery操作，返回的都是一个jQuery对象，所以不同操作可以一起
    jQuery设计思想之三，就是最终选中网页元素以后，可以对它进行一系列操作，并且所有
    操作可以连接在一起，以链条的形式写出来，比如：
    $('div').find('h3').eq(2).html('Hello');
        $('div') //找到div元素
        .find('h3') //选择其中的 h3 元素　　　
        .eq(2) //选择第 3 个 h3 元素　　　
        .html('Hello'); //将它的内容改为 Hello

### jQuery 如何创建元素

    $()可以直接创建一个元素例如创建一个 a 标签
    var link=$("<a href="#"></a>");
    link.text("baidu");

### jQuery 如何移动元素

    .insertAfter()和.after()：在现存元素的外部，从后面插入元素
    .insertBefore()和.before()：在现存元素的外部，从前面插入元素
    .appendTo()和.append()：在现存元素的内部，从后面插入元素
    .prependTo()和.prepend()：在现存元素的内部，从前面插入元素

### jQuery 如何修改元素的属性

    jQuery attr() 方法也用于设置/改变属性值
    attr() 方法也允许您同时设置多个属性
    例如:

```javascript
$("button").click(function () {
  $("a").attr("href", "http://www.baidu.com.com");
});
```
