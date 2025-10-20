document.addEventListener("DOMContentLoaded", () => {
const eye = document.querySelector(".unhide-eye")
const passwordInput = document.querySelector(".password-input")
const slashEye = document.querySelector(".hide-eye")

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


