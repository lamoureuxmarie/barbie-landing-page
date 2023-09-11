const barbiesSection = document.getElementById("barbies_section")
const star = document.getElementById("star")

document.addEventListener("scroll", function () {
  const currentPosition = window.scrollY;
  console.log(currentPosition)
  if(currentPosition >= 1006 ) {
    star.classList.add("sticky")
  } else {
    star.classList.remove("sticky")
  }
});
