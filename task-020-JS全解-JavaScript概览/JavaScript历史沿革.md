# JavaScript 历史 诞生 缺陷

---

    JavaScript 诞生
        布莱登被公司要求给浏览器添加一个脚本功能
        花费 10 天设计 JavaScript 最初版本

    JavaScript 命名
        Mocha 摩卡 -> LiveScript -> JavaScript
        浏览器一开始同时支持 Java JavaScript
        后来 JavaScript 胜利了

    浏览器大战
        1996 微软跟进 IE3 发布 支持 JScript
        浏览器大战开始 每家浏览器的脚本不太一样

    网景的反击
        1996 网景向 ECMA 提交语言标准 由于版权问题
        JavaScript 语言标准不叫 JavaScript 而是 ECMAScript

    网景之死
        IE 浏览器绑定到 Windows 很快超越
        网景将浏览器开源
        被美国在线收购 AOL
        网景团队的开发者被解雇
        布莱登在之后协助 Firefox 的运营

    IE6 如日中天
        2004 IE6 市场占有率 80%以上
        但是这款浏览器不兼容 W3C 标准 主要是 css
        2005 IE7 发布
        2006 主流浏览器为 IE6 Firefox
        2010 中国大多数浏览器还是 IE6
        由于 Windows XP 在中国的流行 在很多年里 IE6 始终占据中国浏览器市场
        是前端开发者的恶魔

    Chrome 横空出世
        微软懈怠
        解散 IE6 开发团队
        Firefox 出现让微软重新组建 IE 团队 但是人员不同 造成 7 8 问题不断
        谷歌抓住机会
        2004 谷歌雇佣了 Firefox 和 IE 的开发者
        2008 Chrome 发布 1%份额
        2011 Chrome 份额超过 Firefox
        2008 Chrome 全球 62%份额

    移动市场兴起
        智能手机崛起
        2010 iPhone4 发布
        手机上基本没有 IE
        2016 淘宝天猫 宣布不支持 IE 6 7
        同年年底 宣布不支持 IE 8
        移动市场的兴起 让中国前端摆脱 IE 10 年的恐怖支配
        从此 前端快速发展

    ECMAScript 标准的制定
        时间
        1997 6 第一版 ECMAScript 发布
        1999 12 第三版发布 使用最广
        第四版 流产
        2009 12 第 5 版发布 增加了一些功能
        2015 6 第 6 版发布 新浏览器都支持这一版
        之后每年发布一版 版本号以年份命名
        JavaScript 和 ECMAScript 关系
        后者是纸上的标准 JavaScript 是浏览器的额实现
        纸上标准往往落后于浏览器 先实现 再写进标准里

    JavaScript设计缺陷
        1. 不适合开发大型程序
        2. 非常小的标准库
        3. null和undefined
        4. 全局变量难以控制
        5. 自动插入行尾分号
        6. 加号运算符
        7. NaN
        8. 数组和对象的区分
        9. == 和 ===
        10. 基本类型的包装对象
