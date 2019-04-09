window.onload = function() {
  /* closure for checkboxes */
  function Counter() {
    let count = 0;
    return () => ++count;
  }

  const checkForCheese = new Counter();
  const checkForWine = new Counter();
  const checkForButter = new Counter();

  /* Discharge for header */
  const cheeseFarm = document.querySelector('#CheeseFarm');
  cheeseFarm.classList.add('linkNow');

  /* 3 text which change when radio button is active */
  const ascending = document.querySelector('#Ascending');
  const descending = document.querySelector('#Descending');
  const rating = document.querySelector('#Rating');

  /* 3 text which change when checkbox button is active */
  const goodCheese = document.querySelector('#goodCheese');
  const goodWine = document.querySelector('#goodWine');
  const goodButter = document.querySelector('#goodButter');

  /* =========== Radio Buttons =========== */
  document.querySelector('#sort-asc').addEventListener('click', () => {
    sortList('data-price');
  });

  document.querySelector('#sort-desc').addEventListener('click', () => {
    sortListDesc('data-price');
  });
  document.querySelector('#sort-rating').addEventListener('click', () => {
    sortListDesc('data-rating');
    sortListRating();
  });

  /* =========== CheckBoxes =========== */

  /* Change font-weght to checkbox cheese  and show or hide this */
  document.querySelector('#checkCheese').addEventListener('click', () => {
    sortGoods(checkForCheese, goodCheese, 'cheese');
  });

  /* Change font-weght to checkbox wine  and show or hide this */
  document.querySelector('#checkWine').addEventListener('click', () => {
    sortGoods(checkForWine, goodWine, 'wine');
  });

  /* Change font-weght to checkbox butter  and show or hide this */
  document.querySelector('#checkButter').addEventListener('click', () => {
    sortGoods(checkForButter, goodButter, 'butter');
  });

  /* You can sort goods by cheese wine butter (checkboxes) */
  function sortGoods(counter, goodWhat, good) {
    function forSortGoods(isNone) {
      const items = document.querySelector('#goodsWrap');
      for (let i = 0; i < items.children.length; i++) {
        if (items.children[i].getAttribute('data-good') === good) {
          items.children[i].style.display = `${isNone}`;
        }
      }
    }

    if (counter() % 2 == 0) {
      goodWhat.style.fontWeight = '400';
      forSortGoods('');
    } else {
      goodWhat.style.fontWeight = '200';
      forSortGoods('none');
    }
  }

  /* asc function */
  function sortList(sortType) {
    /* Give 400 css font-weight to asc */
    ascending.classList.add('entry-label-bolder');
    descending.classList.remove('entry-label-bolder');
    rating.classList.remove('entry-label-bolder');

    const items = document.querySelector('#goodsWrap');
    for (let i = 0; i < items.children.length - 1; i++) {
      for (let j = i; j < items.children.length; j++) {
        if (
          +items.children[i].getAttribute(sortType) >
          +items.children[j].getAttribute(sortType)
        ) {
          const replacedNode = items.replaceChild(
            items.children[j],
            items.children[i]
          );
          insertAfter(replacedNode, items.children[i]);
        }
      }
    }
  }

  /* desc function + rating function;
  It depends from the parameter sortType, which passed to the function */
  function sortListDesc(sortType) {
    /* Give 400 css font-weight to desc */
    ascending.classList.remove('entry-label-bolder');
    descending.classList.add('entry-label-bolder');
    rating.classList.remove('entry-label-bolder');

    const items = document.querySelector('#goodsWrap');
    for (let i = 0; i < items.children.length - 1; i++) {
      for (let j = i; j < items.children.length; j++) {
        if (
          +items.children[i].getAttribute(sortType) <
          +items.children[j].getAttribute(sortType)
        ) {
          const replacedNode = items.replaceChild(
            items.children[j],
            items.children[i]
          );
          insertAfter(replacedNode, items.children[i]);
        }
      }
    }
  }

  /* Give 400 css font-weight to rating */
  function sortListRating() {
    ascending.classList.remove('entry-label-bolder');
    descending.classList.remove('entry-label-bolder');
    rating.classList.add('entry-label-bolder');
  }

  /* to save during sorting */
  function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
  }

  /* ================Double Slider================= */
  setTimeout(
    init2slider(
      'containerOuter__doubleSlider__twoButtons',
      'containerOuter__doubleSlider__rangeBetweenTwoButtons',
      'containerOuter__doubleSlider__twoButtons__firstButton',
      'containerOuter__doubleSlider__twoButtons__secondButton',
      'containerOuter__doubleSlider__twoButtons__firstInput',
      'containerOuter__doubleSlider__twoButtons__secondInput'
    ),
    0
  );

  function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
    const slider = document.getElementById(idX);
    const between = document.getElementById(btwX);
    const button1 = document.getElementById(btn1X);
    const button2 = document.getElementById(btn2X);
    const inpt1 = document.getElementById(input1);
    const inpt2 = document.getElementById(input2);

    const {min} = inpt1;
    const {max} = inpt1;

    /* init */
    const sliderCoords = getCoords(slider);
    button1.style.marginLeft = '0px';
    button2.style.marginLeft = `${slider.offsetWidth - button1.offsetWidth  }px`;
    between.style.width = `${slider.offsetWidth - button1.offsetWidth  }px`;
    inpt1.value = min;
    inpt2.value = max;

    inpt1.onchange = function(evt) {
      if (parseInt(inpt1.value) < min) inpt1.value = min;
      if (parseInt(inpt1.value) > max) inpt1.value = max;
      if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
        const temp = inpt1.value;
        inpt1.value = inpt2.value;
        inpt2.value = temp;
      }

      const sliderCoords = getCoords(slider);
      const per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
      const per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
      const left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
      const left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

      button1.style.marginLeft = `${left1}px`;
      button2.style.marginLeft = `${left2}px`;

      if (left1 > left2) {
        between.style.width = `${left1 - left2  }px`;
        between.style.marginLeft = `${left2}px`;
      } else {
        between.style.width = `${left2 - left1  }px`;
        between.style.marginLeft = `${left1}px`;
      }
    };
    inpt2.onchange = function(evt) {
      if (parseInt(inpt2.value) < min) inpt2.value = min;
      if (parseInt(inpt2.value) > max) inpt2.value = max;
      if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
        const temp = inpt1.value;
        inpt1.value = inpt2.value;
        inpt2.value = temp;
      }

      const sliderCoords = getCoords(slider);
      const per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
      const per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
      const left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
      const left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

      button1.style.marginLeft = `${left1}px`;
      button2.style.marginLeft = `${left2}px`;

      if (left1 > left2) {
        between.style.width = `${left1 - left2  }px`;
        between.style.marginLeft = `${left2}px`;
      } else {
        between.style.width = `${left2 - left1  }px`;
        between.style.marginLeft = `${left1}px`;
      }
    };

    /* mouse */
    button1.onmousedown = function(evt) {
      const sliderCoords = getCoords(slider);
      (betweenCoords = getCoords(between)),
        (buttonCoords1 = getCoords(button1)),
        (buttonCoords2 = getCoords(button2)),
        (shiftX2 = evt.pageX - buttonCoords2.left),
        (shiftX1 = evt.pageX - buttonCoords1.left);

      document.onmousemove = function(evt) {
        let left1 = evt.pageX - shiftX1 - sliderCoords.left;
        const right1 = slider.offsetWidth - button1.offsetWidth;
        if (left1 < 0) left1 = 0;
        if (left1 > right1) left1 = right1;
        button1.style.marginLeft = `${left1}px`;

        shiftX2 = evt.pageX - buttonCoords2.left;
        let left2 = evt.pageX - shiftX2 - sliderCoords.left;
        const right2 = slider.offsetWidth - button2.offsetWidth;
        if (left2 < 0) left2 = 0;
        if (left2 > right2) left2 = right2;

        let per_min = 0;
        let per_max = 0;
        if (left1 > left2) {
          between.style.width = `${left1 - left2  }px`;
          between.style.marginLeft = `${left2}px`;

          per_min = (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
          per_max = (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
        } else {
          between.style.width = `${left2 - left1  }px`;
          between.style.marginLeft = `${left1}px`;

          per_min = (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
          per_max = (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
        }
        inpt1.value = parseInt(min) + Math.round(((max - min) * per_min) / 100);

        function forMinSortGoodsSlider() {
          const items = document.querySelector('#goodsWrap');
          for (let i = 0; i < items.children.length; i++) {
            if (
              +items.children[i].getAttribute('data-price') < +inpt2.value &&
              +items.children[i].getAttribute('data-price') > +inpt1.value
            ) {
              items.children[i].style.display = '';
            } else {
              items.children[i].style.display = 'none';
            }
          }
        }
        forMinSortGoodsSlider();

        inpt2.value = parseInt(min) + Math.round(((max - min) * per_max) / 100);
      };
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };
      return false;
    };

    button2.onmousedown = function(evt) {
      const sliderCoords = getCoords(slider);
      const betweenCoords = getCoords(between);
      const buttonCoords1 = getCoords(button1);
      const buttonCoords2 = getCoords(button2);
      const shiftX2 = evt.pageX - buttonCoords2.left;
      let shiftX1 = evt.pageX - buttonCoords1.left;

      document.onmousemove = function(evt) {
        let left2 = evt.pageX - shiftX2 - sliderCoords.left;
        const right2 = slider.offsetWidth - button2.offsetWidth;
        if (left2 < 0) left2 = 0;
        if (left2 > right2) left2 = right2;
        button2.style.marginLeft = `${left2}px`;

        shiftX1 = evt.pageX - buttonCoords1.left;
        let left1 = evt.pageX - shiftX1 - sliderCoords.left;
        const right1 = slider.offsetWidth - button1.offsetWidth;
        if (left1 < 0) left1 = 0;
        if (left1 > right1) left1 = right1;

        let per_min = 0;
        let per_max = 0;

        if (left1 > left2) {
          between.style.width = `${left1 - left2  }px`;
          between.style.marginLeft = `${left2}px`;
          per_min = (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
          per_max = (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
        } else {
          between.style.width = `${left2 - left1  }px`;
          between.style.marginLeft = `${left1}px`;
          per_min = (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
          per_max = (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
        }

        inpt1.value = parseInt(min) + Math.round(((max - min) * per_min) / 100);
        inpt2.value = parseInt(min) + Math.round(((max - min) * per_max) / 100);

        function forMaxSortGoodsSlider() {
          const items = document.querySelector('#goodsWrap');
          for (let i = 0; i < items.children.length; i++) {
            if (
              +items.children[i].getAttribute('data-price') < +inpt2.value &&
              +items.children[i].getAttribute('data-price') > +inpt1.value
            ) {
              items.children[i].style.display = '';
            } else {
              items.children[i].style.display = 'none';
            }
          }
        }
        forMaxSortGoodsSlider();
      };

      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
      };
      return false;
    };

    button1.ondragstart = function() {
      return false;
    };
    button2.ondragstart = function() {
      return false;
    };

    function getCoords(elem) {
      const box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
      };
    }
  }
};
