import './app_2.css'
import $ from 'jquery'
const $tabBar = $('#app_2 .tabBar')
const $tabContent = $('#app_2 .tabContent')


// 监听父元素 事件委托
$tabBar.on('click', 'li', (e)=>{
    // console.log( e.currentTarget);
    const $li = $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    const index = $li.index()
    // console.log(index);
    // 不建议使用 hide() show() css() 
    // 设置CSS样式 因为这样会在JS文件中设置CSS样式 样式和行为分离
    // 使用addClass removeClass
    $tabContent.children().eq(index)
    .addClass('active').siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')
