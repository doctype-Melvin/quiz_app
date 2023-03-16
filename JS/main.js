// Selects the grid container
const cardsGrid = document.querySelector('[data-js="cardsGrid"]');

const _data = [
  {
    id: 1,
    question: "Where is Waldo?",
    answer: "Hidden",
    tags: ["html", "css", "flexbox"],
  },
  {
    id: 2,
    question: "What's for lunch?",
    answer: "Steak and eggs",
    tags: ["food", "lunch", "yummy"],
  },
  {
    id: 3,
    question: "What's the largest animal on earth?",
    answer: "Blue Whale",
    tags: ["biology", "marine", "mammals"],
  },
];

// Section of element factories
// to create individual elements
const cardMaker = (data) => {
  const card = document.createElement("section");
  card.classList.add("quiz__card");
  card.setAttribute("data-js", "quizCard");
  card.setAttribute("data-id", `${data.id}`);
  return card;
};

const bookmarkMaker = (data) => {
  const bookmark = document.createElement("img");
  bookmark.classList.add("bookmark");
  bookmark.setAttribute("data-js", "bookmark");
  bookmark.setAttribute("data-id", `${data.id}`);
  bookmark.src = "./assets/bookmark_saved.svg";
  return bookmark;
};

const questionMaker = (data) => {
  const question = document.createElement("span");
  question.classList.add("card__question");
  question.setAttribute("data-js", "cardQuestion");
  question.setAttribute("data-id", `${data.id}`);
  question.textContent = data.question;
  return question;
};

const buttonAnswerContainerMaker = (data) => {
  const buttonAndAnswerContainer = document.createElement("div");
  buttonAndAnswerContainer.classList.add("button__and__answer__container");
  buttonAndAnswerContainer.setAttribute("data-id", `${data.id}`);
  return buttonAndAnswerContainer;
};

const buttonMaker = (data) => {
  const button = document.createElement("button");
  button.classList.add("card__answer__button");
  button.setAttribute("data-js", "cardAnswerButton");
  button.setAttribute("data-id", `${data.id}`);
  button.type = "submit";
  button.textContent = "Show Answer";
  return button;
};

const answerMaker = (data) => {
  const answer = document.createElement("section");
  answer.classList.add("card__answer");
  answer.setAttribute("data-js", "cardAnswer");
  answer.setAttribute("data-id", `${data.id}`);
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
  let card = cardMaker(data);
  let bookmark = bookmarkMaker(data);
  let question = questionMaker(data);
  let buttonAndAnswerContainer = buttonAnswerContainerMaker(data);
  let button = buttonMaker(data);
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
    console.log(btn.dataset.id);
    btn.classList.toggle("bookmark--saved");
  })
);

// Switches from button to quiz answer
const answerButtons = [...document.querySelectorAll(".card__answer__button")];

answerButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    // Store the card's ID
    let answerId = e.target.dataset.id;

    // Select all the buttons
    let buttonsOnScreen = [
      ...document.querySelectorAll('[data-js="cardAnswerButton"]'),
    ];

    // Select all the questions
    let questionsOnScreen = [
      ...document.querySelectorAll('[data-js="cardAnswer"]'),
    ];

    // Find the clicked element associated with the button
    let clickedButton = buttonsOnScreen.find(
      (item) => item.dataset.id === answerId
    );
    clickedButton.classList.add("card__answer__button--hidden");

    // Find the clicked element's answer
    let clickedAnswer = questionsOnScreen.find(
      (item) => item.dataset.id === answerId
    );
    clickedAnswer.classList.add("card__answer--show");
  })
);
