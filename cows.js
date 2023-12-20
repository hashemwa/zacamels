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
    numCamels = Math.floor(numCamels / 10) * 10;
    if (numCamels < 30) {
      zakahResult = "Nothing";
    } else if (numCamels >= 40 && numCamels <= 59) {
      zakahResult = "1 Musinn/Musinnah";
    } else if (numCamels >= 30 && numCamels <= 39) {
      zakahResult = "1 Tabī'/Tabī'ah";
    } else if (numCamels >= 60 && numCamels <= 69) {
      zakahResult = "2 Tabī's/Tabī'ahs";
    } else if (numCamels >= 70 && numCamels <= 79) {
      zakahResult = "1 Musinnah + 1 Tabī";
    } else if (numCamels >= 80 && numCamels <= 89) {
      zakahResult = "2 Musinns";
    } else if (numCamels >= 90 && numCamels <= 99) {
      zakahResult = "3 Tabī'ahs";
    } else if (numCamels >= 100 && numCamels <= 109) {
      zakahResult = "2 Tabī's + 1 Musinnah";
    } else if (numCamels % 120 === 0) {
      const musinnahCount = numCamels / 40;
      const tabiCount = numCamels / 30;
      zakahResult = tabiCount + " Tabī's/" + musinnahCount + " Musinnahs";
    } else if (numCamels % 40 === 0) {
      const musinnahCount = numCamels / 40;
      zakahResult = musinnahCount + " Musinnahs";
    } else if (numCamels % 30 === 0) {
      const tabiCount = numCamels / 30;
      zakahResult = tabiCount + " Tabī's";
    } else {
      // Handle numbers not divisible by 30 or 40
      let tabiCount = 0;
      let musinnahCount = 0;
      while (numCamels % 40 !== 0) {
        numCamels -= 30;
        tabiCount += 1;
      }

      musinnahCount = Math.floor(numCamels / 40);

      zakahResult = tabiCount + " Tabī's + " + musinnahCount + " Musinnahs";
    }
    if (zakahResult.match(/\b1 Tabī's\b/)) {
      zakahResult = zakahResult.replace(/\b1 Tabī's\b/, "1 Tabī'");
    }
    if (zakahResult.match(/\b1 Musinnahs\b/)) {
      zakahResult = zakahResult.replace(/\b1 Musinnahs\b/, "1 Musinnah");
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
    zakahResult.textContent = "No one has that many cows...";
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
