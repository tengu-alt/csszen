const mainInput = document.querySelector('.selector');
const searchButton = document.querySelector('.selector-find');
const nextBtn = document.querySelector('.selector-next');
const prevBtn = document.querySelector('.selector-prev');
const parentBtn = document.querySelector('.nav-top');
const childBtn = document.querySelector('.nav-bottom');
const prevSib = document.querySelector('.nav-left');
const nextSib = document.querySelector('.nav-right');

const obj = {
  current: '',
  blocked: false,
};
function getValue() {
  const element = document.querySelector(mainInput.value);
  obj.current = element;
}

function setLight(e) {
  e.style.backgroundColor = 'lightblue';
  e.style.outline = 'solid red 5px';
}
function removeLight(e) {
  e.style = null;
}
function load() {
  const element = obj.current;
  if (element.nextElementSibling) {
    nextBtn.disabled = false;
  } else if (!element.nextElementSibling) {
    nextBtn.disabled = true;
  }
  if (element.previousElementSibling) {
    prevBtn.disabled = false;
  } else if (!element.previousElementSibling) {
    prevBtn.disabled = true;
  }
  if (obj.blocked) {
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }
  if (element.parentElement) {
    parentBtn.disabled = false;
  } else if (!element.parentElement) {
    parentBtn.disabled = true;
  }
  if (element.firstElementChild) {
    childBtn.disabled = false;
  } else if (!element.firstElementChild) {
    childBtn.disabled = true;
  }
  if (element.previousElementSibling) {
    prevSib.disabled = false;
  } else if (!element.previousElementSibling) {
    prevSib.disabled = true;
  }
  if (element.nextElementSibling) {
    nextSib.disabled = false;
  } else if (!element.nextElementSibling) {
    nextSib.disabled = true;
  }
}
function search() {
  const element = obj.current;
  setLight(element);
  load();
}
function block() {
  obj.blocked = true;
}
function nextClick() {
  let element = obj.current;
  removeLight(element);
  element = element.nextElementSibling;
  setLight(element);
  obj.current = element;
  load();
}
function prevClick() {
  let element = obj.current;
  removeLight(element);
  element = element.previousElementSibling;
  setLight(element);
  obj.current = element;
  load();
}
function parentClick() {
  block();
  let element = obj.current;
  removeLight(element);
  element = element.parentElement;
  setLight(element);
  obj.current = element;
  load();
}
function childClick() {
  block();
  let element = obj.current;
  removeLight(element);
  element = element.firstElementChild;
  setLight(element);
  obj.current = element;
  load();
}
function prevSibClick() {
  block();
  let element = obj.current;
  removeLight(element);
  element = element.previousElementSibling;
  setLight(element);
  obj.current = element;
  load();
}
function nextSibClick() {
  block();
  let element = obj.current;
  removeLight(element);
  element = element.nextElementSibling;
  setLight(element);
  obj.current = element;
  load();
}
mainInput.addEventListener('input', getValue);
searchButton.addEventListener('click', search);
window.addEventListener('keypress', function event(e) {
  if (e.key === 'Enter') {
    search();
  }
});
nextBtn.addEventListener('click', nextClick);
prevBtn.addEventListener('click', prevClick);
parentBtn.addEventListener('click', parentClick);
childBtn.addEventListener('click', childClick);
prevSib.addEventListener('click', prevSibClick);
nextSib.addEventListener('click', nextSibClick);
