if(!localStorage.rpg2_enemyimg) localStorage.rpg2_enemyimg = Number.isInteger(data.enemy.level / 5) ? `./img/monsters/boss-${getRandomInt(1,8)}.png` : `./img/monsters/monster-${getRandomInt(1,8)}.png`
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
        damage: 1,
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
        health: 280,
        maxHealth: 280,
        damage: 5
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
        description: 'Увеличивает шанс критического удара на 5%.',
        cost: 2400000,
        costCurrency: 0
    },
    {
        id: 2,
        name: 'Амулет благополучия',
        description: 'Увеличивает выпадаемое с врагов золото на 15%',
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

if(!localStorage.rpg2_data) localStorage.rpg2_data = JSON.stringify(dataDefault);
else if(localStorage.rpg2_data) data = JSON.parse(localStorage.rpg2_data);

document.onclick = () => {
    localStorage.rpg2_data = JSON.stringify(data);
}

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
    document.getElementById('levels').innerHTML = `УРОВЕНЬ ВРАГА: ${data.enemy.level}<br>УРОВЕНЬ ИГРОКА: ${data.user.level}`
}

function updateLevel() {
    if(data.user.exp >= data.user.maxExp) {
        data.user.level += 1;
        data.user.maxExp += 485
        data.user.exp = 0;
        data.user.damage += 15 * (data.user.level - 1);
        data.user.balance += 12500 * data.user.level;
        data.user.diamonds += getRandomInt(2, 6);
        localStorage.rpg2_data = JSON.stringify(data);
        loadData();
    }
}

function loadEnemy() {
    document.getElementById('user-health').max = data.user.maxHealth;
    document.getElementById('enemy-health').max = data.enemy.maxHealth;
    document.getElementById('user-health').value = data.user.health;
    document.getElementById('enemy-health').value = data.enemy.health;

    document.getElementById('enemy-img').src = localStorage.rpg2_enemyimg
}

function checkEnemyHealth() {
    if(data.enemy.health <= 0) {
        data.user.balance += getRandomInt(18000, 320000) * data.enemy.level;
        data.user.exp += 180 * data.enemy.level;
        updateLevel();
        data.enemy.level += 1;
        data.enemy.maxHealth += 125 * data.enemy.level;
        data.enemy.health = data.enemy.maxHealth;
        data.enemy.damage += data.enemy.level * 3;
        localStorage.rpg2_enemyimg = Number.isInteger(data.enemy.level / 5) ? `./img/monsters/boss-${getRandomInt(1, 8)}.png` : `./img/monsters/monster-${getRandomInt(1, 5)}.png`;
        loadEnemy();
        loadData();
    }
}

function regeneration() {
    if(data.user.health <= data.user.maxHealth / 4) {
        const hitBtn = document.getElementById('hit-btn');
        hitBtn.disabled = true;
        const rl = regenerationLevels.find(x=> x.id == data.user.regenerationLevel);
        const interval = setInterval(() => {
            data.user.health += (data.user.maxHealth / rl.nums[0]) * rl.nums[1];
            if(data.user.health >= data.user.maxHealth) {
                clearInterval(interval);
                hitBtn.disabled = false;
                data.user.health = data.user.maxHealth;
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
    if(getRandomInt(0, 100) < data.user.critChance) {
        data.enemy.health -= ((data.user.damage * data.user.damageMultiplier) * 3);
        data.user.health -= data.enemy.damage;
    }
    else {
        data.enemy.health -= ((data.user.damage * data.user.damageMultiplier));
        data.user.health -= data.enemy.damage - numPercentage((data.enemy.damage), data.user.damageAbsorption)
    }


    regeneration();

    loadEnemy();

    checkEnemyHealth();

}

loadData();

loadEnemy();
