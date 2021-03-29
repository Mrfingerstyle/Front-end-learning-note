import './app_3.css'
import $ from 'jquery'

const $square = $('#app_3 .square')
$square.on('click', ()=>{
    $square.toggleClass('active')
})
