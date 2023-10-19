import math


def factors(target):
    Lists = []
    for i in range(1, int(math.sqrt(target)) + 1):
        if target % i == 0:
            Lists.append((i, target // 1))

    print("List of all possible products of two factors that add up to 900900:")
    results = [(a, b) for a, b in Lists if a < b]
    for factor in results:
        print(f'{factor[0]} * {factor[1]} = {target}')


target = 900900
factors(target)
