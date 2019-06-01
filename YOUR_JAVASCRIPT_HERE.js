// Write your JS here
var hero = {
    name: 'Wonder Woman',
    heroic: true,
    inventory: [],
    health: 10,
    weapon : {
        type: 'Shield',
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
function pickUpItem(hero,weapon) {
    return hero.inventory.push(weapon);
}
function equipWeapon(hero) {
    let i = hero.inventory.length;
    if(i >= 1) {
        return hero.weapon = hero.inventory[0];
    } else {
        window.close();
    }
}
window.onload = function() {
    document.getElementById("inn").onclick = function reset() {
        rest(hero);
    }
    document.getElementById("dagger").onclick = function add() {
        let weapon = {type: 'dagger', damage: 2};
        pickUpItem(hero,weapon);
    }
    document.getElementById("bag").onclick = function equip() {
        return equipWeapon(hero);
    }
}
document.getElementById('log').innerHTML += '<br>Play with your hero!!!';
module.exports = {hero,rest,pickUpIteme,quipWeapon};