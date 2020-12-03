function palindrome(str) {
  let word = str.split("").filter(x=>/[A-Za-z0-9]/.test(x))
  return word.join("").toLowerCase() === word.reverse().join("").toLowerCase()
}
