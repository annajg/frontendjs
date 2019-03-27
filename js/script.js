let money,
name,
time

function start() {
	money = prompt("Ваш бюджет?");

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
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt("Какой тип товаров будем продавать?", '');

			if ((typeof(a)) === "string" && (typeof(a)) != null && a != '' && a.length < 50 ) {
				console.log('Good!');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;		
			}
		}
	},
	worktime: function worktime(time) {
		if (time < 0) {
			console.log('R U fuckin kiddin me?');
		} else if (time > 8 && time < 20) {
			console.log('Work, bitch!');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Too late');
		} else {
			console.log('Not on this planet');
		}
	},
	dayBudget: function dayBudget() {
		alert("Everyday budget" + mainList.budget / 30);
	},
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			price = (price/100)*80;
		}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 1; i < 4; i++) {
			let name = prompt("Employer name");
			mainList.employers[i] = name;
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "");

		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("More", ""));
		mainList.shopItems.sort();
	}
}	
console.log(mainList);