let head = document.querySelector("h2");
let btns = [".red", ".orange", ".blue", ".green"];

let level = 0;
let gameSeq = [];
let userSeq = [];
console.dir(document);



function btnFlash(btn) {
    btn.classList.add("flash");

    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    document.bgColor = "white";
    console.log("value of level" + level);
    level++;
    head.innerText = "Game Started\nLevel " + level;

    let idx = Math.floor(Math.random() * 4);
    let color = btns[idx];
    let btn = document.querySelector(color);
    
    btnFlash(btn);
    gameSeq.push(color);

    console.log(gameSeq);
}

function reset() {
    userSeq = [];
    gameSeq = [];
    level = 0;
    started = false;

    
}

function checkColor(idx) {
    // Implement the logic to check user sequence against game sequence
    if(userSeq[idx] == gameSeq[idx]) {

        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {

       head.innerText = "Game Over!!\nPress any Key to Restart\nYour Score of the Game is " + (level-1);
       document.bgColor = "red";   

       console.log("reset will be called now");
       reset();
    }

}

function buttonPress(pressedBtn) {
    btnFlash(pressedBtn);
    let color = pressedBtn.getAttribute("id");
    // console.log("adding in user sequence : " , color);
    userSeq.push("."+color);
    console.log(userSeq);
    checkColor(userSeq.length-1);
}

document.addEventListener("keypress", function() {
    head.innerText = "Game Started";
    levelUp();
});

let bttns = document.querySelectorAll(".btn");
for (let b of bttns) {
    b.addEventListener("click", function() {
        buttonPress(this);
    });
}
