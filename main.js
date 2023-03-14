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


const darkMode = document.querySelector('.toggle__switch')

const elFactory = (type, css, content) => {
    const element = document.createElement(type)
    element.classList.add(css)
    if (content !== '') {
        element.textContent = content
    } else {
        element.textContent = ''
    }
    return element
}

const questionCard = elFactory('section', 'q__card')
const bookIcon = elFactory('img', 'bookmark')
const question = elFactory('span', 'card__question', 'Where is waldo?')
const answerBtn = elFactory('button', 'card__answer', 'Show Answer')

const preview = questionCard.append(bookIcon, question, answerBtn)
console.log(questionCard)