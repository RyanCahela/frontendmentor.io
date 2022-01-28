//get buttons
const shareIcon = document.querySelector(".js-card__share-icon");

//get component
const shareWidget = document.querySelector(".js-card__share-widget");

//set click listener on buttons
shareIcon.addEventListener("click", (e) => {
  //toggle on removes class
  shareWidget.classList.toggle("transparent");
});
