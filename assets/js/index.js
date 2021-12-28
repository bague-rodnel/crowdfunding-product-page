/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.querySelector(".navbar");
  if (this.scrollY >= 56) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);
