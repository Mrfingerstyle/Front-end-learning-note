import './app_4.css'
import $ from 'jquery'

const html = `
<section id="app_4">
            <div class="circle"></div>
        </section>
`

const $element = $(html).appendTo($('body>.page'))


const $circle = $('#app_4 .circle') 

$circle.on('mouseenter', () => {
    $circle.addClass('active')
}).on('mouseleave', () => {
    $circle.removeClass('active')
})


