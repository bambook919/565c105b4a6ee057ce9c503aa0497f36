const audio = {
    monster: {
        roar: new Audio('./audio/monster-roar.mp3'),
    },
    fighting: {
        hit: new Audio('./audio/hit.mp3'),
        crit: new Audio('./audio/crit.mp3'),
        playerHurt1: new Audio('./audio/player-hurt-1.mp3'),
        playerHurt2: new Audio('./audio/player-hurt-2.mp3'),
        playerHurt3: new Audio('./audio/player-hurt-3.mp3'),
    },
    other: {
        win: new Audio('./audio/win.mp3'),
        levelUp: new Audio('./audio/level-up.mp3'),
        coins: new Audio('./audio/coins.mp3')
    }
}

function upgradeDamage(num) {
    if(num == 'my_num') {
        let prompta = prompt(`Введите число, на которое хотите повысить урон.`, Math.floor(data.user.balance / 13500))

        if(!+prompta) {
            return alert('Введите число больше нуля.');
        }

        if(+prompta <= 0) {
            alert('Введите число больше нуля.');
            upgradeDamage('my_num');
        }

        prompta = Math.floor(prompta);
        const confirma = confirm(`Вы уверены, что хотите повысить урон на ${(+prompta).toLocaleString('ru')} ед. за ${(13500 * +prompta).toLocaleString('ru')} золота?`);
        if(confirma) {
            if(data.user.balance < 13500 * +prompta) return alert('Недостаточно средств.');
            if(data.user.balance >= 13500 * +prompta) {
                data.user.balance -= 13500 * +prompta;
                data.user.damage += Math.floor(prompta);
                localStorage.rpg2_data = JSON.stringify(data);
                loadData();
                return alert(`Вы повысили урон на ${(+prompta).toLocaleString('ru')} ед. за ${(13500 * +prompta).toLocaleString('ru')} золота.`);
            }
        }
    }

    if(typeof num == 'number') {
        const confirma = confirm(`Вы уверены, что хотите повысить урон на ${(num).toLocaleString('ru')} ед. за ${(13500 * num).toLocaleString('ru')} золота?`);
        if(confirma) {
            if(data.user.balance < 13500 * num) return alert('Недостаточно средств.');
            if(data.user.balance >= 13500 * num) {
                data.user.balance -= 13500 * num;
                data.user.damage += Math.floor(num);
                localStorage.rpg2_data = JSON.stringify(data);
                loadData();
                return alert(`Вы повысили урон на ${(num).toLocaleString('ru')} ед. за ${(13500 * num).toLocaleString('ru')} золота.`);
            }
        }
    }

}

let data = {};
let dataDefault = {
    user: {
        balance: 0,
        diamonds: 0,
        exp: 0,
        maxExp: 1200,
        level: 1,
        health: 100,
        maxHealth: 100,
        damage: 5,
        damageMultiplier: 1,
        damageAbsorption: 0,
        critChance: 0,
        regenerationLevel: 1,
        clothes: {
            helmet: 0,
            armor: 0,
            pants: 0,
            boughtHelmets: [],
            boughtArmours: [],
            boughtPants: [],

        },
        weapon: {
            id: 0,
            rarity: 0,
            damage: 0
        },
        stats: {
            litersOfBloodSpilled: 0,
            killedBosses: 0,
            killedHenchmans: 0,
            totalDamaged: 0,
            totalGotDamage: 0,
            totalGoldSpent: 0,
            totalDiamondsSpent: 0,
            totalClicked: 0,
            totalHealed: 0,
            totalGotGold: 0,
            totalGotDiamonds: 0,
            totalWeaponEvolves: 0,
            highRarity: 0
        }
    },
    enemy: {
        level: 1,
        health: 135,
        maxHealth: 135,
        damage: 3
    }
}

const rarities = [
    {
        id: 1,
        name: 'Обычный',
        codeName: 'common',
        color: 'grey'
    },
    {
        id: 2,
        name: 'Необычный',
        codeName: 'uncommon',
        color: '#58c646'
    },
    {
        id: 3,
        name: 'Редкий',
        codeName: 'rarely',
        color: 'cornflowerblue'
    },
    {
        id: 4,
        name: 'Эпический',
        codeName: 'epic',
        color: 'blueviolet'
    },
    {
        id: 5,
        name: 'Легендарный',
        codeName: 'legendary',
        color: 'orange'
    },
    {
        id: 6,
        name: 'Божественный',
        codeName: 'godly',
        color: 'crimson'
    },
    {
        id: 7,
        name: 'Позолоченный',
        codeName: 'gold',
        color: 'gold'
    }
]

const weapons = [
    {
        id: 0,
        name: 'Нет',
        damage: 0,
        cost: 0,
        costCurrency: 1
    },
    {
        id: 1,
        name: 'Деревянная дубина',
        damage: 20,
        cost: 90000,
        costCurrency: 1
    },
    {
        id: 2,
        name: 'Каменный меч',
        damage: 45,
        cost: 135000,
        costCurrency: 1
    },
    {
        id: 3,
        name: 'Золотой меч',
        damage: 45,
        cost: 135000,
        costCurrency: 1
    },
    {
        id: 4,
        name: 'Железный меч',
        damage: 80,
        cost: 235000,
        costCurrency: 1
    },
    {
        id: 5,
        name: 'Пиратская сабля',
        damage: 200,
        cost: 1400000,
        costCurrency: 1
    },
    {
        id: 6,
        name: 'Тяжёлый меч',
        damage: 500,
        cost: 2300000,
        costCurrency: 1
    },
    {
        id: 7,
        name: 'Кинжал',
        damage: 580,
        cost: 3300000,
        costCurrency: 1
    },
    {
        id: 8,
        name: 'Алмазный меч',
        damage: 800,
        cost: 5200000,
        costCurrency: 1
    },
    {
        id: 9,
        name: 'Арбалет',
        damage: 850,
        cost: 5500000,
        costCurrency: 1
    },
    {
        id: 10,
        name: 'Пистолет',
        damage: 1200,
        cost: 8000000,
        costCurrency: 1
    },
    {
        id: 11,
        name: 'Дробовик',
        damage: 2000,
        cost: 12000000,
        costCurrency: 1
    },
    {
        id: 12,
        name: 'Царь-пушка',
        damage: 4500,
        cost: 24000000,
        costCurrency: 1
    },
    {
        id: 13,
        name: 'Ракетница',
        damage: 20000,
        cost: 150000000,
        costCurrency: 1
    }
];

const helmets = [
    {
        id: 0,
        name: 'Нет',
        protect: 0,
        cost: 0,
        costCurrency: 0
    },
    {
        id: 1,
        name: 'Шлем рыцаря',
        protect: 8,
        cost: 30000,
        costCurrency: 1
    },
    {
        id: 2,
        name: 'Шлем викинга',
        protect: 13,
        cost: 100000,
        costCurrency: 1
    },
    {
        id: 3,
        name: 'Шлем гладиатора',
        protect: 17,
        cost: 240000,
        costCurrency: 1
    }
];

const armours = [
    {
        id: 0,
        name: 'Нет',
        protect: 0,
        cost: 0,
        costCurrency: 0
    },
    {
        id: 1,
        name: 'Броня рыцаря',
        protect: 14,
        cost: 140000,
        costCurrency: 1
    },
    {
        id: 2,
        name: 'Броня гладиатора',
        protect: 19,
        cost: 215000,
        costCurrency: 1
    },
    {
        id: 3,
        name: 'Броня генерала',
        protect: 24,
        cost: 350000,
        costCurrency: 1
    },
    {
        id: 4,
        name: 'Броня императора',
        protect: 33,
        cost: 800000,
        costCurrency: 1
    }
]

const pants = [
    {
        id: 0,
        name: 'Нет',
        protect: 0,
        cost: 0,
        costCurrency: 0
    },
    {
        id: 1,
        name: 'Обычные штаны',
        protect: 4,
        cost: 12000,
        costCurrency: 1
    }
];

const amulets = [
    {
        id: 0,
        name: 'Нет',
        description: 'Нет',
        cost: 0,
        costCurrency: 0
    },
    {
        id: 1,
        name: 'Амулет крит. шанса',
        description: 'Увеличивает шанс критического удара на 5%',
        cost: 2400000,
        costCurrency: 0
    },
    {
        id: 2,
        name: 'Амулет благополучия',
        description: 'Увеличивает выпадаемое с врагов золото на 50%',
        cost: 5100000,
        costCurrency: 0
    },
    {
        id: 3,
        name: 'Амулет здоровья',
        description: 'Увеличивает уровень здоровья на 25%',
        cost: 24500000,
        costCurrency: 0
    },
    {
        id: 4,
        name: 'Амулет дисконта',
        description: 'Уменьшает цены в магазине на 50%',
        cost: 19500000,
        costCurrency: 0
    },
];

const regenerationLevels = [
    {
        id: 1,
        nums: [42, 1.5]
    },
    {
        id: 2,
        nums: [37, 1.5]
    },
    {
        id: 3,
        nums: [25, 2]
    },
    {
        id: 4,
        nums: [16, 2.5]
    },
    {
        id: 5,
        nums: [11, 3.1]
    }
]

if(!localStorage.rpg2_data) {
    localStorage.rpg2_data = JSON.stringify(dataDefault);
    data = dataDefault;
}
else if(localStorage.rpg2_data) data = JSON.parse(localStorage.rpg2_data);


document.onclose = () => {
    localStorage.rpg2_data = JSON.stringify(data);
}

setInterval(() => {
    localStorage.rpg2_data = JSON.stringify(data);
}, 250);


function loadData() {
    document.getElementsByClassName('balance')[0].innerHTML = Math.floor(data.user.balance).toLocaleString('ru');
    document.getElementsByClassName('balance')[1].innerHTML = Math.floor(data.user.diamonds);
    document.getElementsByClassName('balance')[2].innerHTML = `${data.user.level} [${Math.floor(data.user.exp * 100 / data.user.maxExp)}%]`;
    document.getElementById('levels').innerHTML = `УРОВЕНЬ ВРАГА: ${data.enemy.level}<br>УРОВЕНЬ ИГРОКА: ${data.user.level}`;
    document.getElementById('gain-gold').innerHTML = `Получить золото (+${data.user.level * 120})`
}

function updateLevel() {
    while(data.user.exp >= data.user.maxExp) {
        data.user.level += 1;
        data.user.maxExp += 485 * (data.enemy.level / 2)
        data.user.damage += 2 * (data.user.level - 1);
        data.user.balance += 12500 * data.user.level;
        data.user.maxHealth += 500;
        data.user.diamonds += getRandomInt(2, 6);
        localStorage.rpg2_data = JSON.stringify(data);
        data.user.maxExp = Math.floor(data.user.maxExp)
        loadData();
    }
}

function loadEnemy() {
    document.getElementById('user-health').max = data.user.clothes.amulet == 3 ? (data.user.maxHealth * 1.25) : (data.user.maxHealth);
    document.getElementById('enemy-health').max = data.enemy.maxHealth;
    document.getElementById('user-health').value = data.user.health;
    document.getElementById('enemy-health').value = data.enemy.health;

    document.getElementById('enemy-img').src = localStorage.rpg2_enemyimg
    document.getElementById('enemy-img').setAttribute('style', 'display: block;');
}

function evolveWeapon() {
    if(data.user.level < 3) return alert('Эволюция оружия открывается на 3 уровне игрока.');
    if(data.user.weapon.rarity == rarities.length) return alert(`${rarities[rarities.length - 1].name} — максимальная редкость оружия.`)
    const confirma = confirm(`Вы уверены, что хотите эволюционировать ${weapons.find(x=> x.id == data.user.weapon.id).name} до редкости «${rarities.find(x=> x.id == data.user.weapon.rarity + 1)}» за ${(data.user.weapon.rarity * 5000000).toLocaleString('ru')} золота?`);
    if(!confirma) return;
    data.user.balance -= data.user.weapon.rarity * 5000000;
    data.user.weapon.rarity += 1;
    localStorage.rpg2_data = JSON.stringify(data);

    alert(`Вы успешно эволюционировали оружие до редкости «${rarities.find(x=> x.id == data.user.weapon.rarity).name}» за ${((data.user.weapon.rarity - 1) * 5000000).toLocaleString('ru')} золота.`);
}

function checkEnemyHealth() {
    if(data.enemy.health <= 0) {
        data.enemy.level += 1;
        data.enemy.maxHealth += 33 * data.enemy.level;
        data.enemy.health = data.enemy.maxHealth;
        data.enemy.damage += data.enemy.level * 1.5;
        data.enemy.damage = Math.floor(data.enemy.damage);
        if(data.user.clothes.amulet == 2) data.user.balance += ((getRandomInt(18000, 200000) * data.enemy.level) * 1.5);
        else if(data.user.clothes.amulet != 2) data.user.balance += ((getRandomInt(18000, 200000) * data.enemy.level));

        data.user.exp += 200 * (data.enemy.level + getRandomInt(1, 3));
        data.user.exp = Math.floor(data.user.exp);
        updateLevel();

        localStorage.rpg2_enemyimg = Number.isInteger(data.enemy.level / 5) ? `./img/monsters/boss-${getRandomInt(1, 8)}.png` : `./img/monsters/monster-${getRandomInt(1, 5)}.png`;
        loadEnemy();
        loadData();

        audio.other.win.play();
        data.user.health = data.user.maxHealth;
        localStorage.rpg2_data = JSON.stringify(data);
    }
}

function upgradeRegeneration() {
    if(data.user.regenerationLevel == 5) return alert('Вы достигли максимального уровня регенерации.')
    const cost = data.user.regenerationLevel * 2350000;
    const confirma = confirm(`Вы уверены, что хотите улучшить регенерацию до уровня ${data.user.regenerationLevel + 1}${(data.regenerationLevel + 1) == 5 ? ' (максимальный)' : ''} за ${cost.toLocaleString('ru')} золота?`);
    if(confirma) {
        if(data.user.regenerationLevel < 5) {
            if(data.user.balance >= cost) {
                data.user.balance -= cost;
                data.user.regenerationLevel += 1;
                localStorage.rpg2_data = JSON.stringify(data);
                return alert(`Вы успешно улучшили регенерацию ${data.user.regenerationLevel == 5 ? 'максимального уровня (5)' : 'уровня ' + data.user.regenerationLevel} за ${cost.toLocaleString('ru')} золота.`)
            }

            if(data.user.balance < cost) {
                return alert('Недостаточно средств.');
            }
        }

    }

    if(!confirma) return;
}

function regeneration() {
    if((data.user.health) <= (data.user.clothes.amulet == 3 ? (data.user.maxHealth * 1.25) : (data.user.maxHealth)) / 4) {
        const hitBtn = document.getElementById('hit-btn');
        hitBtn.disabled = true;
        const rl = regenerationLevels.find(x=> x.id == data.user.regenerationLevel);
        const interval = setInterval(() => {
            data.user.health += (data.user.maxHealth / rl.nums[0] * rl.nums[1]);
            if(data.user.health >= (data.user.clothes.amulet == 3 ? (data.user.maxHealth * 1.25) : (data.user.maxHealth))) {
                clearInterval(interval);
                hitBtn.disabled = false;
                data.user.health = data.user.clothes.amulet == 3 ? (data.user.maxHealth * 1.25) : (data.user.maxHealth);
            }
            loadEnemy();
        }, 333)
    }
}

function numPercentage(int, p) {
    return Math.floor(int / 100 * p)
} 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function hitEnemy() {
    audio.monster.roar.play();
    if(getRandomInt(0, 100) < (data.user.critChance + (data.user.clothes.amulet == 1 ? 5 : 0))) {
        data.enemy.health -= ((data.user.damage * data.user.damageMultiplier) * 3);
        data.user.health -= data.enemy.damage - numPercentage((data.enemy.damage), data.user.damageAbsorption);
        audio.fighting.crit.play();
    }
    else {
        data.enemy.health -= ((data.user.damage * data.user.damageMultiplier));
        data.user.health -= data.enemy.damage - numPercentage((data.enemy.damage), data.user.damageAbsorption);
        audio.fighting.hit.play();
    }



    regeneration();

    loadEnemy();

    checkEnemyHealth();

}

loadData();

loadEnemy();
if(!localStorage.rpg2_enemyimg) {
    localStorage.rpg2_enemyimg = Number.isInteger(data.enemy.level / 5) ? `./img/monsters/boss-${getRandomInt(1,8)}.png` : `./img/monsters/monster-${getRandomInt(1,5)}.png`;
    location.reload();
}

checkEnemyHealth();

if(!Object.keys(data.user.clothes).includes('amulet')) {
    data.user.clothes.amulet = 0;
    localStorage.rpg2_data = JSON.stringify(data);
}

if(!Object.keys(data.user.clothes).includes('boughtAmulets')) {
    data.user.clothes.boughtAmulets = [];
    localStorage.rpg2_data = JSON.stringify(data);
}

if(!Object.keys(data.user.weapon).includes('boughtWeapons')) {
    data.user.weapon.boughtWeapons = [];
    localStorage.rpg2_data = JSON.stringify(data);
}

data.user.clothes.boughtHelmets = data.user.clothes.boughtHelmets.sort((a, b) => a - b);
data.user.clothes.boughtArmours = data.user.clothes.boughtArmours.sort((a, b) => a - b);
data.user.clothes.boughtPants = data.user.clothes.boughtPants.sort((a, b) => a - b);
data.user.clothes.boughtAmulets = data.user.clothes.boughtAmulets.sort((a, b) => a - b);
data.user.weapon.boughtWeapons = data.user.weapon.boughtWeapons.sort((a, b) => a - b);


localStorage.rpg2_data = JSON.stringify(data);