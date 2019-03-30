let firs = [1."second", 3, 4, 5];

first[99] = 99;

console.log(first.length);

first.forEach(function(item, i, arr) {
	console.log(i = ": " + item + "(массив: " + arr + ")")
})

let options = {
	name: "test",
	width: 1024,
	height: 1024
}

options.bool = false;
options.colors = {
	border: "black",
	background: "red"
}

delete options.bool

for( let key in options) {
	console.log('Свойство ' + key + " имеет значение " + options[key])
}

console.log(Object.keys(options).length);