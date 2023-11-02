function calculateZakah() {
  const zakahResultElement = document.getElementById("zakahResult");
  const numCamels = parseInt(document.getElementById("numCamels").value);
  if (isNaN(numCamels)) {
    zakahResultElement.textContent = "Enter a number!";
    zakahResultElement.style.color = "hsl(0, 51%, 54%)";
    zakahResultElement.style.opacity = 0;
    zakahResultElement.classList.remove("fade-in");

    setTimeout(function () {
      zakahResultElement.style.opacity = 1;
      zakahResultElement.classList.add("fade-in");
    }, 100);

    return;
  }
  const zakah = calculateZakahAmount(numCamels);
  const paragraph = document.getElementById("zakahResult");
  paragraph.style.opacity = 0;
  paragraph.classList.remove("fade-in");

  setTimeout(function () {
    paragraph.textContent = zakah;
    paragraph.style.color = "";
    paragraph.style.opacity = 1;
    paragraph.classList.add("fade-in");
  }, 0);

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function calculateZakahAmount(numCamels) {
    let zakahResult = "N/A";
    let zakah = null;

    if (numCamels < 40) {
      zakahResult = "Nothing";
    } else if (numCamels >= 40 && numCamels <= 120) {
      zakahResult = "1 Sheep/Goat";
    } else if (numCamels >= 121 && numCamels <= 200) {
      zakahResult = "2 Sheep/Goats";
    } else if (numCamels >= 201 && numCamels <= 399) {
      zakahResult = "3 Sheep/Goats";
    } else if (numCamels >= 400) {
      const extraSheepGoats = Math.floor((numCamels - 400) / 100);
      zakahResult = `${extraSheepGoats + 4} Sheep/Goats`;
    }
    if (numCamels >= 1000) {
      zakahResult = formatNumberWithCommas(zakahResult);
    }

    return zakahResult;
  }
}

const numCamels = document.getElementById("numCamels");

numCamels.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    button.click();
  }
});
let arrowRotated = false;

function toggleArrowAndKey() {
  const arrow = document.querySelector("#arrow");
  const key = document.getElementById("key");
  arrow.classList.toggle("collapsed");
  if (arrowRotated) {
    arrow.style.transform = "rotate(0deg)";
    arrowRotated = false;
    key.style.transform = "translateY(-450px)";
  } else {
    arrow.style.transform = "rotate(180deg)";
    arrowRotated = true;
    key.style.transform = "translateY(15px)";
  }
}

const numCamelsInput = document.getElementById("numCamels");

numCamelsInput.addEventListener("input", function () {
  const inputValue = this.value;
  const characters = inputValue.length;
  const minWidth = 70;

  const newWidth = minWidth + characters * 10;

  this.style.width = newWidth + "px";
});

const input = document.getElementById("numCamels");
input.addEventListener("input", function () {
  if (this.value >= 10000000) {
    zakahResult.textContent = "No one has that many sheep...";
    zakahResult.style.color = "black";
    zakahResult.style.opacity = 0;
    zakahResult.classList.remove("fade-in");
    setTimeout(function () {
      zakahResult.style.opacity = 1;
      zakahResult.classList.add("fade-in");
    }, 100);
  }
  if (this.value < 10000000) {
    zakahResult.textContent = "";
  }
  if (this.value > 10000000) {
    this.value = 10000000;
  }
  if (this.value < 0) {
    this.value = 0;
  }
});
