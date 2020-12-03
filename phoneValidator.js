function telephoneCheck(str) {
 	let s = str.replace(/ /g, "")
	let reg10 = /^\d{3}-\d{3}-\d{4}$/
	let reg20 = /^\(\d{3}\)\d{3}-\d{4}$/
	let reg30 = /^\d{10}$/
	let reg11 = /^1\d{3}-\d{3}-\d{4}$/
	let reg21 = /^1\(\d{3}\)\d{3}-\d{4}$/
	let reg31 = /^1\d{10}/
	
	let arr = [reg10,reg20,reg30,reg11,reg21,reg31]
	
	for (let i = 0; i < 6; i++) {
		if (arr[i].test(s)) {
			return true
		}
	}
	return false
}
