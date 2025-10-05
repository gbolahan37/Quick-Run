document.addEventListener("DOMContentLoaded", () => {
  const runnerButton = document.querySelector(".native");
  const description = document.querySelector(".login-descript");
  const submitButton = document.querySelector(".submit-btn");
  const customerButton = document.querySelector(".active");
  const eye = document.querySelector(".unhide-eye")
  const passwordInput = document.querySelector(".password-input")
  const slashEye = document.querySelector(".hide-eye")

  function change() {
    description.innerText = "Complete errands and earn money";
    runnerButton.style.backgroundColor = "#FFFFFF";
    submitButton.innerText = "Sign in as Runner";
    customerButton.style.backgroundColor = "transparent"
  }

  runnerButton.addEventListener("click", change);

  function change2() {
    description.innerText = "Request errands and deliveries";
    runnerButton.style.backgroundColor = "transparent";
    submitButton.innerText = "Sign in as Customer";
    customerButton.style.backgroundColor = "#FFFFFF"
  }
  customerButton.addEventListener("click", change2);

  function hide (){
      passwordInput.type = "Text"
      slashEye.style.display = "block"
      eye.style.display = "none"
  }
  eye.addEventListener("click", hide)

  function unhide (){
      passwordInput.type = "password"
      slashEye.style.display = "none"
      eye.style.display = "block"
  }
  slashEye.addEventListener("click", unhide)
});


