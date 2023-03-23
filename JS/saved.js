import { cardFactory, updateSavedCards } from "./main.js";
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

// Declare variable for saved questions
let savedQuestions = null;
// IIFE to set the saved questions array
const filterSavedQuestions = () => {
  if (allQuestions !== null) {
    savedQuestions = allQuestions.filter((question) => question.saved === true);
  } else {
    console.log("No saved questions");
    return;
  }
};
filterSavedQuestions();

// Render saved cards
const renderCards = () => {
  savedQuestions.forEach((question) => cardFactory(question));
};

// No saved bookmarks
// Creates a card that shows number of total cards and saved cards
// Bug: Only shows up when there are no saved cards
// so displaying the number of saved cards makes no sense
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

// Conditional rendering chain
// Bug: Error occurs on saved view
// after deleting all questions
allQuestions.length === 0
  ? noSavedCardsMessage()
  : savedQuestions.length
  ? renderCards()
  : noSavedCardsMessage();

// Clicking bookmarks of saved cards in saved view
// resets the saved property of question object
// Bug: When removing a card, the eventlistener is lost
let bookmarkIcons = [...document.querySelectorAll('[data-js="bookmark"]')];

bookmarkIcons.forEach((button) => {
  button.addEventListener("click", () => {
    const markedCard = savedQuestions.find(
      (question) => question.id === +button.dataset.id
    );
    updateSavedCards(markedCard);
    button.classList.toggle("bookmark--saved");
    resetGrid();
    filterSavedQuestions();
    renderCards();
    bookmarkIcons = [...document.querySelectorAll(".bookmark--saved")];
  });
});
