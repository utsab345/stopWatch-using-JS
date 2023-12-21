let startBtn =document.querySelector(".startBtn");
let resetBtn =document.querySelector(".resetBtn");
let pauseBtn =document.querySelector(".pauseBtn");
let timer =document.querySelector(".timer");


let [ss,mm,hh]=[0,0,0];
let timerId =null;

startBtn.addEventListener("click",()=>{
    if(timerId !== null){
        clearInterval(timerId);
    }
   timerId= setInterval(start,1000);
})

pauseBtn.addEventListener("click",()=>{
clearInterval(timerId);
})

resetBtn.addEventListener("click",()=>{
    clearInterval(timerId);
    [ss,mm,hh]=[0,0,0];
    timer.innerHTML="00:00:00";
})

function start(){
    ss++;
    if(ss==60){
        ss=0;
        mm++;
        if(mm==60){
            hh++;
            mm=0;
        }
    }

  let  hrs =hh<10? "0" + hh : hh;
  let  min =mm<10? "0" + mm : mm;
  let  sec =ss<10? "0" + ss : ss;
  
    timer.innerHTML=`${hrs}:${min}:${sec}`;
}

