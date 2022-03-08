
//請寫出一個 function stars，接收一個參數 n，並且按照規律印出相對應的圖案
function stars(num) {
	for (let i = 0;i < num;i++) {
		let starRow = ''
		for (let j = 0;j <= i;j++) {
			starRow += '*'
		}
		console.log(starRow)
	}
}
stars(5)


//請寫出一個 function makeStars，接收一個參數 n，並且根據規律「回傳」字串
function makeStars(num) {
	let starRow = ''
	for (let i = 0;i < num;i++) {
		for (let j = 0;j <= i;j++) {
			starRow += '*'
		}
		//判斷最後一次迴圈不用印'/n'
		if (i < num - 1) {
			starRow += '/n'
		}
	}
	return starRow
}

console.log(makeStars(1))
console.log(makeStars(2))
console.log(makeStars(5))


//請寫出一個函式 stars2，接收一個參數 n，並依照規律印出圖形
function stars2(num) {
	//遞增
	for (let i = 0;i < num;i++) {
		let starRow = ''
		for (let j = 0;j <= i;j++) {
			starRow += '*'
		}
		console.log(starRow)
	}

	//遞減
	for (let i = num - 2;i >= 0;i--) {
		let starRow2 = ''
		for (let j = 0;j <= i;j++) {
			starRow2 += '*'
		}
		console.log(starRow2)
	}
}
stars2(5)


//請寫一個函式 table，接收一個數字 n，印出 n*1 ~ n*9 的結果
function table(n) {
	for (let i = 1;i <= 9;i++) {
		let result = 0
		console.log(result = `${n}*${i} = ${n * i}`)
	}
}
table(1)


//請寫出一個 function table9to9，並列出 1*1 ~ 9*9
function table9to9() {
	for (let i = 1;i <= 9;i++) {
		for (let j = 1;j < 10;j++) {
			let result = 0
			console.log(result = `${i}*${j} = ${i * j}`)
		}
	}
}

table9to9()


//費式數列的定義為：第 n 個數等於前兩個數的總和，因此這個數列會長的像這樣：1 1 2 3 5 8 13 21 ….
function fib(n) {
	if (n == 0) return 0
	if (n == 1) return 1
	return fib(n - 1) + fib(n - 2)
}

console.log('fib:', fib(8))

// function fib(n) {
// 	const fibArr = [0,1]
// 	for (let i = 2;i <= n;i++) {
// 		fibArr[i] = fibArr[i - 1] + fibArr[i - 2]
// 		console.log(fibArr[i])
// 	}
// 	console.log(fibArr)
// 	return fibArr[n]
// }

// console.log(fib(8))


// 請寫出一個函式 reverse，接收一個字串，並且回傳反轉過後的字串。（禁止使用內建函式 reverse）
function reverse(str) {
	let reverstStr = ''
	for (let i = str.length - 1;i >= 0;i--) {
		reverstStr += str[i]
	}
	return reverstStr
}
console.log('reverse:', reverse("ABCDEFG"))



//請寫一個函式 swap，接收一個字串，並且回傳大小寫互換後的字串
function swap(str) {
	let swapStr = ''
	for (let i = 0;i < str.length;i++) {
		let isLower = ''
		let isUpper = ''
		if (str[i] >= "A" && str[i] <= "Z") {
			isLower = str[i].toLowerCase()
		} else {
			isUpper = str[i].toUpperCase()
		}
		swapStr += isLower + isUpper
	}
	return swapStr
}
console.log('swap:', swap('AgHoPbdaQR'))




// 請寫出一個函式 findMin，接收一個陣列並回傳陣列中的最小值。（禁止使用內建函式 sort）
function findMin(array) {
	let num = array[0]
	for (let i = 0;i < array.length;i++) {
		if (array[i] < num) {
			num = array[i]
		}
	}
	// array.forEach((item)=>{
	// 	if (item < num){
	// 		num = item
	// 	}
	// })
	return num
}
console.log('findMin:', findMin([14234, 2, 5, 6, 99, 4, 5, 123, 34345345, -10]))


//請寫一個 function findNthMin，接收一個陣列以及一個數字 n，找出第 n 小的數字。（禁止使用內建函式 sort）
function findNthMin(array, findNum) {
	let findMinNum = ''
	for (let i = 0;i < array.length;i++) {
		let min = array[i]
		let minIndex = i

		for (let j = i;j < array.length;j++) {
			if (array[j] < min) {
				min = array[j]
				minIndex = j
			}
		}
		[array[minIndex], array[i]] = [array[i], array[minIndex]]
	}
	return findMinNum = array[findNum - 1]
}

console.log('findNthMin:', findNthMin([12, 3, 5, 1, 9], 4))

