let clickCount = 0

const htmlElem = document.getElementsByTagName('html')[0] //universal
htmlElem.addEventListener('click', ()=>{
    clickCount++;
    // if (clickCount === 10) {
    if (window.location.hash === '#showProjects') {
        // console.log('show')
        // console.log(window.location.hash)
        document.cookie = "projects=visible"

        if(document.cookie === 'projects=visible') runLockControls()
    } else {
        document.cookie = "projects=hidden"
    }
})
