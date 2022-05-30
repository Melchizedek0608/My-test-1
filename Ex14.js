const num1 = document.querySelector("#n1");
const num2 = document.querySelector("#n2");
const resultInput = document.querySelector("#result");

const pluButton = document.querySelector("#btn_plu");
const minButton = document.querySelector("#btn_min");
const mulButton = document.querySelector("#btn_mul");
const divButton = document.querySelector("#btn_div");
 
function explu() {
	resultInput.innerHTML = parseInt(num1.value) + parseInt(num2.value);
};

pluButton.addEventListener("click", function(){
	explu();
});

function exmin() {
	resultInput.innerHTML = parseInt(num1.value) - parseInt(num2.value);
};

minButton.addEventListener("click", function(){
	exmin();
});

function exmul() {
	resultInput.innerHTML = parseInt(num1.value) * parseInt(num2.value);
};

mulButton.addEventListener("click", function(){
	exmul();
});

function exdiv() {
	resultInput.innerHTML = parseInt(num1.value) / parseInt(num2.value);
};

divButton.addEventListener("click", function(){
	exdiv();
});
