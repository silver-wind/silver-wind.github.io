let clickCount = 0

const htmlElem = document.getElementsByTagName('html')[0] //universal
htmlElem.addEventListener('click', ()=>{
    clickCount++;
    if (clickCount === 10) {
        document.cookie = "projects=visible"

        if(document.cookie === 'projects=visible') runLockControls()
    }
})
