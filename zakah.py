def calculate_zakah(num_camels):
    # Define the zakāh rules based on the provided reading
    zakah_rules = [
        (0, 4, 0),       # 0 sheep or goat for 0 to 4 camels
        (5, 9, 1),       # 1 sheep or goat for 5 to 9 camels
        (10, 14, 2),     # 2 sheep or goats for 10 to 14 camels
        (15, 19, 3),     # 3 sheep or goats for 15 to 19 camels
        (20, 24, 4),     # 4 sheep or goats for 20 to 24 camels
        (25, 35, 1),     # 1 bint makhāḍ for 25 to 35 camels
        (36, 45, 1),     # 1 bint labūn for 36 to 45 camels
        (46, 60, 1),     # 1 ḥiqqah for 46 to 60 camels
        (61, 75, 1),     # 1 jadha'ah for 61 to 75 camels
        (76, 90, 2),     # 2 bint labūns for 76 to 90 camels
        (91, 124, 2),    # 2 ḥiqqahs for 91 to 124 camels
        (125, 129, 2),   # 2 ḥiqqahs and 1 sheep or goat for 125 to 129 camels
        (130, 134, 2),   # 2 ḥiqqahs and 2 sheep or goats for 130 to 134 camels
        (135, 139, 2),   # 2 ḥiqqahs and 3 sheep or goats for 135 to 139 camels
        (140, 144, 2),   # 2 ḥiqqahs and 4 sheep or goats for 140 to 144 camels
        (145, 149, 2),   # 2 ḥiqqahs and 1 bint makhāḍ for 145 to 149 camels
        (150, 154, 3),   # 3 ḥiqqahs for 150 to 154 camels
        (155, 159, 3),   # 3 ḥiqqahs and 1 sheep or goat for 155 to 159 camels
        (160, 164, 3),   # 3 ḥiqqahs and 2 sheep or goats for 160 to 164 camels
        (165, 169, 3),   # 3 ḥiqqahs and 3 sheep or goats for 165 to 169 camels
        (170, 174, 3),   # 3 ḥiqqahs and 4 sheep or goats for 170 to 174 camels
        (175, 185, 3),   # 3 ḥiqqahs and 1 bint makhāḍ for 175 to 185 camels
        (186, 195, 3),   # 3 ḥiqqahs and 1 bint labūn for 186 to 195 camels
        (196, 204, 4),   # 4 ḥiqqahs for 196 to 204 camels
        (205, 209, 4),   # 4 ḥiqqahs and 1 sheep or goat for 205 to 209 camels
        (210, 214, 4),   # 4 ḥiqqahs and 2 sheep or goats for 210 to 214 camels
        (215, 219, 4),   # 4 ḥiqqahs and 3 sheep or goats for 215 to 219 camels
        (220, 224, 4),   # 4 ḥiqqahs and 4 sheep or goats for 220 to 224 camels
        (225, 235, 4),   # 4 ḥiqqahs and 1 bint makhāḍ for 225 to 235 camels
        (236, 245, 4),   # 4 ḥiqqahs and 1 bint labūn for 236 to 245 camels
        (246, 254, 5),   # 5 ḥiqqahs for 246 to 254 camels
        (255, 259, 5),   # 5 ḥiqqahs and 1 sheep or goat for 255 to 259 camels
        (260, 264, 5),   # 5 ḥiqqahs and 2 sheep or goats for 260 to 264 camels
        (265, 269, 5),   # 5 ḥiqqahs and 3 sheep or goats for 265 to 269 camels
        (270, 274, 5),   # 5 ḥiqqahs and 4 sheep or goats for 270 to 274 camels
        (275, 285, 5),   # 5 ḥiqqahs and 1 bint makhāḍ for 275 to 285 camels
        (286, 295, 5),   # 5 ḥiqqahs and 1 bint labόn for 286 to 295 camels
        (296, 304, 6),   # 6 ḥiqqahs for 296 to 304 camels
        (305, 309, 6),   # 6 ḥiqqahs and 1 sheep or goat for 305 to 309 camels
        (310, 314, 6),   # 6 ḥiqqahs and 2 sheep or goats for 310 to 314 camels
        (315, 319, 6),   # 6 ḥiqqahs and 3 sheep or goats for 315 to 319 camels
        (320, 324, 6),   # 6 ḥiqqahs and 4 sheep or goats for 320 to 324 camels
        (325, 335, 6),   # 6 ḥiqqahs and 1 bint makhāḍ for 325 to 335 camels
        (336, 345, 6),   # 6 ḥiqqahs and 1 bint labόn for 336 to 345 camels
        (346, 354, 7),   # 7 ḥiqqahs for 346 to 354 camels
        (355, 359, 7),   # 7 ḥiqqahs and 1 sheep or goat for 355 to 359 camels
        (360, 364, 7),   # 7 ḥiqqahs and 2 sheep or goats for 360 to 364 camels
        (365, 369, 7),   # 7 ḥiqqahs and 3 sheep or goats for 365 to 369 camels
        (370, 374, 7),   # 7 ḥiqqahs and 4 sheep or goats for 370 to 374 camels
        (375, 385, 7),   # 7 ḥiqqahs and 1 bint makhāḍ for 375 to 385 camels
        (386, 395, 7),   # 7 ḥiqqahs and 1 bint labún for 386 to 395 camels
        (396, 404, 8),   # 8 ḥiqqahs for 396 to 404 camels
        (405, 409, 8),   # 8 ḥiqqahs and 1 sheep or goat for 405 to 409 camels
        (410, 414, 8),   # 8 ḥiqqahs and 2 sheep or goats for 410 to 414 camels
        (415, 419, 8),   # 8 ḥiqqahs and 3 sheep or goats for 415 to 419 camels
        (420, 424, 8),   # 8 ḥiqqahs and 4 sheep or goats for 420 to 424 camels
        (425, 435, 8),   # 8 ḥiqqahs and 1 bint makhāḍ for 425 to 435 camels
        (436, 445, 8),   # 8 ḥiqqahs and 1 bint labún for 436 to 445 camels
        (446, 454, 9),   # 9 ḥiqqahs for 446 to 454 camels
        (455, 459, 9),   # 9 ḥiqqahs and 1 sheep or goat for 455 to 459 camels
        (460, 464, 9),   # 9 ḥiqqahs and 2 sheep or goats for 460 to 464 camels
        (465, 469, 9),   # 9 ḥiqqahs and 3 sheep or goats for 465 to 469 camels
        (470, 474, 9),   # 9 ḥiqqahs and 4 sheep or goats for 470 to 474 camels
        (475, 485, 9),   # 9 ḥiqqahs and 1 bint makhāḍ for 475 to 485 camels
        (486, 495, 9),   # 9 ḥiqqahs and 1 bint labún for 486 to 495 camels
        (496, 504, 10),  # 10 ḥiqqahs for 496 to 504 camels
        (505, 509, 10),  # 10 ḥiqqahs and 1 sheep or goat for 505 to 509 camels
        (510, 514, 10),  # 10 ḥiqqahs and 2 sheep or goats for 510 to 514 camels
        (515, 519, 10),  # 10 ḥiqqahs and 3 sheep or goats for 515 to 519 camels
        (520, 524, 10),  # 10 ḥiqqahs and 4 sheep or goats for 520 to 524 camels
        (525, 535, 10),  # 10 ḥiqqahs and 1 bint makhāḍ for 525 to 535 camels
        (536, 545, 10),  # 10 ḥiqqahs and 1 bint labún for 536 to 545 camels
        (546, 554, 11),  # 11 ḥiqqahs for 546 to 554 camels
        (555, 559, 11),  # 11 ḥiqqahs and 1 sheep or goat for 555 to 559 camels
        (560, 564, 11),  # 11 ḥiqqahs and 2 sheep or goats for 560 to 564 camels
        (565, 569, 11),  # 11 ḥiqqahs and 3 sheep or goats for 565 to 569 camels
        (570, 574, 11),  # 11 ḥiqqahs and 4 sheep or goats for 570 to 574 camels
        (575, 585, 11),  # 11 ḥiqqahs and 1 bint makhāḍ for 575 to 585 camels
        (586, 595, 11),  # 11 ḥiqqahs and 1 bint labún for 586 to 595 camels
        (596, 604, 12),  # 12 ḥiqqahs for 596 to 604 camels
        (605, 609, 12),  # 12 ḥiqqahs and 1 sheep or goat for 605 to 609 camels
        (610, 614, 12),  # 12 ḥiqqahs and 2 sheep or goats for 610 to 614 camels
        (615, 619, 12),  # 12 ḥiqqahs and 3 sheep or goats for 615 to 619 camels
        (620, 624, 12),  # 12 ḥiqqahs and 4 sheep or goats for 620 to 624 camels
        (625, 635, 12),  # 12 ḥiqqahs and 1 bint makhāḍ for 625 to 635 camels
        (636, 645, 12),  # 12 ḥiqqahs and 1 bint labún for 636 to 645 camels
        (646, 654, 13),  # 13 ḥiqqahs for 646 to 654 camels
        (655, 659, 13),  # 13 ḥiqqahs and 1 sheep or goat for 655 to 659 camels
        (660, 664, 13),  # 13 ḥiqqahs and 2 sheep or goats for 660 to 664 camels
        (665, 669, 13),  # 13 ḥiqqahs and 3 sheep or goats for 665 to 669 camels
        (670, 674, 13),  # 13 ḥiqqahs and 4 sheep or goats for 670 to 674 camels
        (675, 685, 13),  # 13 ḥiqqahs and 1 bint makhāḍ for 675 to 685 camels
        (686, 695, 13),  # 13 ḥiqqahs and 1 bint labún for 686 to 695 camels
        (696, 704, 14),  # 14 ḥiqqahs for 696 to 704 camels
        (705, 709, 14),  # 14 ḥiqqahs and 1 sheep or goat for 705 to 709 camels
        (710, 714, 14),  # 14 ḥiqqahs and 2 sheep or goats for 710 to 714 camels
        (715, 719, 14),  # 14 ḥiqqahs and 3 sheep or goats for 715 to 719 camels
        (720, 724, 14),  # 14 ḥiqqahs and 4 sheep or goats for 720 to 724 camels
        (725, 735, 14),  # 14 ḥiqqahs and 1 bint makhāḍ for 725 to 735 camels
        (736, 745, 14),  # 14 ḥiqqahs and 1 bint labún for 736 to 745 camels
        (746, 754, 15),  # 15 ḥiqqahs for 746 to 754 camels
        (755, 759, 15),  # 15 ḥiqqahs and 1 sheep or goat for 755 to 759 camels
        (760, 764, 15),  # 15 ḥiqqahs and 2 sheep or goats for 760 to 764 camels
        (765, 769, 15),  # 15 ḥiqqahs and 3 sheep or goats for 765 to 769 camels
        (770, 774, 15),  # 15 ḥiqqahs and 4 sheep or goats for 770 to 774 camels
        (775, 785, 15),  # 15 ḥiqqahs and 1 bint makhāḍ for 775 to 785 camels
        (786, 795, 15),  # 15 ḥiqqahs and 1 bint labún for 786 to 795 camels
        (796, 804, 16),  # 16 ḥiqqahs for 796 to 804 camels
        (805, 809, 16),  # 16 ḥiqqahs and 1 sheep or goat for 805 to 809 camels
        (810, 814, 16),  # 16 ḥiqqahs and 2 sheep or goats for 810 to 814 camels
        (815, 819, 16),  # 16 ḥiqqahs and 3 sheep or goats for 815 to 819 camels
        (820, 824, 16),  # 16 ḥiqqahs and 4 sheep or goats for 820 to 824 camels
        (825, 835, 16),  # 16 ḥiqqahs and 1 bint makhāḍ for 825 to 835 camels
        (836, 845, 16),  # 16 ḥiqqahs and 1 bint labún for 836 to 845 camels
        (846, 854, 17),  # 17 ḥiqqahs for 846 to 854 camels
        (855, 859, 17),  # 17 ḥiqqahs and 1 sheep or goat for 855 to 859 camels
        (860, 864, 17),  # 17 ḥiqqahs and 2 sheep or goats for 860 to 864 camels
        (865, 869, 17),  # 17 ḥiqqahs and 3 sheep or goats for 865 to 869 camels
        (870, 874, 17),  # 17 ḥiqqahs and 4 sheep or goats for 870 to 874 camels
        (875, 885, 17),  # 17 ḥiqqahs and 1 bint makhāḍ for 875 to 885 camels
        (886, 895, 17),  # 17 ḥiqqahs and 1 bint labún for 886 to 895 camels
        (896, 904, 18),  # 18 ḥiqqahs for 896 to 904 camels
        (905, 909, 18),  # 18 ḥiqqahs and 1 sheep or goat for 905 to 909 camels
        (910, 914, 18),  # 18 ḥiqqahs and 2 sheep or goats for 910 to 914 camels
        (915, 919, 18),  # 18 ḥiqqahs and 3 sheep or goats for 915 to 919 camels
        (920, 924, 18),  # 18 ḥiqqahs and 4 sheep or goats for 920 to 924 camels
        (925, 935, 18),  # 18 ḥiqqahs and 1 bint makhāḍ for 925 to 935 camels
        (936, 945, 18),  # 18 ḥiqqahs and 1 bint labún for 936 to 945 camels
        (946, 954, 19),  # 19 ḥiqqahs for 946 to 954 camels
        (955, 959, 19),  # 19 ḥiqqahs and 1 sheep or goat for 955 to 959 camels
        (960, 964, 19),  # 19 ḥiqqahs and 2 sheep or goats for 960 to 964 camels
        (965, 969, 19),  # 19 ḥiqqahs and 3 sheep or goats for 965 to 969 camels
        (970, 974, 19),  # 19 ḥiqqahs and 4 sheep or goats for 970 to 974 camels
        (975, 985, 19),  # 19 ḥiqqahs and 1 bint makhāḍ for 975 to 985 camels
        (986, 995, 19),  # 19 ḥiqqahs and 1 bint labún for 986 to 995 camels
        (996, 1004, 20), # 20 ḥiqqahs for 996 to 1004 camels
        
    ]

    # Initialize zakah amount
    zakah_amount = 0

    # Iterate through zakah rules and calculate the amount
    for rule in zakah_rules:
        if num_camels >= rule[0] and num_camels <= rule[1]:
            zakah_amount += rule[2]
            break

    return zakah_amount
# Example usage
# Example usage
num_camels = int(input("Enter the number of camels: "))
zakah = calculate_zakah(num_camels)

if 25 <= num_camels <= 35:
    animal = "bint makhāḍ"
elif zakah ==0 and 0 <= num_camels <= 4:
    animal = "sheep or goat"    
elif zakah ==1 and 5 <= num_camels <= 9:
    animal = "sheep or goat" 
elif zakah == 1 and 36 <= num_camels <= 45:
    animal = "bint labūn"
elif zakah == 1 and 46 <= num_camels <= 60:
    animal = "ḥiqqah"  
elif zakah == 1 and 61 <= num_camels <= 75:
    animal = "jadha'ah" 
elif zakah == 2 and 76 <= num_camels <= 90:
    animal = "bint labūns"
elif zakah == 2 and 91 <= num_camels <= 124:
    animal = "ḥiqqahs"
elif zakah == 2 and 124 <= num_camels <= 129:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 2 and 130 <= num_camels <= 134:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 2 and 135 <= num_camels <= 139:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 2 and 140 <= num_camels <= 144:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 2 and 145 <= num_camels <= 149:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 3 and 150 <= num_camels <= 154:
    animal = "ḥiqqahs"
elif zakah == 3 and 155 <= num_camels <= 159:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 3 and 160 <= num_camels <= 164:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 3 and 165 <= num_camels <= 169:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 3 and 170 <= num_camels <= 174:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 3 and 175 <= num_camels <= 185:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 3 and 186 <= num_camels <= 195:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 4 and 196 <= num_camels <= 204:
    animal = "ḥiqqahs"
elif zakah == 4 and 205 <= num_camels <= 209:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 4 and 210 <= num_camels <= 214:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 4 and 215 <= num_camels <= 219:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 4 and 220 <= num_camels <= 224:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 4 and 225 <= num_camels <= 235:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 4 and 236 <= num_camels <= 245:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 5 and 246 <= num_camels <= 254:
    animal = "ḥiqqahs"
elif zakah == 5 and 255 <= num_camels <= 259:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 5 and 260 <= num_camels <= 264:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 5 and 265 <= num_camels <= 269:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 5 and 270 <= num_camels <= 274:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 5 and 275 <= num_camels <= 285:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 5 and 286 <= num_camels <= 295:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 6 and 296 <= num_camels <= 304:
    animal = "ḥiqqahs"
elif zakah == 6 and 305 <= num_camels <= 309:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 6 and 310 <= num_camels <= 314:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 6 and 315 <= num_camels <= 319:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 6 and 320 <= num_camels <= 324:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 6 and 325 <= num_camels <= 335:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 6 and 336 <= num_camels <= 345:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 7 and 346 <= num_camels <= 354:
    animal = "ḥiqqahs"
elif zakah == 7 and 355 <= num_camels <= 359:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 7 and 360 <= num_camels <= 364:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 7 and 365 <= num_camels <= 369:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 7 and 370 <= num_camels <= 374:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 7 and 375 <= num_camels <= 385:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 7 and 386 <= num_camels <= 395:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 8 and 396 <= num_camels <= 404:
    animal = "ḥiqqahs"
elif zakah == 8 and 405 <= num_camels <= 409:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 8 and 410 <= num_camels <= 414:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 8 and 415 <= num_camels <= 419:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 8 and 420 <= num_camels <= 424:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 8 and 425 <= num_camels <= 435:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 8 and 436 <= num_camels <= 445:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 9 and 446 <= num_camels <= 454:
    animal = "ḥiqqahs"
elif zakah == 9 and 455 <= num_camels <= 459:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 9 and 460 <= num_camels <= 464:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 9 and 465 <= num_camels <= 469:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 9 and 470 <= num_camels <= 474:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 9 and 475 <= num_camels <= 485:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 9 and 486 <= num_camels <= 495:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 10 and 496 <= num_camels <= 504:
    animal = "ḥiqqahs"
elif zakah == 10 and 505 <= num_camels <= 509:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 10 and 510 <= num_camels <= 514:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 10 and 515 <= num_camels <= 519:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 10 and 520 <= num_camels <= 524:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 10 and 525 <= num_camels <= 535:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 10 and 536 <= num_camels <= 545:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 11 and 546 <= num_camels <= 554:
    animal = "ḥiqqahs"
elif zakah == 11 and 555 <= num_camels <= 559:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 11 and 560 <= num_camels <= 564:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 11 and 565 <= num_camels <= 569:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 11 and 570 <= num_camels <= 574:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 11 and 575 <= num_camels <= 585:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 11 and 586 <= num_camels <= 595:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 12 and 596 <= num_camels <= 604:
    animal = "ḥiqqahs"
elif zakah == 12 and 605 <= num_camels <= 609:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 12 and 610 <= num_camels <= 614:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 12 and 615 <= num_camels <= 619:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 12 and 620 <= num_camels <= 624:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 12 and 625 <= num_camels <= 635:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 12 and 636 <= num_camels <= 645:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 13 and 646 <= num_camels <= 654:
    animal = "ḥiqqahs"
elif zakah == 13 and 655 <= num_camels <= 659:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 13 and 660 <= num_camels <= 664:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 13 and 665 <= num_camels <= 669:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 13 and 670 <= num_camels <= 674:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 13 and 675 <= num_camels <= 685:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 13 and 686 <= num_camels <= 695:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 14 and 696 <= num_camels <= 704:
    animal = "ḥiqqahs"
elif zakah == 14 and 705 <= num_camels <= 709:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 14 and 710 <= num_camels <= 714:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 14 and 715 <= num_camels <= 719:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 14 and 720 <= num_camels <= 724:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 14 and 725 <= num_camels <= 735:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 14 and 736 <= num_camels <= 745:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 15 and 746 <= num_camels <= 754:
    animal = "ḥiqqahs"
elif zakah == 15 and 755 <= num_camels <= 759:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 15 and 760 <= num_camels <= 764:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 15 and 765 <= num_camels <= 769:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 15 and 770 <= num_camels <= 774:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 15 and 775 <= num_camels <= 785:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 15 and 786 <= num_camels <= 795:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 16 and 796 <= num_camels <= 804:
    animal = "ḥiqqahs"
elif zakah == 16 and 805 <= num_camels <= 809:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 16 and 810 <= num_camels <= 814:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 16 and 815 <= num_camels <= 819:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 16 and 820 <= num_camels <= 824:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 16 and 825 <= num_camels <= 835:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 16 and 836 <= num_camels <= 845:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 17 and 846 <= num_camels <= 854:
    animal = "ḥiqqahs"
elif zakah == 17 and 855 <= num_camels <= 859:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 17 and 860 <= num_camels <= 864:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 17 and 865 <= num_camels <= 869:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 17 and 870 <= num_camels <= 874:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 17 and 875 <= num_camels <= 885:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 17 and 886 <= num_camels <= 895:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 18 and 896 <= num_camels <= 904:
    animal = "ḥiqqahs"
elif zakah == 18 and 905 <= num_camels <= 909:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 18 and 910 <= num_camels <= 914:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 18 and 915 <= num_camels <= 919:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 18 and 920 <= num_camels <= 924:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 18 and 925 <= num_camels <= 935:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 18 and 936 <= num_camels <= 945:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 19 and 946 <= num_camels <= 954:
    animal = "ḥiqqahs"
elif zakah == 19 and 955 <= num_camels <= 959:
    animal = "ḥiqqahs and 1 sheep or goat"
elif zakah == 19 and 960 <= num_camels <= 964:
    animal = "ḥiqqahs and 2 sheep or goats"
elif zakah == 19 and 965 <= num_camels <= 969:
    animal = "ḥiqqahs and 3 sheep or goats"
elif zakah == 19 and 970 <= num_camels <= 974:
    animal = "ḥiqqahs and 4 sheep or goats"
elif zakah == 19 and 975 <= num_camels <= 985:
    animal = "ḥiqqahs and 1 bint makhāḍ"
elif zakah == 19 and 986 <= num_camels <= 995:
    animal = "ḥiqqahs and 1 bint labūn"
elif zakah == 20 and 996 <= num_camels <= 1004:
    animal = "ḥiqqahs"
else:
    animal = "sheep or goats"

print(f"The zakah amount for {num_camels} camels is: {zakah} {animal}.")
