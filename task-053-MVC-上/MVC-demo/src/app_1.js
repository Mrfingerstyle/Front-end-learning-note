import './app_1.css'
import $ from 'jquery'
// console.log($);

const $button_1 = $('#add_1')
const $button_2 = $('#minus_1')
const $button_3 = $('#mul_1')
const $button_4 = $('#divide_1')
const $number = $('#number')

// app_1
const n = localStorage.getItem('n')
$number.text(n || 100)

$button_1.on('click' ,()=>{
    let n = parseInt($number.text())
    n += 1
    localStorage.setItem('n', n)
    $number.text(n)
})
$button_2.on('click' ,()=>{
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n', n)
    $number.text(n)
})
$button_3.on('click' ,()=>{
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n', n)
    $number.text(n)
})
$button_4.on('click' ,()=>{
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n', n)
    $number.text(n)
})