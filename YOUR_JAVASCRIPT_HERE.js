// Write your JS here
var hero = {
    name: 'Genie',
    heroic: true,
    inventory: [],
    health: 10,
    weapon : {
        type: 'Lamp',
        damage: 2
    }
}
function rest(hero) {
    if (hero.health === 10) {
        window.alert('You are strong enough!');
    } else {
        hero.health = 10;
    }
    return hero;
}
window.onload = function() {
    document.getElementById("inn").onclick = function reset() {
        rest(hero);
    }
}
function pickUpItem(hero,weapon) {
    var newLength = hero.inventory.push(weapon);
}

module.exports = {hero,rest,reset,pickUpItem,equipWeapon};