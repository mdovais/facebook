const headerLogoBorders = document.getElementsByClassName("slection");
let prevClickedElement = null;

for (let i = 0; i < headerLogoBorders.length; i++) {
  headerLogoBorders[i].addEventListener("click", function () {
    if (prevClickedElement !== null) {
      prevClickedElement.style.borderBottom = "none";
    }
    this.style.borderBottom = "2px solid blue";
    prevClickedElement = this;
  });
}

const imgNew = document.getElementById("txtnew");
const imgOld = document.getElementById("txt19old");

imgOld.addEventListener("click", function () {
  imgNew.style.display = "flex";
  this.remove();
});

const imgNew1 = document.getElementById("txtnew1");
const imgOld2 = document.getElementById("txt19old1");

imgOld2.addEventListener("click", function () {
  imgNew1.style.display = "flex";
  this.remove();
});
