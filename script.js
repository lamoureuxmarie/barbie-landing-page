const barbiesSection = document.getElementById("barbies_section")
const star = document.getElementById("star")

document.addEventListener("scroll", function () {
  const currentPosition = window.scrollY;
  // console.log(currentPosition)
  if(currentPosition >= 1006 ) {
    star.classList.add("sticky")
  } else {
    star.classList.remove("sticky")
  }
});

const allanTemplate = document.getElementById('allan');
const allanContainer = document.getElementById('allanContainer');

document.getElementById('allanBtn').addEventListener('click', function (event) {
  event.preventDefault();
  const numberOfClones = 80;
  const delayBetweenClones = 80;

  allanContainer.classList.remove('d-none')

  for (let i = 0; i < numberOfClones; i++) {
    setTimeout(function () {
      const allanClone = allanTemplate.content.cloneNode(true);

      // Calculate random positions for the clones relative to the allanContainer
      const randomX = Math.floor(Math.random() * (allanContainer.offsetWidth - 50));
      const randomY = Math.floor(Math.random() * (allanContainer.offsetHeight - 50));

      // Apply random positions
      allanClone.firstElementChild.style.position = 'absolute';
      allanClone.firstElementChild.style.left = `${randomX}px`;
      allanClone.firstElementChild.style.top = `${randomY}px`;

      allanContainer.appendChild(allanClone);
    }, i * delayBetweenClones);
  }

  const durationBeforeDisappearing = 8000;

  setTimeout(function () {
    // Remove allanContainer contents
    allanContainer.innerHTML = '';
    allanContainer.classList.add('d-none');
  }, durationBeforeDisappearing);
});
