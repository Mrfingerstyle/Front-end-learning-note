const level1 = document.querySelector('.level1')
const level2 = document.querySelector('.level2')
const level3 = document.querySelector('.level3')
const level4 = document.querySelector('.level4')
const level5 = document.querySelector('.level5')
const level6 = document.querySelector('.level6')
const level7 = document.querySelector('.level7')

let n = 1

const remove_x = (e) => {
    const t = e.currentTarget
    setTimeout(() => {
        t.classList.remove('x')
    }, n * 1000)
    n += 1
}

const add_x = (e) => {
    const t = e.currentTarget
    setTimeout(() => {
        t.classList.add('x')
    }, n * 1000)
    n += 1
}

level1.addEventListener('click', remove_x, true)
level1.addEventListener('click', add_x)
level2.addEventListener('click', remove_x, true)
level2.addEventListener('click', add_x)
level3.addEventListener('click', remove_x, true)
level3.addEventListener('click', add_x)
level4.addEventListener('click', remove_x, true)
level4.addEventListener('click', (e) => {
    e.stopPropagation()
    add_x(e)
})
level5.addEventListener('click', remove_x, true)
level5.addEventListener('click', add_x)
level6.addEventListener('click', remove_x, true)
level6.addEventListener('click', add_x)
level7.addEventListener('click', remove_x, true)
level7.addEventListener('click', add_x)
