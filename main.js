const celsiusInput = document.querySelector("#celtemp > input");
const fahrenheitInput = document.querySelector("#fartemp > input");

function roundNumber(num){
	return Math.round(num*100)/100;
}

function celsiusToFahrenheit(){
	const cTemp = parseFloat(celsiusInput.value);
	const fTemp = (cTemp * (9/5)) + 32;
	fahrenheitInput.value = roundNumber(fTemp);
}

function fahrnheitToCelsius(){
	const fTemp = parseFloat(fahrenheitInput.value);
	const cTemp = (fTemp - 32) * (5/9);
	celsiusInput.value = roundNumber(cTemp);
}


celsiusInput.addEventListener("input", celsiusToFahrenheit);
fahrenheitInput.addEventListener("input", fahrnheitToCelsius);