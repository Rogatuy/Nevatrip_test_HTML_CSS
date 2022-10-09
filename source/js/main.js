// РАБОТА СО ВРЕМЕНЕМ ПОЕЗДОК

//Отображение иконок времени

function childElements(node) {
  let elems = new Array();
  const children = node.childNodes;
    for (let i=0 ;i < children.length ; i++) {
      if (children[i].nodeType===document.ELEMENT_NODE) {
        elems.push(children[i]);
      }
    }
  return elems;
  }

const listsOfTimes = document.querySelectorAll('ul .catalog-item__times');

const displayElements = () => {
  for (let i = 0; i < listsOfTimes.length; i++) {
    const elementsOfList = childElements(listsOfTimes[i]);
    if (elementsOfList.length > 5) {
      let elementsTimes = listsOfTimes[i].querySelectorAll('.catalog-item__times--link');
      for ( let i = 3; i < elementsTimes.length; i++) {
        elementsTimes[i].classList.add('visually-hidden');
      }
    const buttonAdditionally = listsOfTimes[i].querySelector('.catalog-item__times--button');
    buttonAdditionally.classList.remove('visually-hidden');
    }
  }
}

displayElements();

// Отображение новых табличек по клику на кнопку

const buttonsAllTimes = document.getElementsByClassName('catalog-item__times--button');

for (let i = 0; i < buttonsAllTimes.length; i++) {
  const buttonAlltimes = buttonsAllTimes[i];
  if (buttonAlltimes.className === 'catalog-item__times catalog-item__times--button') {
    buttonAlltimes.onclick = function() {
      const timesList = this.parentNode;
      const times = timesList.getElementsByClassName('catalog-item__times--link');
      for ( let i = 3; i < times.length; i++) {
        times[i].classList.remove('visually-hidden');
        }
    buttonAlltimes.classList.add('visually-hidden');
    }
  }
};


// РАБОТА С ВЫРАВНИВАНИЕМ ЦЕНЫ

const sectionPrice = document.querySelectorAll('section .catalog-item__price');

const alignPrice = () => {
  for (let i = 0; i < sectionPrice.length; i++) {
    const elementsOfPrice = childElements(sectionPrice[i]);
    if (elementsOfPrice.length ===  1) {
      elementsOfPrice[0].style.textAlign = 'center';
    }
  }
}

alignPrice();







