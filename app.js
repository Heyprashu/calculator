//output area and history
const outputArea = document.querySelector("#outputArea");
const history = document.querySelector("#history");

// global variable declaration
let x, y;
// numbers 1 2 3 4 5 6 7 8 9 0 00
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const doubleZero = document.querySelector("#doubleZero");
const decimal = document.querySelector("#decimal");

// operators + - * / % = B CS
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const clearScreen = document.querySelector("#clearScreen");
const back = document.querySelector("#back");
const result = document.querySelector("#result");

// events  1 2 3 4 5 6 7 8 9 0 00
one.addEventListener("click", num1);
two.addEventListener("click", num2);
three.addEventListener("click", num3);
four.addEventListener("click", num4);
five.addEventListener("click", num5);
six.addEventListener("click", num6);
seven.addEventListener("click", num7);
eight.addEventListener("click", num8);
nine.addEventListener("click", num9);
zero.addEventListener("click", numZero);
doubleZero.addEventListener("click", numDoubleZero);
decimal.addEventListener("click", dot);

// events add sub div mult percent equalsto back clearscreen
plus.addEventListener("click", add);
minus.addEventListener("click", sub);
multiply.addEventListener("click", count);
divide.addEventListener("click", div);
back.addEventListener("click", backspace);
clearScreen.addEventListener("click", clearAll);
result.addEventListener("click", reslt);

// output area function
function dis(val) {
  outputArea.value += val;
}
// function numbers space
function num1() {
  dis("1");
}
function dot() {
  dis(".");
}
function num2() {
  dis("2");
}
function num3() {
  dis("3");
}
function num4() {
  dis("4");
}
function num5() {
  dis("5");
}
function num6() {
  dis("6");
}
function num7() {
  dis("7");
}
function num8() {
  dis("8");
}
function num9() {
  dis("9");
}
function numDoubleZero() {
  dis("00");
}
function numZero() {
  dis("0");
}

// function operators space
function add() {
  dis("+");
}
function sub() {
  dis("-");
}
function count() {
  dis("*");
}
function div() {
  dis("/");
}

function backspace() {
  let r = outputArea.value;
  r = r.slice(0, -1);
  outputArea.value = r;
  history.style.display = "none";
}
function clearAll() {
  outputArea.value = "";
}
function reslt() {
  //output
  x = outputArea.value;
  y = eval(x);
  outputArea.value = y;

  // history panel
  history.style.display = "block";
  history.innerText = `${x} = ${y}`;
}
