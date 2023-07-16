var shadegreen = document.querySelector(".shadegreen");
var shadered = document.querySelector(".shadered");
var overviewSection = document.querySelector(".overviewSection");
var outlinedTitleText = document.querySelector(".outlinedTitleText");
var titleBlock = document.querySelector(".titleBlock");
var imageArea = document.querySelector(".imageArea");
var overviewDesc = document.querySelector(".overviewDesc");

window.addEventListener("scroll", () => {
  let windowY = window.scrollY;
  let overviewSectionRect = overviewSection.getBoundingClientRect();
  if (overviewSectionRect.y < 350) {
    outlinedTitleText.style.opacity = 1;
    outlinedTitleText.style.transform = "translateY(10px)";
  } else {
    outlinedTitleText.style.opacity = 0;
    outlinedTitleText.style.transform = "translateY(-10px)";
  }

  if (overviewSectionRect.y < 200) {
    titleBlock.style.opacity = 1;
    titleBlock.style.transform = "translateY(10px)";
  } else {
    titleBlock.style.opacity = 0;
    titleBlock.style.transform = "translateY(-10px)";
  }

  if (overviewSectionRect.y < 550) {
    imageArea.style.opacity = 1;
    imageArea.style.transform = "translateY(10px)";
  } else {
    imageArea.style.opacity = 0;
    imageArea.style.transform = "translateY(-10px)";
  }
  if (overviewSectionRect.y < 30) {
    overviewDesc.style.opacity = 1;
    overviewDesc.style.transform = "translateY(10px) scale(1)";
  } else {
    overviewDesc.style.opacity = 0;
    overviewDesc.style.transform = "translateY(-10px) scale(0.7)";
  }
});
