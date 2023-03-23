import { cardFactory } from "./main.js";
const cardsGrid = document.querySelector('[data-js="cardsGrid"]');

const resetGrid = () => {
  while (cardsGrid.firstChild) {
    cardsGrid.removeChild(cardsGrid.lastChild);
  }
};

const readDataFromLocalStorage = () => {
  resetGrid();
  return JSON.parse(localStorage.getItem("questions"));
};

// All questions array
const allQuestions = readDataFromLocalStorage();
console.log(allQuestions.length);
let savedQuestions = null;
const filterSavedQuestions = (() => {
  if (allQuestions !== null) {
    savedQuestions = allQuestions.filter((question) => question.saved === true);
  } else {
    console.log("No saved questions");
    return;
  }
})();

const renderCards = () => {
  savedQuestions.forEach((question) => cardFactory(question));
};

// No saved bookmarks
const noSavedCardsMessage = () => {
  resetGrid();
  const messageCard = document.createElement("a");
  messageCard.classList.add("message__card");
  messageCard.setAttribute("data-js", "messageCard");
  messageCard.textContent = `Total cards: ${
    allQuestions.length !== 0 ? allQuestions.length : 0
  } Saved cards: ${savedQuestions !== null ? savedQuestions.length : 0}`;
  cardsGrid.append(messageCard);
};

allQuestions.length === 0
  ? noSavedCardsMessage()
  : savedQuestions.length
  ? renderCards()
  : noSavedCardsMessage();

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
