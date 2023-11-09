var timer = 60;
var score = 0;
var hitrn = 0;


function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent= score;
}

function makeHiter(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
    }
    

function makeBubble(){
clutter="";

for (var i=1;i<=160;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div id="ball">${rn}</div>`;
}

document.querySelector("#panelbtm").innerHTML = clutter;
}


function makeTimer(){
var timerint = setInterval(function(){
    if(timer>0){
        timer--;
        document.querySelector("#timeset").textContent = timer;
    }else{
        clearInterval(timerint);
        document.querySelector("#panelbtm").innerHTML=`<h1>Game Over <br> Your total score ${score}</h1>`;
    }
    
}, 1000)
}

document.querySelector("#panelbtm")
.addEventListener("click",function(dets){
    var clickn = Number(dets.target.textContent);
    if (clickn === hitrn){
        increaseScore();
        makeBubble();
        makeHiter();
    }
});

makeHiter();
makeBubble();
makeTimer();