const todo_play_btn = document.querySelector('.todo-play-btn');
const reset_btn = document.querySelector('.reset-btn');
const todo_time = document.querySelector('.todo-time');

let min = 25;
let second = 00;
let millisecond = 100;
let secposition = '';

function StartStopWatch() {

  let interval;

  this.start = () => {

    interval = setInterval(() => {
      millisecond -= 1;  /*遞減*/

      if (millisecond <= 0) {
        second -= 1;
        millisecond = 100;
      }
      if (second <= 0) {
        min -= 1;
        second = 59;
      }

      if (second == 59 && millisecond == 100 && min == -1) {
        stop();
        min = 5;
        second = 0;
        millisecond = 0;
      }

      //second position
      if (second < 10) {
        secposition = '0'; /*09 08 07 06 05 04 03 02 01的呈現樣式*/
      } else {
        secposition = '';
      }

      // todo_time.innerHTML = `${min}:${secposition}${second}.${millisecond}`;
      todo_time.innerHTML = `${min}:${secposition}${second}`;
    }, 10);
    this.isOn = true;


  }


  this.stop = () => {
    clearInterval(interval);
    this.isOn = false;

  }

};

//開始暫停按鈕
let stopwatch = new StartStopWatch(); /*new創立一個新的物件並且繼承StartStopWatch相關屬性 */
console.log(stopwatch)

function start() {
  stopwatch.start();
  todo_play_btn.innerHTML = `<i class="material-icons"style="font-size: 68px;">stop</i></i>`;
}

function stop() {
  stopwatch.stop();
  todo_play_btn.innerHTML = `<i class="material-icons"style="font-size: 68px;">play_arrow</i></i>`;
}

todo_play_btn.addEventListener('click', function () {
  // stopwatch.isOn ? stop() : start(); /*三元運算子 如果stopwatch.isOn為真就執行stop()否則start()*/
  if (stopwatch.isOn == true) {
    stop();
  } else {
    start();
  }

}, false);





function resetbtn() {
  stop();
  todo_time.innerHTML = `25:00`;
}


reset_btn.addEventListener('click', resetbtn, false);