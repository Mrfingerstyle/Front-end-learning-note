import './app_3.css'

import $ from 'jquery'
// yes no undefined

const html = `
<section id="app_3">
<div class="square"></div>
</section>
`

const $element = $(html).appendTo($('body>.page'))
const localKey = 'app3.active'
const $square = $('#app_3 .square')
const active = localStorage.getItem(localKey) === 'yes'
// console.log(active);


// 恢复localStorage记录的状态
// active为true加上类名 否则不加
$square.toggleClass('active', active)

$square.on('click', ()=>{
    // 记录active的状态
    if ($square.hasClass('active')) {
        $square.removeClass('active')
        localStorage.setItem(localKey, 'no')
    } else {
        $square.addClass('active')
        localStorage.setItem(localKey, 'yes')
    }
})
