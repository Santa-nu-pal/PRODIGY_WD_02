const buttons = document.querySelectorAll(".button");
const lapsbutton = document.getElementById("laps");
const resetbutton = document.getElementById("reset");
const lapswriting=document.querySelector(".lapswriting");
const ul = document.getElementById("ul");
let count = 0;
let lapshaseventlistener=0;
lapswriting.classList.add("hidden");

buttons.forEach(button => {
    button.addEventListener("mouseenter", function () {

        button.classList.add("afterhover");
    });

    button.addEventListener("mouseleave", function () {

        button.classList.remove("afterhover");
    });
})

const laps = document.getElementById("laps");
const start = document.getElementById("start");
const reset = document.getElementById("reset");


let hrs = 0;
let min = 0;
let sec = 0;
let ms = 0;

let timeinterval;


start.addEventListener("click", () => {
    lapsbutton.style.display = "block";
    resetbutton.style.display = "block";
    const timer = document.querySelector(".timer");


    if (start.innerText === "START") {
       
        start.innerText = "STOP";
        if (!timeinterval) {


            timeinterval = setInterval(() => {
                ms++;
                if (ms == 100) {
                    sec++;
                    ms = 0;
                }
                if (sec == 60) {
                    min++;
                    sec = 0;
                }

                if (min == 60) {
                    hrs++;
                    min = 0;
                }
                timer.innerHTML = `${zeropad(hrs)} : ${zeropad(min)} : ${zeropad(sec)} : ${zeropad(ms)}`;
            }, 10);
            const zeropad = (num) => {
                return String(num).padStart(2, "0");
            };
            if(!lapshaseventlistener){
            lapshaseventlistener=1;
            lapsbutton.addEventListener("click", () => {
                lapswriting.classList.remove("hidden");
                count++;
                let li = document.createElement("li");
                li.innerHTML = `${count} :- ${zeropad(hrs)} : ${zeropad(min)} : ${zeropad(sec)} : ${zeropad(ms)}`;
                ul.appendChild(li);
            });
        }

        }
    }
    else if (start.innerText === "STOP") {

        clearInterval(timeinterval);
        timeinterval = null;
        start.innerText = "START";

    }

    start.addEventListener("mouseenter", () => {
        if (start.innerText === "START") {
            start.classList.add("afterhover");
        } else if (start.innerText === "STOP") {
            start.classList.add("stopafterhover");
        }
    });

    start.addEventListener("mouseleave", () => {
        start.classList.remove("afterhover");
        start.classList.remove("stopafterhover");
    });

    
        resetbutton.addEventListener("click", () => {
            hrs=min=sec=ms=0;
            ul.innerHTML="";
            clearInterval(timeinterval);
            timeinterval = null;
            start.innerText = "START";
            timer.innerHTML="00 : 00 : 00 : 00";
            count=0;
            lapswriting.classList.add("hidden");
            lapsbutton.style.display = "none";
            resetbutton.style.display = "none";
        });
    

});


