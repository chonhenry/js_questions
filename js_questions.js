// 1. Reverse the string "Josephine"
const reverseString = (str) => {
  if (str === "") return ""; // stop the recursion
  return reverseString(str.slice(1)) + str[0];
};

// 2. Reverse the sentence " Josephine likes apples" -> " apples likes Josephine ")
const reverseSentence = (sentence) => {
  let reversed = "";
  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      // store the whole word before reaching the next space
      word += sentence[i];
    } else {
      // add the word to the beginning of  reversed
      reversed = " " + word + reversed;
      word = "";
    }
  }

  return word + reversed;
};

// 3. Return the distinct values from the list [1 3 5 3 7 3 1 1 5] -> [1 3 5 7]
const distinct = (list) => {
  let distinct_list = [];
  let obj = {};

  list.forEach((n) => {
    if (!obj[n]) {
      distinct_list.push(n);
      obj[n] = true;
    }
  });

  return distinct_list;
};

// 4. For every letter in the alphabet, return the number of it, except if it's a vowel,
//    then return the same number as previous (a->1, b->2, c->3, d->4, e->4, f->5, ...)
const alphabetNum = (letter) => {
  const vowel = { a: true, e: true, i: true, o: true, u: true };
  let count = 1;
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < alphabet.length; i++) {
    if (alphabet[i] === letter) {
      if (vowel[letter]) return count;
      return count + 1;
    } else {
      if (!vowel[alphabet[i]]) count++;
    }
  }
};

// 5. Do the same as previous, but now for every 5th letter, (E, J, ....) return the letter that comes before it.
//    Ex: at the letter E, return D instead of 4  (a->1, b->2, c->3, d->4, e->D, f->5, ...)
const everyFifth = (letter) => {
  let count = 0;
  var alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  for (let i = 0; i < alphabet.length; i++) {
    if ((i + 1) % 5 !== 0) {
      count++;
    }

    if (alphabet[i] === letter) {
      if ((i + 1) % 5 === 0) {
        return alphabet[i - 1];
      }
      return count;
    }
  }
};
