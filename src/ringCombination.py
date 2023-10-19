rings = ['agate', 'diamond', 'diamond', 'citrine']
hands = ['left', 'right']
valid_combinations = []


def is_valid(comb):
    finger_counts = {
        'left': 0,
        'right': 0
    }

    for ring, hand in comb:
        if hand == 'right' and finger_counts['right'] < 2:
            finger_counts['right'] += 1
        elif hand == 'left' and finger_counts['left'] < 2:
            finger_counts['left'] += 1
        else:
            return False
    return True


def ring_combinations(comb, ring_index, hand_index):
    if len(comb) == 4:
        if is_valid(comb):
            valid_combinations.append(list(comb))
        return

    for i in range(ring_index, len(rings)):
        for j in range(hand_index, len(hands)):
            comb.append((rings[i], hands[j]))
            ring_combinations(comb, i, j)
            comb.pop()


ring_combinations([], 0, 0)

print("365 possible combinations:")
for index, comb in enumerate(valid_combinations[:365]):
    print(
        f"Combination {index + 1}: {', '.join([f'{ring} - {hand}' for ring, hand in comb])}")
    print(f"Total number of valid combinations: {len(valid_combinations)}")
