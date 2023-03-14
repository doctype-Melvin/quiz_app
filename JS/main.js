// Selects the grid container
const cardsGrid = document.querySelector('[data-js="cardsGrid"]');

const _data = [
  {
    question: "Where is Waldo?",
    answer: "Hidden",
    tags: ["html", "css", "flexbox"],
  },
  {
    question: "What's for lunch?",
    answer: "Steak and eggs",
    tags: ["food", "lunch", "yummy"],
  },
  {
    question: "What's the largest animal on earth?",
    answer: "Blue Whale",
    tags: ["biology", "marine", "mammals"],
  },
];

const cardFactory = (data) => {
  const card = document.createElement("section");
  card.classList.add("quiz__card");
  card.setAttribute("data-js", "qCard");
  const bookmark = document.createElement("img");
  bookmark.classList.add("bookmark");
  bookmark.setAttribute("data-js", "bookmark");
  bookmark.src = "./assets/bookmark_saved.svg";
  const question = document.createElement("span");
  question.classList.add("card__question");
  question.setAttribute("data-js", "cardQuestion");
  question.textContent = data.question;
  const button = document.createElement("button");
  button.classList.add("card__answer");
  button.setAttribute("data-js", "cardAnswer");
  button.type = "submit";
  button.textContent = "Show Answer";
  const tagsCt = document.createElement("ul");
  tagsCt.classList.add("tags");
  tagsCt.setAttribute("data-js", "tags");
  const tag = document.createElement("li");

  card.append(bookmark, question, button, tagsCt);
  cardsGrid.append(card);
};

_data.forEach((item) => cardFactory(item));

const bookmarkIcons = [...document.querySelectorAll('[data-js="bookmark"]')];

bookmarkIcons.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.classList.toggle("saved");
  })
);
