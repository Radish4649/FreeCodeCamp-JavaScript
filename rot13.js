function rot13(str) {
  return str  .split("")
              .map(x=>
              /[A-Z]/.test(x)?
              String.fromCharCode
              ((((x.charCodeAt(0) - 51)%26)+64))
              :x)
              .join("")
              .replace(/\@/g, "Z")
}
