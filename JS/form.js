
// Selectors for form input elements
const questionInput = document.querySelector('[data-js="questionInput"]')
const answerInput = document.querySelector('[data-js="answerInput"]')
const tagsInput = document.querySelector('[data-js="tagsInput"]')
const formButton = document.querySelector('[data-js="formButton"]')

const successMessage = document.querySelector('[data-js="modalMessage"]')

const hideSuccessMessage = () => {
  successMessage.setAttribute("hidden", true)
}

hideSuccessMessage()

const showSuccessMessage = () => {
  successMessage.removeAttribute("hidden")
}

const clearInputFields = () => {
  questionInput.value = '';
  answerInput.value = '';
  tagsInput.value = '';
}

const initializeLocalStorage = () => {
    if (localStorage.length === 0) {
      localStorage.setItem("questions", `[]`)
      console.log('created localStorage item')
    } else return
}
initializeLocalStorage()

const questionFactory = (question, answer, tags) => {
    const quizElement = {
      question,
      answer,
      tags,
      id: JSON.parse(localStorage.getItem("questions")).length,
      saved: false,
    }
    return quizElement
  }


const addDataToLocalStorage = (data) => {
const storageArray = JSON.parse(localStorage.getItem("questions"));
const newDataArray = storageArray.slice();
newDataArray.push(data)
localStorage.setItem("questions", JSON.stringify(newDataArray))
}

formButton.addEventListener('click', () => {
const newData = questionFactory(questionInput.value, answerInput.value, tagsInput.value.split(','))
addDataToLocalStorage(newData)
clearInputFields()
showSuccessMessage()
setTimeout(() => {
  hideSuccessMessage()
}, 3000)
console.log(JSON.parse(localStorage.getItem("questions")))
})
