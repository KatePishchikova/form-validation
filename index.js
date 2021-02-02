const Name = document.getElementById("name");
const last = document.getElementById("last");
const phone = document.getElementById("phone");
const button = document.getElementById("button");
const nameError = document.querySelector(".p-name");
const lastError = document.querySelector(".p-last");
const phoneError = document.querySelector(".p-number");
const body = document.querySelector("body");
let readyToSubmitcounter = 0;

function submitReady() {
    if (readyToSubmitcounter < 3) {
        readyToSubmitcounter++;
    }
    if (readyToSubmitcounter >= 3) {
        button.disabled = false;
        button.style.backgroundColor = "#242424";
    }
}

function submitNotReady() {
    readyToSubmitcounter--;
    if (readyToSubmitcounter < 3) {
        button.disabled = true;
        button.style.backgroundColor = "#CACACA";
    }
}

Name.addEventListener("change", (event) => {
    if (event.target.value === "") {
        nameError.innerText = "This field cannot be empty.";
        Name.style.border = "1px solid #FF3838";
        submitNotReady();
    } else {
        nameError.innerText = "";
        Name.style.border = "1px solid #E0E0E0";
        submitReady();
    }
});

last.addEventListener("change", (event) => {
    if (event.target.value === "") {
        lastError.innerText = "This field cannot be empty.";
        last.style.border = "1px solid #FF3838";
        submitNotReady();
    } else {
        lastError.innerText = "";
        last.style.border = "1px solid #E0E0E0";
        submitReady();
    }
});

phone.addEventListener("change", (event) => {
    if (event.target.value === "") {
        phoneError.innerText = "This field cannot be empty.";
        phone.style.border = "1px solid #FF3838";
        submitNotReady();
    } else if (!Number.isInteger(Number(event.target.value)) || event.target.value.trim().length <= 9) {
        phoneError.innerText = "You must provide a valid phone number";
        phone.style.border = "1px solid #FF3838";
    } else {
        phoneError.innerText = "";
        phone.style.border = "1px solid #E0E0E0";
        submitReady();
    }
});

function send() {
    console.log('First name : ' + Name.value);
    console.log('Last name : ' + last.value);
    console.log('User phone number: ' + phone.value);
}
