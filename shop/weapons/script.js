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

if(!localStorage.rpg2_data) localStorage.rpg2_data = JSON.stringify(dataDefault);
else if(localStorage.rpg2_data) data = JSON.parse(localStorage.rpg2_data);

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

if(data.user.clothes.amulet == 4) {
    helmets.forEach(t => t.cost /= 2);
    armours.forEach(t => t.cost /= 2);
    pants.forEach(t => t.cost /= 2);
    amulets.forEach(t => t.cost /= 2);
}

function loadData() {
    document.getElementsByClassName('balance')[0].innerHTML = data.user.balance;
    document.getElementsByClassName('balance')[1].innerHTML = data.user.diamonds;
    document.getElementsByClassName('balance')[2].innerHTML = `${data.user.level} [${Math.floor(data.user.exp * 100 / data.user.maxExp)}%]`;
}

function loadWeapons() {
    const el = document.getElementById('weapons'); 
    el.innerHTML = '';
    weapons.forEach((t) => {
        if(t.id == 0) return;
        el.innerHTML += `<div class="weapon" onclick="buyWeapon(${t.id})"><img style="background: rgba(${data.user.weapon.boughtWeapons.includes(t.id) ? '0, 139, 139, .44' : '220, 20, 60, .44'})" src="../../equip/equip-imgs/weapon-${t.id}.png"></div>`
    })
    if((weapons.length - 1) > 3) el.style.height = '120px';
    if((weapons.length - 1) <= 3) el.style.height = '103px';
}

function buyWeapon(id) {
    const weapon = weapons.find(x=> x.id == id);
    if(data.user.weapon.boughtWeapons.includes(id)) return alert(`Вы уже купили ${weapon.name}.`);
    const confirma = confirm(`Вы собираетесь купить ${weapon.name} за ${weapon.cost.toLocaleString('ru')} золота.\nПодтверждаете покупку?`);
    if(!confirma) return;

    if(data.user.balance >= weapon.cost) {
        data.user.balance -= weapon.cost
        data.user.weapon.boughtWeapons.push(weapon.id);
        localStorage.rpg2_data = JSON.stringify(data);
        loadWeapons();
        loadData();

        return alert(`Вы успешно купили ${weapon.name} за ${weapon.cost.toLocaleString('ru')} золота.`);
    }
    if(data.user.balance < weapon.cost) {
        return alert(`Недостаточно средств.`);
    }
}

loadWeapons();
loadData();