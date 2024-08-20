
let btnEmail = document.querySelector(".btn-email");
let myEmail = document.querySelector(".email");

if (window.localStorage.getItem("change")) {
    myEmail.disabled = JSON.parse(window.localStorage.getItem("change"));
}
if (window.localStorage.getItem("cur")) {
    myEmail.style.cursor = window.localStorage.getItem("cur");
}

btnEmail.addEventListener("click", function () {
    if (myEmail.disabled) {
        myEmail.disabled = false;
        myEmail.style.cursor="unset";
    } else {
        myEmail.disabled = true;
        myEmail.style.cursor = "no-drop";
    }
    window.localStorage.setItem("change", myEmail.disabled);
    window.localStorage.setItem("cur", myEmail.style.cursor);
});

