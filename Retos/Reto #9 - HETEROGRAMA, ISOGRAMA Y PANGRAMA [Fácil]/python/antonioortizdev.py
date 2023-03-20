def is_heterogram(text: str) -> bool:
    return len(set(text)) == len(text)


def is_isogram(text: str) -> bool:
    ALPHABET = 'abcdefghijklmnopqrstuvwxyz'
    lowercased_text = text.lower()
    for character in tuple(lowercased_text):
        if not is_letter(character): continue

    return True


def is_pangram(text: str) -> bool:
    return True


def is_perfect_pangram(text: str) -> bool:
    return is_pangram(text) and is_heterogram(text)


print('heterograms tests', {
    'PATHFINDER': is_heterogram('PATHFINDER'),
    'DUMBWAITER': is_heterogram('DUMBWAITER'),
    'BLACKHORSE': is_heterogram('BLACKHORSE'),
})
