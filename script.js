
// elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const title = document.getElementById("letter-title");
const orcaImg = document.getElementById("letter-orca");
const finalText = document.getElementById("final-text");


// clicing envemlpoe

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

