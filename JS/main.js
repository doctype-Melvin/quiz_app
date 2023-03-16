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

const buttonAnswerContainerMaker = () => {
  const buttonAndAnswerContainer = document.createElement("div");
  buttonAndAnswerContainer.classList.add("button__and__answer_container");
  return buttonAndAnswerContainer;
};

const buttonMaker = () => {
  const button = document.createElement("button");
  button.classList.add("card__answer__button");
  // button.setAttribute("data-js", "cardAnswer");
  button.type = "submit";
  button.textContent = "Show Answer";
  return button;
};

const answerMaker = (data) => {
  const answer = document.createElement("section");
  answer.classList.add("card__answer");
  answer.setAttribute("data-js", "cardAnswer");
  answer.textContent = data.answer;
  return answer;
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
  let buttonAndAnswerContainer = buttonAnswerContainerMaker();
  let button = buttonMaker();
  let answer = answerMaker(data);
  let tagsContainer = tagsMaker(data);
  buttonAndAnswerContainer.append(button, answer);
  card.append(bookmark, question, buttonAndAnswerContainer, tagsContainer);
  cardsGrid.append(card);
};

// For each goes through data array and
// calls cardFactory for every question
_data.forEach((item) => cardFactory(item));

// Mark cards as saved by clicking bookmark
const bookmarkIcons = [...document.querySelectorAll('[data-js="bookmark"]')];

bookmarkIcons.forEach((btn) =>
  btn.addEventListener("click", () => {
    btn.classList.toggle("bookmark--saved");
  })
);

// Switches from button to quiz answer
const answerButtons = [...document.querySelectorAll(".card__answer__button")];

answerButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    console.log(e.target);
    button.classList.toggle("card__answer__button--hidden");
    document
      .querySelector('[data-js="cardAnswer"]')
      .classList.toggle("card__answer--show");
    // Show answer on click
    // button.classList.add("card__answer__button--hidden");
    // let answer = document.querySelector('[data-js="cardAnswer"]');
    // answer.classList.add("card__answer--show");
    // console.log(answer);
  })
);

// const toggleFunction = (element) => {
//   element.classList.toggle("dark");
// };

// const toggleSwitch = document.querySelector('[data-js="toggleMode"]');
// const body = document.querySelector("body");
// toggleSwitch.addEventListener("click", () => toggleFunction(body));
