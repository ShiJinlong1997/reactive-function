import { link, effect } from '../index.js';

/**
 * 初始化计数器组件
 * @param {HTMLDivElement} elem 
 */
function setupCounter(elem) {
  let count = 10;

  function setCount(sign) {
    count = count + sign;
    effect(setCount);
  }
  
  function double() {
    return count * 2
  };

  const [decButton, spanElem, incButton] = Array.from(elem.children);
  decButton.addEventListener('click', () => { setCount(-1) });
  incButton.addEventListener('click', () => { setCount(+1) });

  render();
  link(render, setCount);
  
  function render() {
    spanElem.textContent = `${count} * 2 = ${double()}`;
  }
}

function main() {
  setupCounter(document.getElementById('counter'));
}

main();
