(function () {
  const questions = document.querySelector("ul");
  questions.addEventListener("click", (e) => {
    console.log("e.target", e.target);
    console.log("e.target.parentNode", e.target.parentNode);
    const liClicked =
      e.target.classList.contains("closed") ||
      e.target.classList.contains("open");
    const divClicked =
      e.target.parentNode.classList.contains("closed") ||
      e.target.parentNode.classList.contains("open");

    console.log("liClicked", liClicked);
    console.log("divClicked", divClicked);

    //Start: the order of these two if statements is important
    if (liClicked) {
      toggleOpen(e.target);
      return;
    }

    if (divClicked) {
      toggleOpen(e.target.parentNode);
      return;
    }
    //End: The order of these two if statements is important

    function toggleOpen(target) {
      target.classList.toggle("closed");
      target.classList.toggle("open");
    }
  });
})();
