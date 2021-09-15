const data = JSON.parse(localStorage.rpg2_data);

data.user.balance = 999999999;
data.user.diamonds = 999999999;
data.user.exp += 500000;
data.user.damage += 20000;

localStorage.rpg2_data = JSON.stringify(data);
location.href = '../'