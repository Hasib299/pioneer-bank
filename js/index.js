
const email = document.getElementById('email')
const password = document.getElementById('password')

if((email.value.length=0 )&& (password.value ='')){
const loginBtn = document.getElementById("loginSubmit");
loginBtn.setAttribute("disabled", "disabled");
    
}

console.log(email.value);

const loginBtn = document.getElementById("loginSubmit");

loginBtn.addEventListener("click", (e) => {
  const logInSection = document.getElementById("login-section");
  logInSection.style.display = "none";

  const transactionSection = document.getElementById("transaction-section");
  transactionSection.style.display = "block";
});

const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

const withdrawInput = document.getElementById("withdrawInput");
const depositInput = document.getElementById("depositInput");

const withdrawDis = document.getElementById("withdrawDis");
const depositDis = document.getElementById("depositDis");
const balanceDis = document.getElementById("balanceDis");

depositBtn.addEventListener("click", (e) => {
    const depositInput = document.getElementById("depositInput");
    const depositDis = document.getElementById("depositDis");
    const balanceDis = document.getElementById("balanceDis");
  depositDis.innerText =
    parseInt(depositDis.innerText) + parseInt(depositInput.value);
  balanceDis.innerText = parseInt(balanceDis.innerText)+parseInt(depositInput.value)
  depositInput.value = ''
});

withdrawBtn.addEventListener('click', (e) =>{
    const withdrawDis = document.getElementById("withdrawDis");
    const withdrawInput = document.getElementById("withdrawInput");
    const balanceDis = document.getElementById("balanceDis");

    withdrawDis.innerText =
      parseInt(withdrawDis.innerText) + parseInt(withdrawInput.value);
    balanceDis.innerText = parseInt(balanceDis.innerText)-parseInt(withdrawInput.value);
    withdrawInput.value = ''
})
