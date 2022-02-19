(function() {
  const btnGetAdvice = document.querySelector(".js-get-advice");
  const adviceOutput = document.querySelector(".js-advice-output");
  const adviceIdOutput = document.querySelector(".js-advice-id-output");
  let currentSlip = {};

  btnGetAdvice.addEventListener("click", async (e) => {
    console.log("currentSlip", currentSlip);
    fetchAdvice();
  });

  document.addEventListener("DOMContentLoaded", () => {
    init();
  });
  
  async function fetchAdvice() {
    const data = await fetch("https://api.adviceslip.com/advice");
    const { slip } = await data.json();
    setCurrentSlip(slip);
  }

  function setCurrentSlip(newSlip) {
    currentSlip = newSlip;
    render();
  }

  function init() {
    fetchAdvice();
  }

  function render() {
    adviceOutput.textContent = currentSlip.advice || `Error: currentSlip is ${currentSlip}`;
    adviceIdOutput.textContent = `#${String(currentSlip.id || "#001")}`;
  }

  console.log("initial currentSlip", currentSlip);

})();