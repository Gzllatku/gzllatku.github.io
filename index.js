const windowWidth = window.innerWidth;
const horizontalLength = document.querySelector(".element-wrapper").scrollWidth;

const distFromTop = document.querySelector(".horizontal-section").offsetTop;

const scrollDistance = distFromTop + horizontalLength - windowWidth;

const boxes = document.querySelectorAll(".box");

function checkBoxes() {
  const trigger = (window.innerHeight / 5) * 3;
  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < trigger) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

function changeImg(imgchanger) {
  document.getElementById("slider").src = imgchanger;
}

document.querySelector(".horizontal-section").style.height =
  horizontalLength + "px";

window.addEventListener("scroll", (e) => {
  const scrollTop = window.pageYOffset;

  if (scrollTop >= distFromTop && scrollTop <= scrollDistance) {
    document.querySelector(".element-wrapper").style.transform =
      "translateX(-" + (scrollTop - distFromTop) + "px )";
    document.querySelector(".navbar").style.position = "";
  }
  checkBoxes();
});
