document.addEventListener("DOMContentLoaded", () => {
  const runnerButton = document.querySelector(".native");
  const description = document.querySelector(".login-descript");
  const submitButton = document.querySelector(".submit-btn");
  const customerButton = document.querySelector(".active");

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
});
