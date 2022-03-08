
// 請寫一個 function sort，接收一個陣列並且回傳由小到大排序後的陣列。（禁止使用內建函式 sort）
function sort(array) {

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
	return array
}

console.log('sort:', sort([6, 8, 3, 2, 23, 18, 235]))


//請寫出一個 function flatten，接收一個多維陣列並回傳「壓平」後的陣列

function flatten(arr) {
	let newArray = []

	for (let i = 0;i < arr.length;i++) {
		if (Array.isArray(arr[i])) {
			newArr = flatten(arr[i])
			for (let j = 0;j < newArr.length;j++) {
				newArray.push(newArr[j])
			}
		} else {
			newArray.push(arr[i])
		}
	}

	return newArray

}
//  [5, 6, [8]] ->　[5, 6, 8]
// 	[6, [5, 6, 8]] -> [6, 5, 6, 8]
console.log('flatten:', flatten([1, 2, 3, [1, [2]], [1, 3], 6, [5, 6, [8]]]))


//請寫一個 function tree，接收一個數字 n，按照規律列印出大小為 n 的聖誕樹

function tree(num) {
	treeTop(num)
	treeUnder(num)
}

function treeTop(num) {
	for (let i = 0;i < num;i++) {
		let starRow = ''
		for (let j = num - 1 - i;j > 0;j--) {
			starRow += '_'
		}
		for (let j = 1;j <= (i + 1) * 2 - 1;j++) {
			starRow += '*'
		}
		console.log(starRow)
	}
}

function treeUnder(num) {
	let starRow = ''
	for (let i = 0;i < num;i++) {
		for (let j = num - 1;j > 0;j--) {
			starRow += '_'
		}
		starRow += '*\n'
	}
	console.log(starRow)
}

tree(5)

//請寫出一個 function winner，接收一個代表圈圈叉叉的陣列，並回傳贏的是 O 還是 X，如果平手或還沒下完，請回傳 draw

function winner(array) {
	let result = ''
	for (let i = 0;i < 3;i++) {
		//直
		if (array[i][0] == array[i][1] && array[i][1] == array[i][2]) {
			result = array[i][0]
			//橫
		} else if (array[0][i] == array[1][i] && array[1][i] == array[2][i]) {
			result = array[0][i]
		}
	}

	if (array[0][0] == array[1][1] && array[1][1] == array[2][2]) {
		result = array[0][0]
	} else if (array[0][2] == array[1][1] && array[1][1] == array[2][0]) {
		result = array[0][2]
	}

	console.log('result :',result != '' ? result : 'draw')
	// array[0][0] array[0][1] array[0][2]
	// array[1][0] array[1][1] array[1][2]
	// array[2][0] array[2][1] array[2][2]
}

winner([
	['O', 'O', 'X'],
	['O', 'X', 'X'],
	['O', 'X', 'O']
])
winner([
	['O', 'O', 'X'],
	['O', 'X', 'X'],
	['X', 'X', 'O']
])
winner([
	['O', 'O', 'X'],
	['O', 'O', 'X'],
	['X', 'X', '']
])


//請寫出一個 function isPrime，給定一個數字 n，回傳 n 是否為質數

function isPrime(num){
	for(let i =2; i < num ; i++){

	}

}

console.log(isPrime(1))
console.log(isPrime(5))
console.log(isPrime(37))