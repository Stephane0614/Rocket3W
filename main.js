// ************************************** compte a rebours ********************************************
let timer = 20;
let button;
let timelaps;
let billboard;
let disable;
let rocket;
let buttonReset={
    green:"style\images\firing-button.png",
    red:"style\images\cancel-button.png"
}
let rocketStart = {
    start: "C:\Users\pheni\CODE\Rocket\style\images\rocket2.gif",
    fly: "C:\Users\pheni\CODE\Rocket\style\images\rocket3.gif",
};


const main = () => {
    billboard = document.querySelector("#billboard span");
    button = document.getElementById("firing-button");
    rocket = document.getElementById("rocket");
    button.addEventListener('click', disable);
};

disable = () => {
    button.classList.add("disabled");
    rocket.src = rocketStart.start;
    timelaps();
}

timelaps = () => {
    billboard.innerText = timer;
    timer--;
    if (timer >= 0) {
        setTimeout(timelaps, 1000);
    }
    else {
        clearTimeout(timelaps);
        button.classList.remove("disabled");
        button.src=buttonReset.red;
        takeOff();
    };
};

const takeOff = () => {
    rocket.src = rocketStart.fly;
    rocket.classList.add("tookOff");
   
};


addEventListener('load', main);