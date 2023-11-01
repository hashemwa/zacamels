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

    if (numCamels < 5) {
      zakahResult = "Nothing";
    } else if (numCamels >= 5 && numCamels <= 24) {
      zakahResult = `${Math.floor(numCamels / 5)} Sheep/Goats`;
    } else if (numCamels >= 25 && numCamels <= 75) {
      if (numCamels >= 25 && numCamels <= 35) {
        zakah = 1;
      } else if (numCamels >= 36 && numCamels <= 45) {
        zakah = 2;
      } else if (numCamels >= 46 && numCamels <= 60) {
        zakah = 3;
      } else if (numCamels >= 61) {
        zakah = 4;
      }
      zakahResult = `1 ${camelLookup[zakah]}`;
    } else if (numCamels >= 76 && numCamels <= 124) {
      if (numCamels >= 76 && numCamels <= 90) {
        zakah = 2;
      } else if (numCamels >= 90) {
        zakah = 3;
      }
      zakahResult = `2 ${camelLookup[zakah]}`;
    } else if (numCamels >= 125 && numCamels <= 144) {
      zakahResult = `2 ${camelLookup[3]} and ${Math.floor(
        (numCamels - 120) / 5
      )} Sheep/Goats`;
    } else if (numCamels >= 145 && numCamels <= 149) {
      zakahResult = `2 ${camelLookup[3]} and 1 ${camelLookup[1]}`;
    } else if (numCamels >= 150 && numCamels <= 154) {
      zakahResult = `3 ${camelLookup[3]}`;
    } else if (numCamels >= 155 && numCamels <= 174) {
      zakahResult = `3 ${camelLookup[3]} and ${Math.floor(
        (numCamels - 150) / 5
      )} Sheep/Goats`;
    } else if (numCamels >= 175 && numCamels <= 185) {
      zakahResult = `3 ${camelLookup[3]} and 1 ${camelLookup[1]}`;
    } else if (numCamels >= 186 && numCamels <= 195) {
      zakahResult = `3 ${camelLookup[3]} and 1 ${camelLookup[2]}`;
    } else if (numCamels >= 196 && numCamels <= 200) {
      zakahResult = `4 ${camelLookup[3]}`;
    } else {
      zakahResult = calculateZakahAmount250(numCamels);
    }
    if (zakahResult.endsWith("Sheep/Goats")) {
      zakahResult = zakahResult.replace("1 Sheep/Goats", "1 Sheep/Goat");
    }
    if (zakahResult.endsWith("Bint Labūns")) {
      zakahResult = zakahResult.replace("1 Bint Labūns", "1 Bint Labūn");
    }
    if (zakahResult.endsWith("Hiqqahs")) {
      zakahResult = zakahResult.replace("1 Hiqqahs", "1 Hiqqah");
    }
    if (numCamels >= 1000) {
      zakahResult = formatNumberWithCommas(zakahResult);
    }
    zakahResult = zakahResult.replace(" and ", " + ");
    return zakahResult;
  }

  function calculateZakahAmount250(numCamels) {
    let x = numCamels;
    let addHiqqahs = 0;
    while (x >= 200) {
      x = x - 50;
      addHiqqahs++;
    }
    const zakahResult = calculateZakahAmount(x);
    const numHiqqahs = addHiqqahs + parseInt(zakahResult[0]);
    return numHiqqahs + zakahResult.slice(1);
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

const camelLookup = {
  0: "",
  1: "Bint Makhād",
  2: "Bint Labūns",
  3: "Hiqqahs",
  4: "Jadha'ah",
};

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
  if (this.value >= 1000000) {
    zakahResult.textContent = "No one has that many camels...";
    zakahResult.style.color = "black";
    zakahResult.style.opacity = 0;
    zakahResult.classList.remove("fade-in");
    setTimeout(function () {
      zakahResult.style.opacity = 1;
      zakahResult.classList.add("fade-in");
    }, 100);
  }
  if (this.value < 1000000) {
    zakahResult.textContent = "";
  }
  if (this.value > 50000000) {
    this.value = 50000000;
  }
  if (this.value < 0) {
    this.value = 0;
  }
});
