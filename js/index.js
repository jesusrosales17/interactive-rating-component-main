const cardMain = document.querySelector(".card-main");
const cardThanks = document.querySelector(".thanks");
const btnSubmit = document.querySelector("#btnSubmit");
const numbers = document.querySelectorAll("#number");
const paragraphNumberSelected = document.querySelector("#number-selected");
let numberSelected = 0;

numbers.forEach(number => {
    number.addEventListener("click", () => {
        if(document.querySelector(".selected")) {
            document.querySelector(".selected").classList.remove("selected");
        }
        number.classList.toggle("selected");
        numberSelected = Number(number.textContent);
    });
})
btnSubmit.addEventListener("click", () => {
    if(numberSelected > 0) {
        cardMain.style.display =  "none";
        cardThanks.style.display =  "block";
        paragraphNumberSelected.textContent = `You selected ${numberSelected} out of 5`;
    }
})