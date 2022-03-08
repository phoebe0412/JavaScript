//請你分別用 for loop 以及 while 迴圈，印出 1~9
// function sum() {
	// for (let i = 1; i < 10; i++) {
	// 	console.log(i);
	// }
// }
// sum();


//請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n
function print(n){
	for(let i = 0; i < n; i++){
		console.log(i+1)
	}
}
print(3);


//寫一個函式 star，接收一個參數 n，並印出 n 個 *
function star (num){
	let starRow = '';
	for(let i=0; i<=num; i++){
		starRow += '*'
	}
	console.log(starRow)
}
star(5)


//請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
function starReturn(num) {
	let starRow = ''
	for (let i = 0;i <= num;i++) {
		starRow += '*'
	}
	return starRow
}
console.log(starReturn(10))



//請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫
function isUpperCase(letter){
	let param = letter[0]
	//判斷字母大小寫 param >= "A" && param <= "Z"
	if (param >= "A" && param <= "Z"){
		return true
	} else {
		return false
	}
}
console.log(isUpperCase('Abcd'))
console.log(isUpperCase('abcd'))



//請寫一個 function position，接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1
function position (n){
	for (let i = 0;i < n.length; i++){
		if (n[i] >= "A" && n[i] <= "Z"){
			return `${n[i]} ${i}`
		}
	}
	return -1
}
console.log(position("abcd"))
console.log(position("abcdeFg"))
console.log(position("abCD"))



//請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n
function findSmallCount(array, num){
	let result = 0
	for (let i = 0;i < array.length; i++) {
		let item = array[i]
		if (item < num){
			result += 1
		}
	}
	return result
}

console.log(findSmallCount([1, 2, 3], 2))
console.log(findSmallCount([1, 2, 3, 4, 5], 0))



//請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和
function findSmallerTotal(array, num){
	let result = 0
	for(let i = 0; i<array.length; i++){
		let item = array[i]
		if (item < num){
			result += item
		}
	}
	return result
}

console.log(findSmallerTotal([1, 2, 3], 3))
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))


//請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）
function findAllSmall(array, num){
	let newArray = []
	for (let i = 0;i < array.length;i++) {
		let item = array[i]
		if (item < num) {
			newArray.push(item)
		}
	}
	return newArray
}

console.log(findAllSmall([1, 2, 3], 10))
console.log(findAllSmall([1, 2, 3], 2))
console.log(findAllSmall([1, 3, 5, 4, 2], 4))


//請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和
function sum (array){
	let result = 0
	for (let i = 0;i < array.length; i++){
		let item = array[i]
		result += item
	}
	return result
}

console.log(sum([1, 2, 3]))






