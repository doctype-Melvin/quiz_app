const bookmarks = [...document.querySelectorAll('.bookmark')]

bookmarks.forEach(item => item.addEventListener('click', (e) => {
    if (e.target.classList.value !== "bookmark saved") {
        e.target.classList.add('saved')
        console.log(e.target.classList)
    } else {
        e.target.classList.remove('saved')
        console.log(e.target.classList)
    }
}))