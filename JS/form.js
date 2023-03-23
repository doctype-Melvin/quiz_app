// Selectors for form input elements
const questionInput = document.querySelector('[data-js="questionInput"]');
const answerInput = document.querySelector('[data-js="answerInput"]');
const tagsInput = document.querySelector('[data-js="tagsInput"]');
const formButton = document.querySelector('[data-js="formButton"]');
const formElement = document.querySelector('[data-js="questionForm"]');

const successMessage = document.querySelector('[data-js="modalMessage"]');

const hideSuccessMessage = () => {
  successMessage.setAttribute("hidden", true);
};

hideSuccessMessage();

const showSuccessMessage = () => {
  successMessage.removeAttribute("hidden");
};

const initializeLocalStorage = () => {
  if (localStorage.length === 0) {
    localStorage.setItem("questions", `[]`);
    console.log("created localStorage item");
  } else return;
};
initializeLocalStorage();

const questionFactory = (question, answer, tags) => {
  const quizElement = {
    question,
    answer,
    tags,
    id: JSON.parse(localStorage.getItem("questions")).length,
    saved: false,
  };
  return quizElement;
};

const addDataToLocalStorage = (data) => {
  const storageArray = JSON.parse(localStorage.getItem("questions"));
  const newDataArray = storageArray.slice();
  newDataArray.push(data);
  localStorage.setItem("questions", JSON.stringify(newDataArray));
};

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const newData = questionFactory(
    data.question,
    data.answer,
    data.tags.split(",")
  );

  addDataToLocalStorage(newData);

  showSuccessMessage();
  setTimeout(() => {
    hideSuccessMessage();
  }, 2000);
  console.log(JSON.parse(localStorage.getItem("questions")));
});
