const bookmarks = [...document.querySelectorAll('.bookmark')]

const toggleBookmark = (obj) => {
    if (obj.className !== "bookmark saved") {
        obj.classList.add('saved')
        obj.attributes[1] = ''

        obj.attributes[1] = 'src="./assets/bookmark.png'

        // console.log(obj.attributes[1] = 'src="./assets/bookmark.png')
    } else {
        console.log('question saved')
    }
}

bookmarks.forEach(item => item.addEventListener('click', (e) => {
    let obj = e.target
    toggleBookmark(obj)
}))