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

function loadData() {
    document.getElementsByClassName('balance')[0].innerHTML = data.user.balance;
    document.getElementsByClassName('balance')[1].innerHTML = data.user.diamonds;
    document.getElementsByClassName('balance')[2].innerHTML = `${data.user.level} [${Math.floor(data.user.exp * 100 / data.user.maxExp)}%]`;
}

loadData();

data.user.clothes.boughtHelmets = data.user.clothes.boughtHelmets.sort((a, b) => a - b);
data.user.clothes.boughtArmours = data.user.clothes.boughtArmours.sort((a, b) => a - b);
data.user.clothes.boughtPants = data.user.clothes.boughtPants.sort((a, b) => a - b);
data.user.clothes.boughtAmulets = data.user.clothes.boughtAmulets.sort((a, b) => a - b);
data.user.weapon.boughtWeapons = data.user.weapon.boughtWeapons.sort((a, b) => a - b);


localStorage.rpg2_data = JSON.stringify(data);