const time_el=document.querySelector('.watch .time')
const start_btn= document.getElementById("start");
const pause_btn= document.getElementById("pause");
const reset_btn= document.getElementById("reset");

let seconds=0;
let interval=null;

start_btn.addEventListener('click' ,start)
pause_btn.addEventListener('click' ,pause)
reset_btn.addEventListener('click' ,reset)

function timer(){
    seconds++;
    
    let hr=Math.floor(seconds/3600);
     let mins=Math.floor((seconds-(hr*3600))/60);
     let secs=seconds%60;
  
    
    if (secs<10) secs="0"+secs;
    if (mins<10) mins="0"+mins;
    if (hr<10) hr="0"+hr;

    time_el.innerText=`${hr}:${mins}:${secs}`;
   
}
function start(){
    if(interval){
        return;
    }
    interval=setInterval(timer, 1000);//calls the timer function every 1k ms or 1s
}
function pause(){
clearInterval(interval);
interval=null;
}
function reset(){
    pause();
     seconds=0;
 
    time_el.innerText="00:00:00"
}
