//your JS code here. If required.

function firstNonRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
      return char;
    }
  }
  
}

let str=prompt("Enter a string");

let ans=firstNonRepeatingCharacter(str);

alert(ans);