function calculateZakah() {
    const numCamelsInput = document.getElementById("numCamels");
    const zakahResultElement = document.getElementById("zakahResult");
    const numCamels = parseInt(numCamelsInput.value);
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
    var paragraph = document.getElementById("zakahResult");
    paragraph.style.opacity = 0;
    paragraph.classList.remove("fade-in");

    setTimeout(function () {
    paragraph.textContent = zakah + " " + animal;
    paragraph.style.color = "";
    paragraph.style.opacity = 1;
    paragraph.classList.add("fade-in");
  }, 0);
    let animal;

    if (0 <= numCamels && numCamels <= 4) {
        animal = "(No Zakah)";
    } else if (zakah === 1 && 5 <= numCamels && numCamels <= 9) {
        animal = "Sheep/Goat";
    } else if (zakah === 2 && 10 <= numCamels && numCamels <= 14) {
        animal = "Sheep/Goats";
    } else if (zakah === 3 && 15 <= numCamels && numCamels <= 19) {
        animal = "Sheep/Goats";
    } else if (zakah === 4 && 20 <= numCamels && numCamels <= 24) {
        animal = "Sheep/Goats";
    } else if (zakah === 1 && 25 <= numCamels && numCamels <= 35) {
        animal = "Bint Makhād";
    } else if (zakah === 1 && 36 <= numCamels && numCamels <= 45) {
        animal = "Bint Labūn";
    } else if (zakah === 1 && 46 <= numCamels && numCamels <= 60) {
        animal = "Hiqqah";
    } else if (zakah === 1 && 61 <= numCamels && numCamels <= 75) {
        animal = "Jadha'ah";
    } else if (zakah === 2 && 76 <= numCamels && numCamels <= 90) {
        animal = "Bint Labūns";
    } else if (zakah === 2 && 91 <= numCamels && numCamels <= 124) {
        animal = "Hiqqahs";
    } else if (zakah === 2 && 125 <= numCamels && numCamels <= 129) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 2 && 130 <= numCamels && numCamels <= 134) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 2 && 135 <= numCamels && numCamels <= 139) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 2 && 140 <= numCamels && numCamels <= 144) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 2 && 145 <= numCamels && numCamels <= 149) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 3 && 150 <= numCamels && numCamels <= 154) {
        animal = "Hiqqahs";
    } else if (zakah === 3 && 155 <= numCamels && numCamels <= 159) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 3 && 160 <= numCamels && numCamels <= 164) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 3 && 165 <= numCamels && numCamels <= 169) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 3 && 170 <= numCamels && numCamels <= 174) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 3 && 175 <= numCamels && numCamels <= 185) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 3 && 186 <= numCamels && numCamels <= 195) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 4 && 196 <= numCamels && numCamels <= 204) {
        animal = "Hiqqahs";
    }else if (zakah === 4 && 205 <= numCamels && numCamels <= 209) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 4 && 210 <= numCamels && numCamels <= 214) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 4 && 215 <= numCamels && numCamels <= 219) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 4 && 220 <= numCamels && numCamels <= 224) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 4 && 225 <= numCamels && numCamels <= 235) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 4 && 236 <= numCamels && numCamels <= 245) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 5 && 246 <= numCamels && numCamels <= 254) {
        animal = "Hiqqahs";
    } else if (zakah === 5 && 255 <= numCamels && numCamels <= 259) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 5 && 260 <= numCamels && numCamels <= 264) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 5 && 265 <= numCamels && numCamels <= 269) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 5 && 270 <= numCamels && numCamels <= 274) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 5 && 275 <= numCamels && numCamels <= 285) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 5 && 286 <= numCamels && numCamels <= 295) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 6 && 296 <= numCamels && numCamels <= 304) {
        animal = "Hiqqahs";
    } else if (zakah === 6 && 305 <= numCamels && numCamels <= 309) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 6 && 310 <= numCamels && numCamels <= 314) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 6 && 315 <= numCamels && numCamels <= 319) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 6 && 320 <= numCamels && numCamels <= 324) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 6 && 325 <= numCamels && numCamels <= 335) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 6 && 336 <= numCamels && numCamels <= 345) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 7 && 346 <= numCamels && numCamels <= 354) {
        animal = "Hiqqahs";
    } else if (zakah === 7 && 355 <= numCamels && numCamels <= 359) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 7 && 360 <= numCamels && numCamels <= 364) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 7 && 365 <= numCamels && numCamels <= 369) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 7 && 370 <= numCamels && numCamels <= 374) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 7 && 375 <= numCamels && numCamels <= 385) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 7 && 386 <= numCamels && numCamels <= 395) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 8 && 396 <= numCamels && numCamels <= 404) {
        animal = "Hiqqahs";
    } else if (zakah === 8 && 405 <= numCamels && numCamels <= 409) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 8 && 410 <= numCamels && numCamels <= 414) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 8 && 415 <= numCamels && numCamels <= 419) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 8 && 420 <= numCamels && numCamels <= 424) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 8 && 425 <= numCamels && numCamels <= 435) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 8 && 436 <= numCamels && numCamels <= 445) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 9 && 446 <= numCamels && numCamels <= 454) {
        animal = "Hiqqahs";
    } else if (zakah === 9 && 455 <= numCamels && numCamels <= 459) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 9 && 460 <= numCamels && numCamels <= 464) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 9 && 465 <= numCamels && numCamels <= 469) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 9 && 470 <= numCamels && numCamels <= 474) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 9 && 475 <= numCamels && numCamels <= 485) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 9 && 486 <= numCamels && numCamels <= 495) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 10 && 496 <= numCamels && numCamels <= 504) {
        animal = "Hiqqahs";
    } else if (zakah === 10 && 505 <= numCamels && numCamels <= 509) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 10 && 510 <= numCamels && numCamels <= 514) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 10 && 515 <= numCamels && numCamels <= 519) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 10 && 520 <= numCamels && numCamels <= 524) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 10 && 525 <= numCamels && numCamels <= 535) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 10 && 536 <= numCamels && numCamels <= 545) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 11 && 546 <= numCamels && numCamels <= 554) {
        animal = "Hiqqahs";
    } else if (zakah === 11 && 555 <= numCamels && numCamels <= 559) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 11 && 560 <= numCamels && numCamels <= 564) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 11 && 565 <= numCamels && numCamels <= 569) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 11 && 570 <= numCamels && numCamels <= 574) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 11 && 575 <= numCamels && numCamels <= 585) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 11 && 586 <= numCamels && numCamels <= 595) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 12 && 596 <= numCamels && numCamels <= 604) {
        animal = "Hiqqahs";
    } else if (zakah === 12 && 605 <= numCamels && numCamels <= 609) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 12 && 610 <= numCamels && numCamels <= 614) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 12 && 615 <= numCamels && numCamels <= 619) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 12 && 620 <= numCamels && numCamels <= 624) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 12 && 625 <= numCamels && numCamels <= 635) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 12 && 636 <= numCamels && numCamels <= 645) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 13 && 646 <= numCamels && numCamels <= 654) {
        animal = "Hiqqahs";
    } else if (zakah === 13 && 655 <= numCamels && numCamels <= 659) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 13 && 660 <= numCamels && numCamels <= 664) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 13 && 665 <= numCamels && numCamels <= 669) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 13 && 670 <= numCamels && numCamels <= 674) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 13 && 675 <= numCamels && numCamels <= 685) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 13 && 686 <= numCamels && numCamels <= 695) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 14 && 696 <= numCamels && numCamels <= 704) {
        animal = "Hiqqahs";
    } else if (zakah === 14 && 705 <= numCamels && numCamels <= 709) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 14 && 710 <= numCamels && numCamels <= 714) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 14 && 715 <= numCamels && numCamels <= 719) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 14 && 720 <= numCamels && numCamels <= 724) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 14 && 725 <= numCamels && numCamels <= 735) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 14 && 736 <= numCamels && numCamels <= 745) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 15 && 746 <= numCamels && numCamels <= 754) {
        animal = "Hiqqahs";
    } else if (zakah === 15 && 755 <= numCamels && numCamels <= 759) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 15 && 760 <= numCamels && numCamels <= 764) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 15 && 765 <= numCamels && numCamels <= 769) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 15 && 770 <= numCamels && numCamels <= 774) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 15 && 775 <= numCamels && numCamels <= 785) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 15 && 786 <= numCamels && numCamels <= 795) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 16 && 796 <= numCamels && numCamels <= 804) {
        animal = "Hiqqahs";
    } else if (zakah === 16 && 805 <= numCamels && numCamels <= 809) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 16 && 810 <= numCamels && numCamels <= 814) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 16 && 815 <= numCamels && numCamels <= 819) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 16 && 820 <= numCamels && numCamels <= 824) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 16 && 825 <= numCamels && numCamels <= 835) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 16 && 836 <= numCamels && numCamels <= 845) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 17 && 846 <= numCamels && numCamels <= 854) {
        animal = "Hiqqahs";
    } else if (zakah === 17 && 855 <= numCamels && numCamels <= 859) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 17 && 860 <= numCamels && numCamels <= 864) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 17 && 865 <= numCamels && numCamels <= 869) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 17 && 870 <= numCamels && numCamels <= 874) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 17 && 875 <= numCamels && numCamels <= 885) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 17 && 886 <= numCamels && numCamels <= 895) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 18 && 896 <= numCamels && numCamels <= 904) {
        animal = "Hiqqahs";
    } else if (zakah === 18 && 905 <= numCamels && numCamels <= 909) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 18 && 910 <= numCamels && numCamels <= 914) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 18 && 915 <= numCamels && numCamels <= 919) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 18 && 920 <= numCamels && numCamels <= 924) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 18 && 925 <= numCamels && numCamels <= 935) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 18 && 936 <= numCamels && numCamels <= 945) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 19 && 946 <= numCamels && numCamels <= 954) {
        animal = "Hiqqahs";
    } else if (zakah === 19 && 955 <= numCamels && numCamels <= 959) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 19 && 960 <= numCamels && numCamels <= 964) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 19 && 965 <= numCamels && numCamels <= 969) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 19 && 970 <= numCamels && numCamels <= 974) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 19 && 975 <= numCamels && numCamels <= 985) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 19 && 986 <= numCamels && numCamels <= 995) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 20 && 996 <= numCamels && numCamels <= 1004) {
        animal = "Hiqqahs";
    } else if (zakah === 20 && 1005 <= numCamels && numCamels <= 1009) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 20 && 1010 <= numCamels && numCamels <= 1014) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 20 && 1015 <= numCamels && numCamels <= 1019) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 20 && 1020 <= numCamels && numCamels <= 1024) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 20 && 1025 <= numCamels && numCamels <= 1035) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 20 && 1036 <= numCamels && numCamels <= 1045) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 21 && 1046 <= numCamels && numCamels <= 1054) {
        animal = "Hiqqahs";
    } else if (zakah === 21 && 1055 <= numCamels && numCamels <= 1059) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 21 && 1060 <= numCamels && numCamels <= 1064) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 21 && 1065 <= numCamels && numCamels <= 1069) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 21 && 1070 <= numCamels && numCamels <= 1074) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 21 && 1075 <= numCamels && numCamels <= 1085) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 21 && 1086 <= numCamels && numCamels <= 1095) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 22 && 1096 <= numCamels && numCamels <= 1104) {
        animal = "Hiqqahs";
    } else if (zakah === 22 && 1105 <= numCamels && numCamels <= 1109) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 22 && 1110 <= numCamels && numCamels <= 1114) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 22 && 1115 <= numCamels && numCamels <= 1119) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 22 && 1120 <= numCamels && numCamels <= 1124) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 22 && 1125 <= numCamels && numCamels <= 1135) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 22 && 1136 <= numCamels && numCamels <= 1145) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 23 && 1146 <= numCamels && numCamels <= 1154) {
        animal = "Hiqqahs";
    } else if (zakah === 23 && 1155 <= numCamels && numCamels <= 1159) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 23 && 1160 <= numCamels && numCamels <= 1164) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 23 && 1165 <= numCamels && numCamels <= 1169) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 23 && 1170 <= numCamels && numCamels <= 1174) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 23 && 1175 <= numCamels && numCamels <= 1185) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 23 && 1186 <= numCamels && numCamels <= 1195) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 24 && 1196 <= numCamels && numCamels <= 1204) {
        animal = "Hiqqahs";
    } else if (zakah === 24 && 1205 <= numCamels && numCamels <= 1209) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 24 && 1210 <= numCamels && numCamels <= 1214) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 24 && 1215 <= numCamels && numCamels <= 1219) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 24 && 1220 <= numCamels && numCamels <= 1224) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 24 && 1225 <= numCamels && numCamels <= 1235) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 24 && 1236 <= numCamels && numCamels <= 1245) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 25 && 1246 <= numCamels && numCamels <= 1254) {
        animal = "Hiqqahs";
    } else if (zakah === 25 && 1255 <= numCamels && numCamels <= 1259) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 25 && 1260 <= numCamels && numCamels <= 1264) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 25 && 1265 <= numCamels && numCamels <= 1269) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 25 && 1270 <= numCamels && numCamels <= 1274) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 25 && 1275 <= numCamels && numCamels <= 1285) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 25 && 1286 <= numCamels && numCamels <= 1295) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 26 && 1296 <= numCamels && numCamels <= 1304) {
        animal = "Hiqqahs";
    } else if (zakah === 26 && 1305 <= numCamels && numCamels <= 1309) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 26 && 1310 <= numCamels && numCamels <= 1314) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 26 && 1315 <= numCamels && numCamels <= 1319) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 26 && 1320 <= numCamels && numCamels <= 1324) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 26 && 1325 <= numCamels && numCamels <= 1335) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 26 && 1336 <= numCamels && numCamels <= 1345) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 27 && 1346 <= numCamels && numCamels <= 1354) {
        animal = "Hiqqahs";
    } else if (zakah === 27 && 1355 <= numCamels && numCamels <= 1359) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 27 && 1360 <= numCamels && numCamels <= 1364) {
        animal = "Hiqqahs + 2 Sheep/Goat";
    } else if (zakah === 27 && 1365 <= numCamels && numCamels <= 1369) {
        animal = "Hiqqahs + 3 Sheep/Goat";
    } else if (zakah === 27 && 1370 <= numCamels && numCamels <= 1374) {
        animal = "Hiqqahs + 4 Sheep/Goat";
    } else if (zakah === 27 && 1375 <= numCamels && numCamels <= 1385) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 27 && 1386 <= numCamels && numCamels <= 1395) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 28 && 1396 <= numCamels && numCamels <= 1404) {
        animal = "Hiqqahs";
    } else if (zakah === 28 && 1405 <= numCamels && numCamels <= 1409) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 28 && 1410 <= numCamels && numCamels <= 1414) {
        animal = "Hiqqahs + 2 Sheep/Goat";
    } else if (zakah === 28 && 1415 <= numCamels && numCamels <= 1419) {
        animal = "Hiqqahs + 3 Sheep/Goat";
    } else if (zakah === 28 && 1420 <= numCamels && numCamels <= 1424) {
        animal = "Hiqqahs + 4 Sheep/Goat";
    } else if (zakah === 28 && 1425 <= numCamels && numCamels <= 1435) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 28 && 1436 <= numCamels && numCamels <= 1445) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 29 && 1446 <= numCamels && numCamels <= 1454) {
        animal = "Hiqqahs";
    } else if (zakah === 29 && 1455 <= numCamels && numCamels <= 1459) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 29 && 1460 <= numCamels && numCamels <= 1464) {
        animal = "Hiqqahs + 2 Sheep/Goat";
    } else if (zakah === 29 && 1465 <= numCamels && numCamels <= 1469) {
        animal = "Hiqqahs + 3 Sheep/Goat";
    } else if (zakah === 29 && 1470 <= numCamels && numCamels <= 1474) {
        animal = "Hiqqahs + 4 Sheep/Goat";
    } else if (zakah === 29 && 1475 <= numCamels && numCamels <= 1485) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 29 && 1486 <= numCamels && numCamels <= 1495) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 30 && 1496 <= numCamels && numCamels <= 1504) {
        animal = "Hiqqahs";
    } else if (zakah === 30 && 1505 <= numCamels && numCamels <= 1509) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 30 && 1510 <= numCamels && numCamels <= 1514) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 30 && 1515 <= numCamels && numCamels <= 1519) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 30 && 1520 <= numCamels && numCamels <= 1524) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 30 && 1525 <= numCamels && numCamels <= 1535) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 30 && 1536 <= numCamels && numCamels <= 1545) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 31 && 1546 <= numCamels && numCamels <= 1554) {
        animal = "Hiqqahs";
    } else if (zakah === 31 && 1555 <= numCamels && numCamels <= 1559) {
        animal = "Hiqqahs + 1 Sheep/Goat";
    } else if (zakah === 31 && 1560 <= numCamels && numCamels <= 1564) {
        animal = "Hiqqahs + 2 Sheep/Goats";
    } else if (zakah === 31 && 1565 <= numCamels && numCamels <= 1569) {
        animal = "Hiqqahs + 3 Sheep/Goats";
    } else if (zakah === 31 && 1570 <= numCamels && numCamels <= 1574) {
        animal = "Hiqqahs + 4 Sheep/Goats";
    } else if (zakah === 31 && 1575 <= numCamels && numCamels <= 1585) {
        animal = "Hiqqahs + 1 Bint Makhād";
    } else if (zakah === 31 && 1586 <= numCamels && numCamels <= 1595) {
        animal = "Hiqqahs + 1 Bint Labūn";
    } else if (zakah === 32 && 1596 <= numCamels && numCamels <= 1604) {
        animal = "Hiqqahs";
    }

    
    zakahResultElement.textContent = `${zakah} ${animal}`;
}

function calculateZakahAmount(numCamels) {
    // Define the zakāh rules based on the provided reading
    const zakahRules = [
        [0, 4, 0],
        [5, 9, 1],
        [10, 14, 2],
        [15, 19, 3],
        [20, 24, 4],
        [25, 35, 1],
        [36, 45, 1],
        [46, 60, 1],
        [61, 75, 1],
        [76, 90, 2],
        [91, 124, 2],
        [125, 129, 2],
        [130, 134, 2],
        [135, 139, 2],
        [140, 144, 2],
        [145, 149, 2],
        [150, 154, 3],
        [155, 159, 3],
        [160, 164, 3],
        [165, 169, 3],
        [170, 174, 3],
        [175, 185, 3],
        [186, 195, 3],
        [196, 204, 4],
        [205, 209, 4],
        [210, 214, 4],
        [215, 219, 4],
        [220, 224, 4],
        [225, 235, 4],
        [236, 245, 4],
        [246, 254, 5],
        [255, 259, 5],
        [260, 264, 5],
        [265, 269, 5],
        [270, 274, 5],
        [275, 285, 5],
        [286, 295, 5],
        [296, 304, 6],
        [305, 309, 6],
        [310, 314, 6],
        [315, 319, 6],
        [320, 324, 6],
        [325, 335, 6],
        [336, 345, 6],
        [346, 354, 7],
        [355, 359, 7],
        [360, 364, 7],
        [365, 369, 7],
        [370, 374, 7],
        [375, 385, 7],
        [386, 395, 7],
        [396, 404, 8],
        [405, 409, 8],
        [410, 414, 8],
        [415, 419, 8],
        [420, 424, 8],
        [425, 435, 8],
        [436, 445, 8],
        [446, 454, 9],
        [455, 459, 9],
        [460, 464, 9],
        [465, 469, 9],
        [470, 474, 9],
        [475, 485, 9],
        [486, 495, 9],
        [496, 504, 10],
        [505, 509, 10],
        [510, 514, 10],
        [515, 519, 10],
        [520, 524, 10],
        [525, 535, 10],
        [536, 545, 10],
        [546, 554, 11],
        [555, 559, 11],
        [560, 564, 11],
        [565, 569, 11],
        [570, 574, 11],
        [575, 585, 11],
        [586, 595, 11],
        [596, 604, 12],
        [605, 609, 12],
        [610, 614, 12],
        [615, 619, 12],
        [620, 624, 12],
        [625, 635, 12],
        [636, 645, 12],
        [646, 654, 13],
        [655, 659, 13],
        [660, 664, 13],
        [665, 669, 13],
        [670, 674, 13],
        [675, 685, 13],
        [686, 695, 13],
        [696, 704, 14],
        [705, 709, 14],
        [710, 714, 14],
        [715, 719, 14],
        [720, 724, 14],
        [725, 735, 14],
        [736, 745, 14],
        [746, 754, 15],
        [755, 759, 15],
        [760, 764, 15],
        [765, 769, 15],
        [770, 774, 15],
        [775, 785, 15],
        [786, 795, 15],
        [796, 804, 16],
        [805, 809, 16],
        [810, 814, 16],
        [815, 819, 16],
        [820, 824, 16],
        [825, 835, 16],
        [836, 845, 16],
        [846, 854, 17],
        [855, 859, 17],
        [860, 864, 17],
        [865, 869, 17],
        [870, 874, 17],
        [875, 885, 17],
        [886, 895, 17],
        [896, 904, 18],
        [905, 909, 18],
        [910, 914, 18],
        [915, 919, 18],
        [920, 924, 18],
        [925, 935, 18],
        [936, 945, 18],
        [946, 954, 19],
        [955, 959, 19],
        [960, 964, 19],
        [965, 969, 19],
        [970, 974, 19],
        [975, 985, 19],
        [986, 995, 19],
        [996, 1004, 20],
        [1005, 1009, 20],
        [1010, 1014, 20],
        [1015, 1019, 20],
        [1020, 1024, 20],
        [1025, 1035, 20],
        [1036, 1045, 20],
        [1046, 1054, 21],
        [1055, 1059, 21],
        [1060, 1064, 21],
        [1065, 1069, 21],
        [1070, 1074, 21],
        [1075, 1085, 21],
        [1086, 1095, 21],
        [1096, 1104, 22],
        [1105, 1109, 22],
        [1110, 1114, 22],
        [1115, 1119, 22],
        [1120, 1124, 22],
        [1125, 1135, 22],
        [1136, 1145, 22],
        [1146, 1154, 23],
        [1155, 1159, 23],
        [1160, 1164, 23],
        [1165, 1169, 23],
        [1170, 1174, 23],
        [1175, 1185, 23],
        [1186, 1195, 23],
        [1196, 1204, 24],
        [1205, 1209, 24],
        [1210, 1214, 24],
        [1215, 1219, 24],
        [1220, 1224, 24],
        [1225, 1235, 24],
        [1236, 1245, 24],
        [1246, 1254, 25],
        [1255, 1259, 25],
        [1260, 1264, 25],
        [1265, 1269, 25],
        [1270, 1274, 25],
        [1275, 1285, 25],
        [1286, 1295, 25],
        [1296, 1304, 26],
        [1305, 1309, 26],
        [1310, 1314, 26],
        [1315, 1319, 26],
        [1320, 1324, 26],
        [1325, 1335, 26],
        [1336, 1345, 26],
        [1346, 1354, 27],
        [1355, 1359, 27],
        [1360, 1364, 27],
        [1365, 1369, 27],
        [1370, 1374, 27],
        [1375, 1385, 27],
        [1386, 1395, 27],
        [1396, 1404, 28],
        [1405, 1409, 28],
        [1410, 1414, 28],
        [1415, 1419, 28],
        [1420, 1424, 28],
        [1425, 1435, 28],
        [1436, 1445, 28],
        [1446, 1454, 29],
        [1455, 1459, 29],
        [1460, 1464, 29],
        [1465, 1469, 29],
        [1470, 1474, 29],
        [1475, 1485, 29],
        [1486, 1495, 29],
        [1496, 1504, 30],
        [1505, 1509, 30],
        [1510, 1514, 30],
        [1515, 1519, 30],
        [1520, 1524, 30],
        [1525, 1535, 30],
        [1536, 1545, 30],
        [1546, 1554, 31],
        [1555, 1559, 31],
        [1560, 1564, 31],
        [1565, 1569, 31],
        [1570, 1574, 31],
        [1575, 1585, 31],
        [1586, 1595, 31],
        [1596, 1604, 32],
        

    ];

    let zakahAmount = 0;

    for (const rule of zakahRules) {
        if (numCamels >= rule[0] && numCamels <= rule[1]) {
            zakahAmount += rule[2];
            break;
        }
    }

    return zakahAmount;
}

const input = document.getElementById("numCamels");

input.addEventListener("input", function() {
    if (this.value > 1600) {
    this.value = 1600;
    }
    if (this.value < 0) {
    this.value = 0;
    }
});

numCamels.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
          button.click();
    }
});
let arrowRotated = false;

function toggleArrowAndKey() {
    const arrow = document.querySelector('#arrow');
    const key = document.getElementById('key');
    arrow.classList.toggle('collapsed');
    if (arrowRotated) {
        arrow.style.transform = 'rotate(0deg)';
        arrowRotated = false;
        key.style.transform = 'translateY(-240px)';
      } else {
        arrow.style.transform = 'rotate(180deg)';
        arrowRotated = true;
        key.style.transform = 'translateY(15px)';
      }
  }