let money,
name,
time

function start(){
	money = prompt("Ваш бюджет? 22222");

	while(isNaN(money) || money == "" || money == null) {
		money = prompt("Ваш бюджет?");

	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 21;

}
start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false
}

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?");

		if ((typeof(a)) ==="string" && ((typeof(a))) != null && a != '' && a.length < 50 ) {
			console.log('Good!');
			mainList.shopGoods[i] = a;
		} else {
			i = i - 1;		
		}
	}
}
chooseGoods();

	if (time < 0) {
		console.log('R U fuckin kiddin me?');
	} else if (time > 8 && time < 20) {
		console.log('Work, bitch!')
	} else if (time < 24) {
		console.log('Too late');
	} else {
		console.log('Not on this planet');
	};

	alert(mainList.budget / 30);

	console.log(mainList);