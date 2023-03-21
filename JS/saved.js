import { cardFactory } from "./main.js"
const cardsGrid = document.querySelector('[data-js="cardsGrid"]')

const resetGrid = () => {
  while(cardsGrid.firstChild) {
    cardsGrid.removeChild(cardsGrid.lastChild)
  }
}

const readDataFromLocalStorage = () => {
  resetGrid()
  return JSON.parse(localStorage.getItem("questions"))
}

// All questions array
const allQuestions = readDataFromLocalStorage()

const filterSavedQuestions = () => allQuestions.filter(question => question.saved === true)

const savedQuestions = filterSavedQuestions()

savedQuestions.forEach(question => cardFactory(question))

allQuestions.length < 1 ? console.log('No data') : console.log('Render data')

// Saved cards should be unsaved in the saved view
// and the remaining saved cards should be rerendered
// Example below
/*----------------
From main.js line 127
----------------*/
// bookmarkIcons.forEach((button) =>
//   button.addEventListener("click", () => {
//     const questionsArray = JSON.parse(localStorage.getItem("questions"))
//     const markedCard = questionsArray.find(question => question.id === +button.dataset.id)
//     updateSavedCards(markedCard)
    
//     button.classList.toggle("bookmark--saved");
//   })
// );