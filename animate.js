const movingSpan = document.querySelector(".movingSpan");
const span = document.querySelector("nav ul");
const lis = document.querySelectorAll("nav ul li a");

function handleMouseOver(){
  const coords = this.getBoundingClientRect();
  movingSpan.style.cssText = `
  width: ${coords.width + 3}px;
  height: ${coords.height - 10}px;
  `;
  movingSpan.style.top = 0;
  movingSpan.style.left = 0;
  movingSpan.style.transform = `translate(${coords.left + window.scrollX - 1}px, ${coords.top + window.scrollY}px)`;
  
  movingSpan.classList.add('on')
  setTimeout(() => movingSpan.classList.contains('on') && movingSpan.classList.add('on-active'), 150);
}

lis.forEach(x => {
  x.addEventListener("mouseover", handleMouseOver);
});

span.parentElement.addEventListener("mouseleave", () => movingSpan.classList.remove('on', 'on-ative'))

