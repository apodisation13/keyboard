const alphabet = {
  1: [
        {"RU": {value: "й"}, "ENG": {value: "q"}},
        {"RU": {value: "ц"}, "ENG": {value: "w"}},
        {"RU": {value: "у", isVowel: true}, "ENG": {value: "e", isVowel: true}},
        {"RU": {value: "к"}, "ENG": {value: "r"}},
        {"RU": {value: "е", isVowel: true}, "ENG": {value: "t"}},
        {"RU": {value: "н"}, "ENG": {value: "y", isVowel: true}},
        {"RU": {value: "г",}, "ENG": {value: "u", isVowel: true}},
        {"RU": {value: "ш"}, "ENG": {value: "i", isVowel: true}},
        {"RU": {value: "щ"}, "ENG": {value: "o", isVowel: true}},
        {"RU": {value: "з"}, "ENG": {value: "p"}},
        {"RU": {value: "х"}},
        {"RU": {value: "ъ"}},
  ],
  2: [
        {"RU": {value: "ф"}, "ENG": {value: "a", isVowel: true}},
        {"RU": {value: "ы", isVowel: true}, "ENG": {value: "s"}},
        {"RU": {value: "в"}, "ENG": {value: "d"}},
        {"RU": {value: "а", isVowel: true}, "ENG": {value: "f"}},
        {"RU": {value: "п"}, "ENG": {value: "g"}},
        {"RU": {value: "р"}, "ENG": {value: "h"}},
        {"RU": {value: "о", isVowel: true}, "ENG": {value: "j"}},
        {"RU": {value: "л"}, "ENG": {value: "k"}},
        {"RU": {value: "д"}, "ENG": {value: "l"}},
        {"RU": {value: "ж"}},
        {"RU": {value: "э", isVowel: true}},
  ],
  3: [
        {"RU": {value: "я", isVowel: true}, "ENG": {value: "z"}},
        {"RU": {value: "ч"}, "ENG": {value: "x"}},
        {"RU": {value: "с"}, "ENG": {value: "c"}},
        {"RU": {value: "м"}, "ENG": {value: "v"}},
        {"RU": {value: "и", isVowel: true}, "ENG": {value: "b"}},
        {"RU": {value: "т"}, "ENG": {value: "n"}},
        {"RU": {value: "ь"}, "ENG": {value: "m"}},
        {"RU": {value: "б"}},
        {"RU": {value: "ю", isVowel: true}},
        {"RU": {value: "ё", isVowel: true}},
  ],
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

export { alphabet, numbers }
