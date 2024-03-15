const hasTooltips = document.querySelectorAll('.has-tooltip');

hasTooltips.forEach(hasTooltip => {
  let div = document.createElement('div');
  div.className = 'tooltip';
  div.textContent = hasTooltip.getAttribute('title');
  hasTooltip.insertAdjacentElement('afterend', div);
});


const tooltips = document.querySelectorAll('.tooltip');

hasTooltips.forEach(hasTooltip => {
  hasTooltip.addEventListener('click', (e) => {
    e.preventDefault();
    const {top, bottom, left, right} = hasTooltip.getBoundingClientRect();
    const checkTtActivate = document.getElementsByClassName('tooltip_active');

    /*if (checkTtActivate.length > 0) {
      checkTtActivate.classList.toggle('tooltip_active');
    }*/
    
    hasTooltip.nextElementSibling.setAttribute('style', `left: ${left}px; top: ${bottom}px`);
    //hasTooltip.nextElementSibling.classList.toggle('tooltip_active');
    
    if (hasTooltip.nextElementSibling.classList.contains('tooltip_active')) {
      hasTooltip.nextElementSibling.classList.toggle('tooltip_active');
    } else if (!hasTooltip.nextElementSibling.classList.contains('tooltip_active')) {
      if (checkTtActivate.length > 0) {
        checkTtActivate[0].classList.toggle('tooltip_active');
      }
      hasTooltip.nextElementSibling.classList.toggle('tooltip_active');
    }
  });
});

/*
window.addEventListener('scroll', () => {
  tooltips.forEach(tooltip => {
    const {top, bottom} = tooltip.getBoundingClientRect();

    if ((bottom < 0 || top > window.innerHeight) & tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.toggle('tooltip_active');
    } else if (bottom >= 0 & top <= window.innerHeight & !tooltip.classList.contains('tooltip_active')) {
      tooltip.classList.toggle('tooltip_active');
    }
  })
});
*/