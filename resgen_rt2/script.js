const data = JSON.parse(localStorage.rpg2_data);

data.balance = 999999999;
data.diamonds = 999999999;
data.exp += 500000;
data.damage += 20000;

localStorage.rpg2_data = JSON.stringify(data);