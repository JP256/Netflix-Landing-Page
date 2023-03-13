const tab = document.querySelectorAll(".tab");
const tabNums = document.querySelectorAll(".tab-items-container");

function removeBorder() {
  tab.forEach((i) => i.classList.remove("tab-border"));
}
function removeShow() {
  tabNums.forEach((i) => i.classList.remove("show"));
}
function selection() {
  removeBorder();
  removeShow();
  this.classList.add("tab-border");
  tabNums.forEach((i) => {
    if (i.classList.contains(this.id)) {
      i.classList.add("show");
    }
  });
}

tab.forEach((i) => i.addEventListener("click", selection));
