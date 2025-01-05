// block page if github is unavailable or access is lost
window.onload = () => {
    if (window.location.hash === '#showProjects') {
        document.cookie = "projects=visible"

        if(document.cookie === 'projects=visible') runLockControls()
    } else {
        document.cookie = "projects=hidden"
    }
}
