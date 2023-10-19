def number_theory(number):
    if not isinstance(number, int):
        return "Invalid input. Please enter a valid integer."

    total_sum = 0
    for i in range(1, number // 2 + 1):
        if number % i == 0:
            total_sum += i

    if total_sum < number:
        return "Deficient Number"
    elif total_sum == number:
        return "Perfect Number"
    else:
        return "Abundant Number"


try:
    number = int(input("Enter an integer: "))
    classification = number_theory(number)
    print(f"{number} is a {classification}.")
except ValueError:
    print("Invalid input. Please enter a valid integer.")
