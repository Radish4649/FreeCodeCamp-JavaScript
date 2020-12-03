function convertToRoman(num, t=0) {
	let arr = ["","a", "aa", "aaa", 
		   "ab", "b", "ba", 
		   "baa", "baaa", "ac"]
	let key = [["I", "V", "X"], 
		   ["X", "L", "C"], 
		   ["C", "D", "M"], 
		   ["M"]]
	let modTen = num%10
	let thisDigit = arr[modTen]
			.replace(/a/g, key[t][0])
			.replace(/b/g, key[t][1])
			.replace(/c/g, key[t][2])
	if (num === num%10) {
		return thisDigit
	}
	return convertToRoman((num - num%10)/10, t+1) + thisDigit
}
