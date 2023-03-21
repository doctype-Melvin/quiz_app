const readDataFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("questions"))
  }

// All questions array
const allQuestions = readDataFromLocalStorage()

const filterSavedQuestions = () => allQuestions.filter(question => question.saved === true)

allQuestions.length < 1 ? console.log('No data') : console.log('Render data')
