const draggableContainer = document.querySelector('.cards');
let isDragging = false;
let startPosX = 0;
let startScrollLeft = 0;

draggableContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPosX = e.clientX;
  startScrollLeft = draggableContainer.scrollLeft;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});

function onMouseMove(e) {
  if (!isDragging) return;

  const dragOffset = e.clientX - startPosX;
  draggableContainer.scrollLeft = startScrollLeft - dragOffset;
}

function onMouseUp() {
  isDragging = false;

  document.removeEventListener('mousemove', onMouseMove);
  document.removeEventListener('mouseup', onMouseUp);
}


const circles = document.querySelectorAll('.circle');
const valuesContainer = document.querySelector('.values-container');
const svg = document.querySelector('svg');
const paragraphs = document.querySelectorAll('.values-paragraphs');

circles.forEach((circle, index) => {
  circle.addEventListener('mouseenter', () => {
    paragraphs.forEach(p => p.style.display = 'none');
    paragraphs[index].style.display = 'block';
    valuesContainer.style.visibility = 'visible';
    valuesContainer.style.clipPath = 'inset(0% 0% 0% 0%)';
    svg.style.filter = 'blur(10px)';
  });

  circle.addEventListener('mouseleave', () => {
    valuesContainer.style.visibility = 'hidden';
    valuesContainer.style.clipPath = 'inset(0% 50% 0% 50%)';
    svg.style.filter = 'blur(0)';
  });
});

valuesContainer.addEventListener('mouseenter', () => {
  valuesContainer.style.visibility = 'visible';
  valuesContainer.style.clipPath = 'inset(0% 0% 0% 0%)';
  svg.style.filter = 'blur(10px)';
});

valuesContainer.addEventListener('mouseleave', () => {
  valuesContainer.style.visibility = 'hidden';
  valuesContainer.style.clipPath = 'inset(0% 50% 0% 50%)';
  svg.style.filter = 'blur(0)';
});



const titleDivs = document.querySelectorAll('.services-list');

titleDivs.forEach((titleDiv) => {
  titleDiv.addEventListener('click', () => {
    const servicesDetails = titleDiv.nextElementSibling;
    servicesDetails.classList.toggle('show-details');
  });
});


/////////////////////////////////////////////////////////


const sr = ScrollReveal(
{
  distance: '300px',
  duration: 2500,
  delay: 400,
  //reset: true
}
)

sr.reveal('.right', {delay: 300});
sr.reveal('.home_img',{delay: 600})
sr.reveal('.left', {delay: 100, origin: 'left'})

sr.reveal('.about_description', {delay: 100, origin: 'left', interval: 100})

sr.reveal('.values')

//////////////////////////////////////////////////////////

const pathElements = [
  "line-left-top",
  "line-left-center",
  "line-left-bottom",
  "line-right-top",
  "line-right-center",
  "line-right-bottom",
  "Rectangle",
  "OUR_VALUES",
];

const circleElements = [
  "circles",
  "circles-2",
  "circles-3",
  "circles-4",
  "circles-5",
  "circles-6",
  "Transparency",
  "Creativity",
  "Responsibility",
  "Adaptability",
  "Collaboration",
  "Innovation",
];

function handleScroll() {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 1300) {
    pathElements.forEach((id, index) => {
      const pathElement = document.getElementById(id);
      pathElement.classList.add(`active-${index + 1}`);
    });

    circleElements.forEach((id, index) => {
      const circleElement = document.getElementById(id);
      circleElement.classList.add(`active-circle-${index % 5 + 1}`);
    });
  }

  console.log("Scroll position:", scrollPosition);
}

window.addEventListener("scroll", handleScroll);
