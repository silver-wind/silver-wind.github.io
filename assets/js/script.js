// make portfolio page non-public

let bodyElem = document.getElementById('body')
bodyElem.style.display = 'none'

let clickCount = 0
let htmlElem = document.getElementById('html')
htmlElem.addEventListener('click', ()=>{
    clickCount++;
    if (clickCount === 10) bodyElem.style.display = ''
})