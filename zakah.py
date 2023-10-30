ibil_lookup = {
        0:"",
        1:"Bint Makhād",
        2:"Bint Labūns",
        3:"Hiqqahs",
        4:"Jadha'ah"
    }

def calc(num_ibil):
    result = "N/A"
    level = None

    if num_ibil < 5:
        result = "Nothing"
    # -- -- -- -- -- -- -- -- -- -- -- -- -- --  
    elif num_ibil >= 5 and num_ibil <= 24:
        result = str(num_ibil // 5) + " Sheep/Goats"
    # -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
    elif num_ibil >= 25 and num_ibil <= 75:
        if num_ibil >= 25 and num_ibil <= 35:
            level = 1
        elif num_ibil >= 36 and num_ibil <= 45:
            level = 2
        elif num_ibil >= 46 and num_ibil <= 60:
            level = 3
        elif num_ibil >= 61:
            level = 4
        result = "1 " + ibil_lookup[level]
    # -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
    elif num_ibil >= 76 and num_ibil <= 124:
        # --
        if num_ibil >= 76 and num_ibil <= 90:
            level = 2
        elif num_ibil >= 90:
            level = 3
        result = "2 " + ibil_lookup[level]
    # -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
    elif num_ibil >= 125 and num_ibil <= 144:
        result = (
            str(2) + " " + ibil_lookup[3] + " and " + 
            str((num_ibil-120) // 5) + " Sheep/Goats"
        )
    # -- -- -- -- -- -- -- -- -- -- -- -- -- --
    elif num_ibil >= 145 and num_ibil <= 149:
        result = "2 " + ibil_lookup[3] + " and " + "1 " + ibil_lookup[1]
    # -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
    elif num_ibil >= 150 and num_ibil <= 154:
        result = "3 " + ibil_lookup[3]
    # -- -- -- -- -- -- -- -- -- -- -- -- -- -- 
    elif num_ibil >= 155 and num_ibil <= 174:
        result = (
            "3" + " " + ibil_lookup[3] + " and " + 
            str((num_ibil-150) // 5) + " Sheep/Goats"
        )
    # -- -- -- -- -- -- -- -- -- -- -- -- -- --
    elif num_ibil >= 175 and num_ibil <= 185:
        result = (
            "3" + " " + ibil_lookup[3] + " and " + 
            "1 " + ibil_lookup[1] 
        )
    # -- -- -- -- -- -- -- -- -- -- -- -- -- --
    elif num_ibil >= 186 and num_ibil <= 195:
        result = (
            "3" + " " + ibil_lookup[3] + " and " + 
            "1 " + ibil_lookup[2] 
        )
    elif num_ibil >= 196 and num_ibil <= 200:
        result = (
            "4" + " " + ibil_lookup[3] 
        )
    else:
        result = calc_250(num_ibil)
    if result == "1 Sheep/Goats":
        result = "1 Sheep/Goat"
    if result == "1 Bint Labūns":
        result = "1 Bint Labūn"
    if result == "1 Hiqqahs":
        result = "1 Hiqqah"
    return result

def calc_250(num_ibil):
    x = num_ibil
    add_hiqqahs = 0
    while x >= 200:
        x = x - 50
        add_hiqqahs = add_hiqqahs + 1
    result = calc(x)
    num_hiqqahs = add_hiqqahs + int(result[0])
    result = str(num_hiqqahs) + result[1:]
    return result

def print_zakat(num_ibil):
    print(calc(num_ibil),)

user_input = input("Enter the number of camels: ")
try:
    num_camels = int(user_input)
    print_zakat(num_camels)
except ValueError:
    print("Invalid input. Please enter a valid number of camels.")

# Credit goes to Wasif Pervez
