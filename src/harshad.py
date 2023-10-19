def harshad(number):
    sum_digits = sum(int(digit) for digit in str(number))
    return number % sum_digits == 0


def calculate():
    try:
        number = int(input("Enter an integer: "))
        if harshad(number):
            print(f"{number} is a Harshad(Niven) number.")
        else:
            print(f"{number} is not a Harshad(Niven) number.")
    except ValueError:
        print("Invalid input. Please enter a valid input.")


calculate()
