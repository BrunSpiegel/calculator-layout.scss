const $numberButtons = document.querySelectorAll(
  ".calculator__buttons--number"
);
const $operatorButtons = document.querySelectorAll(
  ".calculator__buttons--operator"
);
const $inputGetNumbers = document.querySelector(".calculator__display-input");
const $result = document.querySelector(".calculator__display-result");
const $equalsButton = document.querySelector(".calculator__buttons--equals")

let calculate = "";

$numberButtons.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;
    
    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});

$operatorButtons.forEach(function ($button) {
  $button.addEventListener("click", function () {
    calculate = calculate + $button.textContent;

    $inputGetNumbers.value = calculate.replaceAll(" ", "");
  });
});

$equalsButton.addEventListener('click', function () {
  $result.textContent = eval(calculate);
})
