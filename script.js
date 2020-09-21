const curr_one = document.getElementById("currency-one");
const curr_two = document.getElementById("currency-two");
const amount_one = document.getElementById("amount-one");
const amount_two = document.getElementById("amount-two");

const rateEle = document.getElementById("rate");
const swap = document.getElementById("swap");

//Fetch exchange rates and update the DOM
function calculate() {
  const curr_one_val = curr_one.value;
  const curr_two_val = curr_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${curr_one_val}`)
    .then(res => res.json())
    .then(data => {
      //console.log(data))
      const rate = data.rates[curr_two_val];
      
      rateEle.innerText = `1 ${curr_one_val} = ${rate} ${curr_two_val}`;

      amount_two.value = (amount_one.value * rate).toFixed(2);


    });
}

//Event Listeners
curr_one.addEventListener("change", calculate);
amount_one.addEventListener("input", calculate);
curr_two.addEventListener("change", calculate);
amount_one.addEventListener("change", calculate);

swap.addEventListener('click', () => {
  temp = curr_one.value;
  curr_one.value = curr_two.value;
  curr_two.value = temp;
  calculate();
})
