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

// Section of element factories
// to create individual elements
const cardMaker = () => {
  const card = document.createElement("section");
  card.classList.add("quiz__card");
  card.setAttribute("data-js", "quizCard");
  return card;
};

const bookmarkMaker = () => {
  const bookmark = document.createElement("img");
  bookmark.classList.add("bookmark");
  bookmark.setAttribute("data-js", "bookmark");
  bookmark.src = "./assets/bookmark_saved.svg";
  return bookmark;
};

const questionMaker = (data) => {
  const question = document.createElement("span");
  question.classList.add("card__question");
  question.setAttribute("data-js", "cardQuestion");
  question.textContent = data.question;
  return question;
};

const buttonMaker = () => {
  const button = document.createElement("button");
  button.classList.add("card__answer__button");
  button.setAttribute("data-js", "cardAnswer");
  button.type = "submit";
  button.textContent = "Show Answer";
  return button;
};

const tagsMaker = (data) => {
  const tagsContainer = document.createElement("ul");
  tagsContainer.classList.add("tags");
  tagsContainer.setAttribute("data-js", "tags");
  data.tags.forEach((element) => {
    const tag = document.createElement("li");
    tag.textContent = `#${element}`;
    tagsContainer.append(tag);
  });
  return tagsContainer;
};

// Factory to create question cards
const cardFactory = (data) => {
  let card = cardMaker();
  let bookmark = bookmarkMaker();
  let question = questionMaker(data);
  let button = buttonMaker();
  let tagsContainer = tagsMaker(data);

  card.append(bookmark, question, button, tagsContainer);
  cardsGrid.append(card);
};

_data.forEach((item) => cardFactory(item));

const bookmarkIcons = [...document.querySelectorAll('[data-js="bookmark"]')];

bookmarkIcons.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.classList.toggle("bookmark--saved");
  })
);

const answerButtons = [...document.querySelectorAll(".card__answer__button")];
console.log(answerButtons);
answerButtons.forEach((button) =>
  button.addEventListener("click", () => {
    // Show answer on click
    button.classList.add("card__answer__button--hidden");
    console.log("Answer button clicked!");
  })
);

// const toggleFunction = (element) => {
//   element.classList.toggle("dark");
// };

// const toggleSwitch = document.querySelector('[data-js="toggleMode"]');
// const body = document.querySelector("body");
// toggleSwitch.addEventListener("click", () => toggleFunction(body));
