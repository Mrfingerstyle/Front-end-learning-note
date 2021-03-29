import './app_4.css'
import $ from 'jquery'

const $circle = $('#app_4 .circle') 

$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})


