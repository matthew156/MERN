class Card{
    constructor(name, cost){
        this.name = name;
        this.cost =  cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power =  power;
        this.res = res;
    }
    attack(target){
        this.res-= this.power;
    }
}

class Effect extends Card{
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if(target instanceof Unit){
            if(stat == "res"){
                target.res += this.magnitude;
            }
            else{
                target.power += this.magnitude;
            }
        }
        else{
            throw new Error("Target must be a unit!")
        }
    }
}
const hardAlgo = new Effect("Hard Algorithm", 2, "Increases target's res by 3", "res", 3)
const unhandle = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilence by 2", "res", 2)
const pairProgram = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)
const redbelt = new Unit("Red Belt Ninja", 3, 3, 4)
const blackbelt = new Unit("Black Belt Ninja", 4, 5, 4)


pairProgram.play(redbelt);
redbelt.attack(blackbelt);