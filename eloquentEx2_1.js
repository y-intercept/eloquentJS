count = ""
for (j = 0; j < 7; j++) {
	count += "#"
	console.log(count)
}

for (i = 1; i < 100; i++) {
	if (i % 15 == 0) {
		console.log("fizzbuzz")
	} else if (i % 5 == 0) {
			console.log("buzz")
	}	else if (i % 3 == 0) {
			console.log("fizz")
	} else {
		console.log(i)
	}
}

size = 8
board = ""
for (a = 0; a < size; a++) {
	for (b = 0; b < size; b++) {
		if ((a + b) % 2 == 0) {
			board += " "
		} else {
			board += "#"
		}
	} board += "\n"
} console.log(board)
