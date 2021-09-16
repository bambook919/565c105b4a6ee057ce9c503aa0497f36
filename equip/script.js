let data = JSON.parse(localStorage.rpg2_data);
let dataDefault = {
    user: {
        balance: 0,
        diamonds: 0,
        exp: 0,
        maxExp: 1200,
        level: 1,
        damage: 1,
        damageMultiplier: 1,
        damageAbsorption: 0,
        critChance: 0,
        regenerationLevel: 1,
        clothes: {
            helmet: 0,
            armor: 0,
            pants: 0,
            amulet: 0,
            boughtHelmets: [],
            boughtArmours: [],
            boughtPants: [],
            boughtAmulets: []

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

loadData();

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
        cost: 590000,
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
        costCurrency: 1
    },
    {
        id: 1,
        name: 'Амулет крит. шанса',
        description: 'Увеличивает шанс критического удара на 5%',
        cost: 700000,
        costCurrency: 1
    },
    {
        id: 2,
        name: 'Амулет благополучия',
        description: 'Увеличивает выпадаемое с врагов золото на 50%',
        cost: 1400000,
        costCurrency: 1
    },
    {
        id: 3,
        name: 'Амулет здоровья',
        description: 'Увеличивает уровень здоровья на 25%',
        cost: 1200000,
        costCurrency: 1
    },
    {
        id: 4,
        name: 'Амулет дисконта',
        description: 'Уменьшает цены в магазине на 50%',
        cost: 2500000,
        costCurrency: 1
    }
];


if(!localStorage.rpg2_data) localStorage.rpg2_data = JSON.stringify(dataDefault);
else if(localStorage.rpg2_data) data = JSON.parse(localStorage.rpg2_data);

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



loadClothes();



function loadClothes() {
    const el = document.getElementById('select-helmet');
    const el1 = document.getElementById('select-armor');
    const el2 = document.getElementById('select-pants');
    const el3 = document.getElementById('select-amulet');
    const el4 = document.getElementById('select-weapon');

    let elOp;
    el.options[0].selected = 'selected';
    el1.options[0].selected = 'selected';
    el2.options[0].selected = 'selected';
    el3.options[0].selected = 'selected';

    data.user.clothes.boughtHelmets.forEach(t => {
        elOp = document.createElement('option');
        elOp.text = helmets.find(x=> x.id == t).name;
        elOp.setAttribute('value', `helmet-${t}`);
        el.appendChild(elOp)

    });
    data.user.clothes.boughtArmours.forEach(t => {
        elOp = document.createElement('option');
        elOp.text = armours.find(x=> x.id == t).name;
        elOp.setAttribute('value', `armor-${t}`);
        el1.appendChild(elOp)

    });
    data.user.clothes.boughtPants.forEach(t => {
        elOp = document.createElement('option');
        elOp.text = pants.find(x=> x.id == t).name;
        elOp.setAttribute('value', `pants-${t}`);
        el2.appendChild(elOp)
    });

    data.user.clothes.boughtAmulets.forEach(t => {
        elOp = document.createElement('option');
        elOp.text = amulets.find(x=> x.id == t).name;
        elOp.setAttribute('value', `amulet-${t}`);
        el3.appendChild(elOp)
    });

    data.user.weapon.boughtWeapons.forEach(t => {
        elOp = document.createElement('option');
        elOp.text = weapons.find(x=> x.id == t).name;
        elOp.setAttribute('value', `weapon-${t}`);
        el4.appendChild(elOp)
    })

    el.options[data.user.clothes.helmet > el.options.length - 1 ? el.options.length - 1 : data.user.clothes.helmet].selected = 'selected';
    el1.options[data.user.clothes.armor > el1.options.length - 1 ? el1.options.length - 1 : data.user.clothes.armor].selected = 'selected';
    el2.options[data.user.clothes.pants > el2.options.length - 1 ? el2.options.length - 1 : data.user.clothes.pants].selected = 'selected';
    el3.options[data.user.clothes.amulet > el3.options.length - 1 ? el3.options.length - 1 : data.user.clothes.amulet].selected = 'selected';
    el4.options[data.user.weapon.id > el4.options.length - 1 ? el4.options.length - 1 : data.user.weapon.id].selected = 'selected';
}

function drawHuman1() {
    const select = document.getElementById('select-helmet');
    const id = helmets.find(x=> x.name == select.options[select.selectedIndex].text).id;
    if(select.options[select.selectedIndex].text == 'Нет') {
        data.user.clothes.helmet = 0;
        document.getElementById('helmet-img').setAttribute('src', '');
        document.getElementById('helmet-img').setAttribute('style', 'display: none;');
    }
    if(select.options[select.selectedIndex].text !== 'Нет') {
        document.getElementById('helmet-img').setAttribute('src', `./equip-imgs/helmet-${id}`);
        document.getElementById('helmet-img').setAttribute('style', 'display: block;');
    }
    document.getElementById('helmet-img').setAttribute('src', `./equip-imgs/helmet-${id}.png`)
    document.getElementById('helmet-img').className = 'helmet-' + id;
}

function drawHuman2() {
    const select = document.getElementById('select-armor');
    const id = armours.find(x=> x.name == select.options[select.selectedIndex].text).id;
    if(select.options[select.selectedIndex].text == 'Нет') {
        data.user.clothes.armor = 0;
        document.getElementById('armor-img').setAttribute('src', '');
        document.getElementById('armor-img').setAttribute('style', 'display: none;');
    }
    if(select.options[select.selectedIndex].text !== 'Нет') {
        document.getElementById('armor-img').setAttribute('src', `./equip-imgs/helmet-${id}`);
        document.getElementById('armor-img').setAttribute('style', 'display: block;');
    }
    document.getElementById('armor-img').setAttribute('src', `./equip-imgs/armor-${id}.png`)
    document.getElementById('armor-img').className = 'armor-' + id;

    if(id == 1) {
        document.getElementById('armor-img').setAttribute('style',"top: 227px; position: absolute");
    }
}

function drawHuman3() {
    const select = document.getElementById('select-pants');
    if(select.options[select.selectedIndex].text == 'Нет' || data.user.clothes.pants == 0) {
        data.user.clothes.pants = 0;
        document.getElementById('pants-img').setAttribute('src', '');
        document.getElementById('pants-img').setAttribute('style', 'display: none;');
    }
    else if(select.options[select.selectedIndex].text !== 'Нет' && data.user.clothes.pants !== 0) {
        const id = pants.find(x=> x.name == select.options[select.selectedIndex].text).id
        document.getElementById('pants-img').setAttribute('src', `./equip-imgs/pants-${id}.png`)
        document.getElementById('pants-img').className = 'pants-' + id;
        document.getElementById('pants-img').setAttribute('style', 'display: block;');
    }

}

function drawHuman4() {
    const select = document.getElementById('select-amulet');
    if(select.options[select.selectedIndex].text == 'Нет' || data.user.clothes.amulet == 0) {
        data.user.clothes.pants = 0;
        document.getElementById('amulet-img').setAttribute('src', '');
        document.getElementById('amulet-img').setAttribute('style', 'display: none;');
    }
    else if(select.options[select.selectedIndex].text !== 'Нет' && data.user.clothes.amulet !== 0) {
        const id = amulets.find(x=> x.name == select.options[select.selectedIndex].text).id
        document.getElementById('amulet-img').setAttribute('src', `./equip-imgs/amulet-${id}.png`)
        document.getElementById('amulet-img').className = 'amulet-' + id;
        document.getElementById('amulet-img').setAttribute('style', 'display: block;');
    }

}

function drawHuman5() {
    const select = document.getElementById('select-weapon');
    if(select.options[select.selectedIndex].text == 'Нет' || data.user.weapon.id == 0) {
        data.user.weapon.id = 0;
        document.getElementById('weapon-img').setAttribute('src', '');
        document.getElementById('weapon-img').setAttribute('style', 'display: none;');
    }
    else if(select.options[select.selectedIndex].text !== 'Нет' && data.user.weapon.id !== 0) {
        const id = weapons.find(x=> x.name == select.options[select.selectedIndex].text).id
        document.getElementById('weapon-img').setAttribute('src', `./equip-imgs/weapon-${id}.png`)
        document.getElementById('weapon-img').className = 'weapon-' + id;
        document.getElementById('weapon-img').setAttribute('style', 'display: block;');
    }

}

drawHuman1();
drawHuman2();
drawHuman3();
drawHuman4();
drawHuman5();


function selectOnChange1() {
    const select = document.getElementById('select-helmet');
    const select2 = document.getElementById('select-armor');
    const select3 = document.getElementById('select-pants');

    if(select.options[select.selectedIndex].text == 'Нет') data.user.clothes.helmet = 0;
    else {
        data.user.clothes.helmet = helmets.find(x=> x.name == select.options[select.selectedIndex].text).id;
        data.user.damageAbsorption = helmets.find(x=> x.name == select.options[select.selectedIndex].text).protect + armours.find(x=> x.name == select2.options[select2.selectedIndex].text).protect + pants.find(x=> x.name == select3.options[select3.selectedIndex].text).protect;
        localStorage.rpg2_data = JSON.stringify(data);
    }
}

function selectOnChange2() {
    const select = document.getElementById('select-helmet');
    const select2 = document.getElementById('select-armor');
    const select3 = document.getElementById('select-pants');

    if(select.options[select.selectedIndex].text == 'Нет') data.user.clothes.armor = 0;
    else {
        data.user.clothes.armor = armours.find(x=> x.name == select2.options[select2.selectedIndex].text).id;
        data.user.damageAbsorption = helmets.find(x=> x.name == select.options[select.selectedIndex].text).protect + armours.find(x=> x.name == select2.options[select2.selectedIndex].text).protect + pants.find(x=> x.name == select3.options[select3.selectedIndex].text).protect;
        localStorage.rpg2_data = JSON.stringify(data);
    }
}

function selectOnChange3() {
    const select = document.getElementById('select-helmet');
    const select2 = document.getElementById('select-armor');
    const select3 = document.getElementById('select-pants');

    if(select.options[select.selectedIndex].text == 'Нет') data.user.clothes.pants = 0;
    else {
        data.user.clothes.pants = pants.find(x=> x.name == select3.options[select3.selectedIndex].text).id;
        data.user.damageAbsorption = helmets.find(x=> x.name == select.options[select.selectedIndex].text).protect + armours.find(x=> x.name == select2.options[select2.selectedIndex].text).protect + pants.find(x=> x.name == select3.options[select3.selectedIndex].text).protect;
        localStorage.rpg2_data = JSON.stringify(data);
    } 
    if(document.getElementById('select-pants').options[document.getElementById('select-pants').selectedIndex].text == 'Нет') document.getElementById('pants-img').setAttribute('style', 'display: none;');
}

function selectOnChange4() {
    const select = document.getElementById('select-amulet');

    if(select.options[select.selectedIndex].text == 'Нет') data.user.clothes.amulet = 0;
    else {
        data.user.clothes.amulet = amulets.find(x=> x.name == select.options[select.selectedIndex].text).id;
        localStorage.rpg2_data = JSON.stringify(data);
    } 
    if(document.getElementById('select-amulet').options[document.getElementById('select-amulet').selectedIndex].text == 'Нет') document.getElementById('amulet-img').setAttribute('style', 'display: none;');
}

function selectOnChange5() {
    const select = document.getElementById('select-weapon');

    if(select.options[select.selectedIndex].text == 'Нет') data.user.weapon.id = 0;
    else {
        data.user.weapon.id = weapons.find(x=> x.name == select.options[select.selectedIndex].text).id;
        localStorage.rpg2_data = JSON.stringify(data);
    } 
    if(document.getElementById('select-weapon').options[document.getElementById('select-weapon').selectedIndex].text == 'Нет') document.getElementById('weapon-img').setAttribute('style', 'display: none;');
}

function loadData() {
    const select = document.getElementById('select-pants');
    document.getElementsByClassName('balance')[0].innerHTML = Math.floor(data.user.balance).toLocaleString('ru');
    document.getElementsByClassName('balance')[1].innerHTML = data.user.diamonds;
    document.getElementsByClassName('balance')[2].innerHTML = `${data.user.level} [${Math.floor(data.user.exp * 100 / data.user.maxExp)}%]`;
}

setInterval(() => {
    localStorage.rpg2_data = JSON.stringify(data);
    data.user.clothes.boughtHelmets = data.user.clothes.boughtHelmets.sort((a, b) => a - b);
    data.user.clothes.boughtArmours = data.user.clothes.boughtArmours.sort((a, b) => a - b);
    data.user.clothes.boughtPants = data.user.clothes.boughtPants.sort((a, b) => a - b);
    data.user.clothes.boughtAmulets = data.user.clothes.boughtAmulets.sort((a, b) => a - b);
    data.user.weapon.boughtWeapons = data.user.weapon.boughtWeapons.sort((a, b) => a - b);
}, 234);




localStorage.rpg2_data = JSON.stringify(data);