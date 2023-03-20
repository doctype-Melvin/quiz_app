const deleteAllQuestionsButton = document.querySelector('[data-js="deleteAllQuestions"]') 
deleteAllQuestionsButton.addEventListener('click', () => {
  console.log('Clicked')
  localStorage.clear()
}) 