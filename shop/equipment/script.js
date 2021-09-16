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

function loadHelmets() {
    const helmetsEl = document.getElementById('helmets'); 
    helmetsEl.innerHTML = '';
    helmets.forEach((t) => {
        if(t.id == 0) return;
        helmetsEl.innerHTML += `<div class="helmet" onclick="buyHelmet(${t.id})"><img style="background: rgba(${data.user.clothes.boughtHelmets.includes(t.id) ? '0, 139, 139, .44' : '220, 20, 60, .44'})" src="../../equip/equip-imgs/helmet-${t.id}.png"></div>`
    })
    if((helmets.length - 1) > 3)helmetsEl.style.height = '120px';
    if((helmets.length - 1) <= 3)helmetsEl.style.height = '103px';
}

function loadArmors() {
    const armorsEl = document.getElementById('armors'); 
    armorsEl.innerHTML = '';
    armours.forEach((t) => {
        if(t.id == 0) return;
        armorsEl.innerHTML += `<div class="armor" onclick="buyArmor(${t.id})"><img style="background: rgba(${data.user.clothes.boughtArmours.includes(t.id) ? '0, 139, 139, .44' : '220, 20, 60, .44'})" src="../../equip/equip-imgs/armor-${t.id}.png"></div>`
    })
    if((armours.length - 1) > 3)armorsEl.style.height = '120px';
    if((armours.length - 1) <= 3)armorsEl.style.height = '103px';
}

function loadPants() {
    const pantsEl = document.getElementById('pants'); 
    pantsEl.innerHTML = '';
    pants.forEach((t) => {
        if(t.id == 0) return;
        pantsEl.innerHTML += `<div class="pants" onclick="buyPants(${t.id})"><img style="background: rgba(${data.user.clothes.boughtPants.includes(t.id) ? '0, 139, 139, .44' : '220, 20, 60, .44'})" src="../../equip/equip-imgs/pants-${t.id}.png"></div>`
    })
    if((pants.length - 1) > 3)pantsEl.style.height = '120px';
    if((pants.length - 1) <= 3)pantsEl.style.height = '103px';
}

function loadAmulets() {
    const amuletsEl = document.getElementById('amulets'); 
    amuletsEl.innerHTML = '';
    amulets.forEach((t) => {
        if(t.id == 0) return;
        amuletsEl.innerHTML += `<div class="amulet" onclick="buyAmulet(${t.id})"><img style="background: rgba(${data.user.clothes.boughtAmulets.includes(t.id) ? '0, 139, 139, .44' : '220, 20, 60, .44'})" src="../../equip/equip-imgs/amulet-${t.id}.png"></div>`
    })
    if((amuletsEl.length - 1) > 3)amuletsEl.style.height = '120px';
    if((amuletsEl.length - 1) <= 3)amuletsEl.style.height = '103px';
}

loadData();

loadHelmets();
loadArmors();
loadPants();
loadAmulets();

function buyHelmet(id) {
    const helmet = helmets.find(x=> x.id == id);
    if(data.user.clothes.boughtHelmets.includes(id)) return alert(`Вы уже купили ${helmet.name}.`);
    const confirma = confirm(`Вы собираетесь купить ${helmet.name} за ${helmet.cost.toLocaleString('ru')} золота.\nПодтверждаете покупку?`);
    if(!confirma) return;

    if(data.user.balance >= helmet.cost) {
        data.user.balance -= helmet.cost
        data.user.clothes.boughtHelmets.push(helmet.id);
        localStorage.rpg2_data = JSON.stringify(data);
        loadHelmets();
        loadData();

        return alert(`Вы успешно купили ${helmet.name} за ${helmet.cost.toLocaleString('ru')} золота.`);
    }
    if(data.user.balance < helmet.cost) {
        return alert(`Недостаточно средств.`);
    }
}

function buyArmor(id) {
    const armor = armours.find(x=> x.id == id);
    if(data.user.clothes.boughtArmours.includes(id)) return alert(`Вы уже купили ${armor.name}.`);
    const confirma = confirm(`Вы собираетесь купить ${armor.name} за ${armor.cost.toLocaleString('ru')} золота.\nПодтверждаете покупку?`);
    if(!confirma) return;

    if(data.user.balance >= armor.cost) {
        data.user.balance -= armor.cost
        data.user.clothes.boughtArmours.push(armor.id);
        localStorage.rpg2_data = JSON.stringify(data);
        loadArmors();
        loadData();

        return alert(`Вы успешно купили ${armor.name} за ${armor.cost.toLocaleString('ru')} золота.`);
    }

    if(data.user.balance < armor.cost) {
        return alert(`Недостаточно средств.`);
    }
}

function buyPants(id) {
    const pants = armours.find(x=> x.id == id);
    if(data.user.clothes.boughtPants.includes(id)) return alert(`Вы уже купили ${pants.name}.`);
    const confirma = confirm(`Вы собираетесь купить ${pants.name} за ${pants.cost.toLocaleString('ru')} золота.\nПодтверждаете покупку?`);
    if(!confirma) return;

    if(data.user.balance >= pants.cost) {
        data.user.balance -= pants.cost
        data.user.clothes.boughtPants.push(pants.id);
        localStorage.rpg2_data = JSON.stringify(data);
        loadPants();
        loadData();

        return alert(`Вы успешно купили ${pants.name} за ${pants.cost.toLocaleString('ru')} золота.`);
    }

    if(data.user.balance < pants.cost) {
        return alert(`Недостаточно средств.`);
    }
}

function buyAmulet(id) {
    const amulet = amulets.find(x=> x.id == id);
    if(data.user.clothes.boughtAmulets.includes(id)) return alert(`Вы уже купили ${amulet.name}.`);
    const confirma = confirm(`Вы собираетесь купить ${amulet.name} за ${amulet.cost.toLocaleString('ru')} золота.\nЭффект амулета: ${amulet.description}.\nПодтверждаете покупку?`);
    if(!confirma) return;

    if(data.user.balance >= amulet.cost) {
        data.user.balance -= amulet.cost
        data.user.clothes.boughtAmulets.push(amulet.id);
        localStorage.rpg2_data = JSON.stringify(data);
        loadAmulets();
        loadData();

        return alert(`Вы успешно купили ${amulet.name} за ${amulet.cost.toLocaleString('ru')} золота.`);
    }

    if(data.user.balance < amulet.cost) {
        return alert(`Недостаточно средств.`);
    }
}

data.user.clothes.boughtHelmets = data.user.clothes.boughtHelmets.sort((a, b) => a - b);
data.user.clothes.boughtArmours = data.user.clothes.boughtArmours.sort((a, b) => a - b);
data.user.clothes.boughtPants = data.user.clothes.boughtPants.sort((a, b) => a - b);
data.user.clothes.boughtAmulets = data.user.clothes.boughtAmulets.sort((a, b) => a - b);


localStorage.rpg2_data = JSON.stringify(data);