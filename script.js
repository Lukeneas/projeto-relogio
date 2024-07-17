//PARA Funcionar, é essencial transform-origin:left

let digitalElement = document.querySelector(".digital");
let sElement = document.querySelector(".p_s");
let mElement = document.querySelector(".p_m");
let hElement = document.querySelector(".p_h");

//360/60
//6*time


const uptadeClock = () => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  hElement.style.transform = `rotate(${30*hour - 90}deg)`;
  mElement.style.transform = `rotate(${6*minute - 90}deg)`;
  sElement.style.transform = `rotate(${6*second - 90}deg)`;

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`;
};

const fixZero = (number) => (number < 10 ? `0${number}` : number);

setInterval(uptadeClock, 1000);
