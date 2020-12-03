function checkCashRegister(price, cash, cid) {
	var origiC = cash - price
	var change = cash - price
	var cAvail = cid.map(x=>x[1]).reduce((x,y)=>x+y)
		if (change > cAvail) {
			return {status: "INSUFFICIENT_FUNDS", change: []}
		} else if (change === cAvail) {
			return {status: "CLOSED", change: cid}
		}
	
	var cMap = cid.map(x=>x=[x[0], 0])
	var cVal = [0.01,0.05,0.1,0.25,1,5,10,20,100]
	
	for (let i = 8; i >= 0; i--) {
		while (change >= cVal[i] && cid[i][1] > 0) {
			change = change - cVal[i]
			cid[i][1] = cid[i][1] - cVal[i]
			cMap[i][1] = cMap[i][1] + cVal[i]
			change = change < 0.01 && change > 0 ? 0.01 : change
		}
	}
	
	cMap = cMap.filter(x=>x[1]>0).reverse()
 	
	let cMapReduce = cMap.map(x=>x[1]).reduce((x,y)=>x+y)
 	
	if (cMapReduce.toFixed(2) != origiC) {
		return {status: "INSUFFICIENT_FUNDS", change: []}
	}
	
	return {status: "OPEN", change: cMap}
}
