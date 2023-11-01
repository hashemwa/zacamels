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

  function calculateZakahAmount(numCamels) {
    let zakahResult = "N/A";

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
      zakahResult = "2 Musinnahs";
    } else if (numCamels >= 90 && numCamels <= 99) {
      zakahResult = "3 Tabī's";
    } else if (numCamels >= 100 && numCamels <= 109) {
      zakahResult = "2 Tabī'ahs + 1 Musinnah";
    } else if (numCamels % 120 === 0) {
      const musinnahCount = numCamels / 40;
      const tabiCount = numCamels / 30;
      zakahResult = musinnahCount + " Musinnahs/" + tabiCount + " Tabīs";
    } else if (numCamels % 40 === 0) {
      const musinnahCount = numCamels / 40;
      zakahResult = musinnahCount + " Musinnahs";
    } else if (numCamels % 30 === 0) {
      const tabiCount = numCamels / 30;
      zakahResult = tabiCount + " Tabīs";
    } else {
      // For numbers outside the specific conditions
      let remainingCamels = numCamels;
      let musinnahCount = 0;
      let tabiCount = 0;

      while (remainingCamels >= 40) {
        remainingCamels -= 40;
        musinnahCount++;
      }

      while (remainingCamels >= 30) {
        remainingCamels -= 30;
        tabiCount++;
      }

      if (remainingCamels === 0) {
        zakahResult = musinnahCount + " Musinnahs and " + tabiCount + " Tabīs";
      }
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

  const newWidth = minWidth + characters * 11;

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
  if (this.value > 1000000000) {
    this.value = 1000000000;
  }
  if (this.value < 0) {
    this.value = 0;
  }
});
