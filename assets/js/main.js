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


//lines
const pathElement1 = document.getElementById("line-1");
const pathElement2 = document.getElementById("line-2");
const pathElement3 = document.getElementById("line-3");
const pathElement4 = document.getElementById("line-4");
const pathElement5 = document.getElementById("line-5");
const pathElement6 = document.getElementById("line-6");


//circles
const circleElement1 = document.getElementById("circle-1");
const circleElement2 = document.getElementById("circle-2");
const circleElement3 = document.getElementById("circle-3");
const circleElement4 = document.getElementById("circle-4");
const circleElement5 = document.getElementById("circle-5");
const circleElement6 = document.getElementById("circle-6");

function handleScroll() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  if(scrollPosition>=1800){
    //lines
    pathElement1.classList.add("active-1");
    pathElement2.classList.add("active-2");
    pathElement3.classList.add("active-3");
    pathElement4.classList.add("active-4");
    pathElement5.classList.add("active-5");
    pathElement6.classList.add("active-6");
    //circles
    circleElement1.classList.add("active-circle-1-6");
    circleElement2.classList.add("active-circle-2");
    circleElement3.classList.add("active-circle-3");
    circleElement4.classList.add("active-circle-4");
    circleElement5.classList.add("active-circle-5");
    circleElement6.classList.add("active-circle-1-6");
  }
  
  // Log the scroll position
  console.log("Scroll position:", scrollPosition);


}

window.addEventListener("scroll", handleScroll);