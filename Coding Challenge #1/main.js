let steps = 1;

let backBtn = document.getElementById("back-btn");
let nextBtn = document.getElementById("next-btn");
let stepIndicator = document.getElementById("step-indicator");
let step_1_Input = document.getElementById("step-1");
let step_2_Input = document.getElementById("step-2");
let step_3_Input = document.getElementById("step-3");
let submitBtn = document.getElementById("submit-btn");

hide();

function handleBack() {
  if (steps !== 1) {
    steps--;
  }
  stepIndicator.innerText = steps;
  hide();
}
function handleNext() {
  if (steps !== 3) {
    steps++;
  }
  stepIndicator.innerText = steps;
  hide();
}

function hide() {
  switch (steps) {
    case 1:
      step_1_Input.classList.remove("hide");
      step_2_Input.classList.add("hide");
      step_3_Input.classList.add("hide");
      submitBtn.classList.add("hide");
      backBtn.classList.add("hide");

      break;
    case 2:
      step_1_Input.classList.add("hide");
      step_2_Input.classList.remove("hide");
      step_3_Input.classList.add("hide");
      submitBtn.classList.add("hide");
      backBtn.classList.remove("hide");
      nextBtn.classList.remove("hide");
      break;
    case 3:
      step_1_Input.classList.add("hide");
      step_2_Input.classList.add("hide");
      step_3_Input.classList.remove("hide");
      submitBtn.classList.remove("hide");
      backBtn.classList.remove("hide");
      nextBtn.classList.add("hide");
      break;

    default:
      break;
  }
}

backBtn.addEventListener("click", handleBack);
nextBtn.addEventListener("click", handleNext);
