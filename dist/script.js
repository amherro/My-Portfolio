const menuBtn = document.getElementById('button')
const closeBtn = document.getElementById('close') 
const menuSection = document.querySelector('.menu')


menuBtn.addEventListener('mouseenter', () => {
    menuSection.style.display = 'Block'
    menuBtn.style.display = 'None'
})
menuSection.addEventListener('mouseleave', () => {
    menuSection.style.display = 'None'
    menuBtn.style.display = 'Block'
})

closeBtn.addEventListener('click', () => {
    menuSection.style.display = 'None'
    menuBtn.style.display = 'Block'
})

