//your JS code here. If required.

// function firstNonRepeatingCharacter(str) {
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
//       return char;
//     }
//   }
  
// }

let str=prompt("Enter a string");

function firstNonRepeatingCharacter(str) {
  let charCount = {};
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]]) {
      charCount[str[i]]++;
    } else {
      charCount[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return str[i];
    }
  }
  return null;
}

let ans=firstNonRepeatingCharacter(str);

alert(ans);


