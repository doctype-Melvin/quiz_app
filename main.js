const cardsGrid = document.querySelector('[data-js="cardsGrid"]');

const elFactory = (type, attr, css, content, src) => {
  const element = document.createElement(type);
  element.setAttribute("data-js", attr);
  element.classList.add(css);
  if (src !== "") element.src = src;
  if (content !== "") {
    element.textContent = content;
  } else {
    element.textContent = "";
  }
  return element;
};

const questionCard = elFactory("section", "qCard", "q__card", "", "");
const bookIcon = elFactory(
  "img",
  "bookmarkIcon",
  "bookmark",
  "",
  "./assets/bookmark_saved.svg"
);
const question = elFactory(
  "span",
  "cardQuest",
  "card__question",
  "Where is waldo?"
);
const answerBtn = elFactory("button", "answBtn", "card__answer", "Show Answer");

questionCard.append(bookIcon, question, answerBtn);
cardsGrid.append(questionCard);

const bookmarks = [...document.querySelectorAll('[data-js="bookmarkIcon"]')];
bookmarks.forEach((item) =>
  item.addEventListener("click", (e) => {
    if (e.target.classList.value !== "bookmark saved") {
      e.target.classList.add("saved");
      console.log(e.target.classList);
    } else {
      e.target.classList.remove("saved");
      console.log(e.target.classList);
    }
  })
);
console.log(bookmarks);
