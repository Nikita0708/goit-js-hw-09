// const getTimerTemplate = () => `<div class="timer">
//   <span class="value">yyyy-mm-dd hh:mm:ss</span>
//   <button data-action="start">start</button>
//   <button data-action="stop" disabled>stop</button>
//   <button data-action="clear">clear</button>
//   <input data-action="setTime" type="phone" placeholder="enter ms" />

// </div>`;

// export class Timer {
//   constructor({ selector, value = 1 }) {
//     this.value = value;
//     this.parent = document.querySelector(selector);
//     this.parent.insertAdjacentHTML('beforeend', getTimerTemplate());

//     this.valueSpan = this.parent.querySelector('.value');
//     this.startBtn = this.parent.querySelector('[data-action="start"]');
//     this.stopBtn = this.parent.querySelector('[data-action="stop"]');
//     this.clearBtn = this.parent.querySelector('[data-action="clear"]');
//     this.inputEL = this.parent.querySelector('[data-action="setTime"]');

//     this.startBtn.addEventListener('click', this.start.bind(this));
//     this.stopBtn.addEventListener('click', this.stop.bind(this));
//     this.clearBtn.addEventListener('click', this.clear.bind(this));
//     this.inputEL.addEventListener('input', this.input.bind(this));

//     this.render();
//   }
//   clear() {
//     this.value = 0;
//     this.valueSpan.textContent = this.value;
//   }
//   render() {
//     this.valueSpan.textContent = this.value;
//     this.value += 1;
//   }
//   input(event) {
//     this.ms = event.currentTarget.value;
//   }
//   start() {
//     this.timerId = setInterval(this.render.bind(this), this.ms);
//     this.startBtn.setAttribute('disabled', true);
//     this.stopBtn.removeAttribute('disabled');
//   }
//   stop() {
//     clearInterval(this.timerId);
//     this.stopBtn.setAttribute('disabled', true);
//     this.startBtn.removeAttribute('disabled');
//   }
// }

// const timer1 = new Timer({ selector: '#timer-1', value: 10 });
// const timer2 = new Timer({ selector: '#timer-2' });
// const timer3 = new Timer({ selector: '#timer-3' });
