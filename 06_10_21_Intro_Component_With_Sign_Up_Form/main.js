(function () {
  console.log("hello world!");

  const form = document.querySelector(".sign-up-form");

  const emailRegexPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const inputContainers = Array.from(
    document.querySelectorAll(".form-input-container")
  );

  const validateForm = (e) => {
    e.preventDefault();

    inputContainers.forEach((inputContainer) => {
      let isError = false;
      console.dir(inputContainer);
      const inputEl = inputContainer.querySelector("input");

      switch (inputEl.id) {
        case "first-name-input":
          isError = isEmptyString(inputEl.value);
          break;
        case "last-name-input":
          isError = isEmptyString(inputEl.value);
          break;
        case "password-input":
          isError = isEmptyString(inputEl.value);
          break;
        case "email-input":
          isError = !isValidEmail(inputEl.value);
          break;
        default:
          console.error(
            "inputEl.id not matched, you shouldn't be reading this"
          );
      }

      //add error class only once
      if (isError && !inputContainer.classList.contains("error")) {
        inputContainer.classList.add("error");
      }

      //remove error class if no more error found
      if (!isError && inputContainer.classList.contains("error")) {
        inputContainer.classList.remove("error");
      }

      //function definitions
      function isEmptyString(string) {
        console.log(string);
        return !Boolean(string.length);
      }

      function isValidEmail(string) {
        return emailRegexPattern.test(string);
      }
    });
  };
  form.addEventListener("submit", (e) => validateForm(e));
  form.addEventListener("onkeyDown", (e) => validateForm(e));
})();
