class Ninja{
    constructor(name, health, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("Welcome" + this.name);
    }
    showStats(){
        console.log("Name:" + this.name +'\n' + "Strength:" + this.strength + "\n" + "Speed:" + this.speed + "\n" + "Health:" + this.health)
    }
    drinkSake(){
        this.health+= 10;
    }}

class Sensei extends Ninja{
    constructor(name, wisdom){
        super(name)
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

const superSensei =  new Sensei("Master Splinter")
superSensei.speakWisdom();
superSensei.showStats();