const deleteAllQuestionsButton = document.querySelector(
  '[data-js="deleteAllQuestions"]'
);
deleteAllQuestionsButton.addEventListener("click", () => {
  localStorage.clear();
  localStorage.setItem("questions", `[]`);
});
