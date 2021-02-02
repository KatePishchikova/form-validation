const input = document.querySelector("#phone");
let number = "";

const iti = window.intlTelInput(input, {
// any options go here
autoPlaceholder: "off",
utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
separateDialCode: true,
allowDropDown: false,
initialCountry: "ua"
});

document.getElementById("phone").addEventListener("change", () => {
    number = iti.getNumber(intlTelInputUtils.numberFormat.E164);
});
