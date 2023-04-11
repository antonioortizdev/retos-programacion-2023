from enum import Enum
from typing import Self
from urllib import request
import json
import math


def request_random_word() -> str:
    RANDOM_WORD_API_URL = 'https://random-word-api.herokuapp.com/word'
    contents = request.urlopen(
        RANDOM_WORD_API_URL).read().decode("utf-8")
    random_word = json.loads(contents)[0]
    return random_word


class Game:
    Result = Enum('Result', ['WIN', 'LOSE'])
    _PERCENTAGE_TO_HIDE = 0.60
    _word_to_guess = ''
    _user_input = ''
    _incomplete_word = ''
    _letters_to_guess = []
    _letters_guessed = []
    _remaining_tries = 0
    _finished = False

    def start(self):
        self._set_remaining_tries()
        self._set_incomplete_word()
        while not self._finished:
            self._ask_user_to_guess()
            self._check_user_input()

    def set_word_to_guess(self, word_to_guess: str) -> Self:
        self._word_to_guess = word_to_guess
        return self

    def _set_remaining_tries(self):
        self._remaining_tries = math.floor(
            len(self._word_to_guess) * self._PERCENTAGE_TO_HIDE)

    def _set_incomplete_word(self):
        self._incomplete_word = self._word_to_guess
        for position in range(self._remaining_tries):
            letter_to_guess = self._word_to_guess[position]
            self._letters_to_guess[position] = letter_to_guess

    def _is_solved() -> bool:
        return True

    def _ask_user_to_guess(self):
        self._print_incomplete_word()
        self._print_remaining_tries()
        self._user_input = input('Please, write a letter or a word: ')

    def _update_incomplete_word(self, letter: str):
        position = self._word_to_guess.index(letter)
        if not position:
            self._remaining_tries -= 1
            return
        self._letters_guessed[position] = letter
        self._incomplete_word = self._incomplete_word.replace(

    def _print_incomplete_word(self):
        print(f'The word to guess is: {self._incomplete_word}')

    def _print_remaining_tries(self):
        print(f'Tries remaining: {self._remaining_tries}')

    def _check_user_input(self):
        for letter in list(self._user_input):
            self._update_incomplete_word(letter)


if __name__ == "__main__":
    Game().set_word_to_guess(request_random_word()).start()
