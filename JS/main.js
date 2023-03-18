// Selects the grid container
const cardsGrid = document.querySelector('[data-js="cardsGrid"]');

// Selectors for form input elements
const questionInput = document.querySelector('[data-js="questionInput"]')
const answerInput = document.querySelector('[data-js="answerInput"]')
const tagsInput = document.querySelector('[data-js="tagsInput"]')
const formButton = document.querySelector('[data-js="formButton"]')

// ID variable
let id = 0

const questionFactory = (question, answer, tags) => {
  const quizElement = {
    question,
    answer,
    tags,
    id: id += 1,
    saved: false,
  }
  return quizElement
}

const makeNewQuestion = (question, answer, tags) => {
  const newQuestion = questionFactory(question, answer, [tags.split(',')])
}

/*
formButton.addEventListener('click', () => {
return makeNewQuestion(questionInput.value, answerInput.value, tagsInput.value)
})
*/

// Static data that in future may be entered 
// by authorized users through a form element
const _data = [
  {
    id: 2,
    question: "What's for lunch?",
    answer: "Steak and eggs",
    tags: ["food", "lunch", "yummy"],
    saved: false,
  },
  {
    id: 3,
    question: "What's the largest animal on earth?",
    answer: "Blue Whale",
    tags: ["biology", "marine", "mammals"],
    saved: false,
  },
  {
    id: 4,
    question: "Who was the first person on the moon?",
    answer: "Neil Armstrong",
    tags: ["space", "science", "nasa"],
    saved: false,
  },
  {
    id: 1,
    question: "Where is Waldo?",
    answer: "Hidden",
    tags: ["html", "css", "flexbox"],
    saved: false,
  },
  {
    id: 5,
    question: "What percentage of the Earth's surface is covered in water?",
    answer: "71%",
    tags: ["earth", "blue planet"],
    saved: false,
  },
  {
    id: 6,
    question: "How many time zones are there in the world?",
    answer: "24",
    tags: ["time", "earth", "hours"],
    saved: false,
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

const initializeLocalStorage = () => {
  localStorage.setItem("questions", `[]`)
  console.log('created localStorage item')
}

const addDataToLocalStorage = (data) => {
  const storageArray = JSON.parse(localStorage.getItem("questions"));
  const newDataArray = storageArray.slice();
  newDataArray.push(data)
  localStorage.setItem("questions", JSON.stringify(newDataArray))
}

const readDataFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("questions"))
}

const deleteLocalStorageData = () => {
  localStorage.clear()
  console.log('wiped localStorage')
}

// localStorage.clear()

const writeToLocalStorage = () => {
  if (localStorage.length === 0) {
    initializeLocalStorage()
  } else {
    addDataToLocalStorage()
  }
}

// For each goes through data array and
// calls cardFactory for every question
_data.forEach((item) => cardFactory(item));

// Mark cards as saved by clicking bookmark
const bookmarkIcons = [...document.querySelectorAll('[data-js="bookmark"]')];

bookmarkIcons.forEach((btn) =>
  btn.addEventListener("click", () => {
    //// *****************************************
    writeToLocalStorage()
    //// *****************************************
    btn.classList.toggle("bookmark--saved");
  })
);

// Select all the buttons
let buttonsOnScreen = [
  ...document.querySelectorAll('[data-js="cardAnswerButton"]'),
];

// Select all the questions
let questionsOnScreen = [
  ...document.querySelectorAll('[data-js="cardAnswer"]'),
];


// Flip buttons to answers
buttonsOnScreen.forEach((button) =>
  button.addEventListener("click", (e) => {
    // Store the card's ID
    let answerId = e.target.dataset.id;

    // Find the clicked element associated with the button
    let clickedButton = buttonsOnScreen.find(
      (item) => item.dataset.id === answerId
    );
    clickedButton.classList.toggle("card__answer__button--hidden");

    // Find the clicked element's answer
    let clickedAnswer = questionsOnScreen.find(
      (item) => item.dataset.id === answerId
    );
    clickedAnswer.classList.toggle("card__answer--show");
  })
);

// Flip answers to buttons
questionsOnScreen.forEach((answer) => {
  answer.addEventListener("click", (e) => {
    // Store the card's ID
    let questionId = e.target.dataset.id;

    // Find the clicked answer and toggle class (off)
    questionsOnScreen
      .find((item) => item.dataset.id === questionId)
      .classList.toggle("card__answer--show");

    // Find the cards button and toggle class (on)
    buttonsOnScreen
      .find((item) => item.dataset.id === answer.dataset.id)
      .classList.toggle("card__answer__button--hidden");
  });
});
