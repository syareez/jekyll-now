// get objects
let b = document.body,
d = document,
cont = document.getElementsByClassName('cont')[0],
bubCont = document.getElementsByClassName('bub-cont')[0],
objects = document.getElementsByClassName('element'),
elBody = [],
elBodyChange = [],
hits = 0,
bday = document.getElementsByClassName('bday')[0];
let colors = [
'#D81CB8',
'#05A542',
'#DE215F',
'#1CD8CE',
'#1B3F3D'];


// legs juggling
// store legs
for (let i = 0; i < 10; i++) {
  elBody[i] = document.getElementsByClassName(`element-body-${i}`);
}
// store data
elBodyChange[0] = [
'<img src="open-arm.svg" width="270">'];

elBodyChange[1] = [
'<img src="open-arm.svg" width="270">'];

elBodyChange[2] = [
'<img src="open-arm.svg" width="270">'];


// move legs
setInterval(() => {
  myLoop({
    cd: 2,
    dur: 150,
    cb: ({
      cd }) =>
    {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < elBody[i].length - 1; j++) {
          elBody[i][j].setAttribute('d', elBodyChange[cd][i]);
        }
      }
    } });

}, 500);

// detect mouse pos
b.addEventListener('mousemove', event => {
  mouseMove(event.pageX, event.pageY, objects);
});
b.addEventListener('touchmove', event => {
  mouseMove(event.touches[0].pageX, event.touches[0].pageY, objects);
});

function mouseMove(hoverX, hoverY, objects) {
  let halfWidth = window.innerWidth / 2;
  let halfHeight = window.innerHeight / 2;

  let xDeg = -(halfWidth - hoverX) / 2;
  let yDeg = (halfHeight - hoverY) / 2;

  for (let i = 0; i < objects.length; i++) {
    let e = objects[i];
    if (i < 15) {
      if (e.classList.contains('diamond')) {
        e.style.transform = 'rotate(45deg) translate3D(' + xDeg + '%, ' + yDeg + '%, 0)';
      } else if (e.classList.contains('circle')) {
        e.style.transform = 'rotate(-20deg) translate3D(' + xDeg + '%, ' + yDeg + '%, 0)';
      } else {
        e.style.transform = 'translate3D(' + xDeg + '%, ' + yDeg + '%, 0)';
      }
    } else if (e.classList.contains('circle')) {
      e.style.transform = 'rotate(340deg) translate3D(' + xDeg / 2 + '%, ' + yDeg / 2 + '%, 0)';
    } else {
      if (e.classList.contains('diamond')) {
        e.style.transform = 'rotate(45deg) translate3D(' + xDeg / 2 + '%, ' + yDeg / 2 + '%, 0)';
      } else {
        e.style.transform = 'translate3D(' + xDeg / 2 + '%, ' + yDeg / 2 + '%, 0)';
      }
    }
  }
};

// click handle
for (let i = 0; i < objects.length; i++) {
  objects[i].addEventListener('click', () => {
    for (let j = 0; j < 21; j++) {
      let bub = [];
      bub[j] = new Bubble(objects[i]);
    }
    objects[i].classList.add('element--explode');
    bday.innerHTML += text[hits];
    hits++;
  });
}

class Bubble {
  constructor(e) {
    this.e = createElement('span', 'bubble');
    this.e.style.top = e.offsetTop + 'px';
    this.e.style.left = e.offsetLeft + 'px';
    this.e.style.borderColor = colors[random(0, colors.length - 1)];
    if (e.classList.contains('circle')) {
      this.e.classList.add('circle');
    }
    bubCont.appendChild(this.e);
    setTimeout(() => {
      bubCont.removeChild(this.e);
    }, 1000);
  }}


/* start Hidden, you can’t read this */
const text = ['H', 'a', 'p', 'p', 'y', ' ', 'B', 'i', 'r', 't', 'h', 'd', 'a', 'y', ' ', 'M', 'a', 'r', 'i', 'a', ' !'];
/* end Hidden */

/******************************/
/* Functions for an easy life */
/******************************/
// createElement(tag, classList, value)
function createElement(tag, classList, value = '') {
  let el = d.createElement(tag);
  el.className = classList;
  el.innerHTML = value;
  return el;
}
// random(min, max);
// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// myLoop
// pass number of iterations and dur in ms and counter
function myLoop({
  cd = 0,
  dur = 100,
  cu = 0,
  cb,
  final })
{
  // passes usefull stuff to callback and augmet the count up by 1
  cb({
    cd,
    dur,
    cu });

  cu++;
  // decrement cd and call myLoop again if cd >= 0
  if (--cd >= 0) {
    setTimeout(function () {
      myLoop({
        cd: cd,
        dur: dur,
        cu: cu,
        cb: cb });

    }, dur);
  }
}