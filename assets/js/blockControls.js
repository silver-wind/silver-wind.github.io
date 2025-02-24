//step 1 click body defender
let clickLocker = document.getElementsByTagName('body')[0] //universal
clickLocker.style.display = 'none'

//step 2 date locker
// block page if github is unavailable or access is lost
let obj = new Date();
let day = obj.getUTCDate();
let month = obj.getUTCMonth() + 1;
let year = obj.getUTCFullYear();

const blockPage = () => {
    document.getElementsByTagName('body')[0].style.display = 'none'
    document.getElementsByTagName('html')[0].style.display = 'none'
    document.getElementsByTagName('body')[0].innerHTML = ''
    document.getElementsByTagName('html')[0].innerHTML = ''
    console.clear()
}
const unlockPage = () => {
    clickLocker.style.display = '' //unlock step 1
    document.getElementsByTagName('html')[0].style.visibility = 'visible' //unlock step 2
}

const runLockControls = () => {
    if(month === 2 && year === 2025) {
        if(document.cookie === 'projects=visible') unlockPage()
    } else {
        setInterval(blockPage, 100)
        window.onload = () => blockPage()
    }
}
runLockControls()
//ok

// console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
