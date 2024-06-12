import inquirer from "inquirer";
import * as console from "console";
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDerecer() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelincrease() {
        this.fuel = 100;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDerecer() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let playername = await inquirer.prompt({
    name: "pname",
    type: "input",
    message: " Enter your name"
});
let opponentname = await inquirer.prompt({
    name: "opname",
    type: "list",
    message: "Select your Opponent",
    choices: ["Skeleton", "Alien", "Zombie"]
});
let p1 = new player(playername.pname);
let op1 = new opponent(opponentname.opname);
do {
    // skeleton
    if (opponentname.opname === "Skeleton") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "What would you like to do ",
            choices: ["Attack", "Drink portion", "Run for your life"]
        });
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDerecer();
                console.log(`${p1.name} fuel remain ${p1.fuel}`);
                console.log(`${op1.name} fuel remain ${op1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose , Better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                op1.fuelDerecer();
                console.log(`${p1.name} fuel remain ${p1.fuel}`);
                console.log(`${op1.name} fuel remain ${op1.fuel}`);
                if (op1.fuel <= 0) {
                    console.log("you win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelincrease();
            console.log(`You fuel is ${p1.fuel}`);
        }
        if (ask.opt === "Run for your life") {
            console.log("You lose , Better luck next time");
            process.exit();
        }
    }
    // Alien
    if (opponentname.opname === "Alien") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "What would you like to do ",
            choices: ["Attack", "Drink portion", "Run for your life"]
        });
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDerecer();
                console.log(`${p1.name} fuel remain ${p1.fuel}`);
                console.log(`${op1.name} fuel remain ${op1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose , Better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                op1.fuelDerecer();
                console.log(`${p1.name} fuel remain ${p1.fuel}`);
                console.log(`${op1.name} fuel remain ${op1.fuel}`);
                if (op1.fuel <= 0) {
                    console.log("you win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelincrease();
            console.log(`You fuel is ${p1.fuel}`);
        }
        if (ask.opt === "Run for your life") {
            console.log("You lose , Better luck next time");
            process.exit();
        }
    }
    //Zombie
    if (opponentname.opname === "Zombie") {
        let ask = await inquirer.prompt({
            name: "opt",
            type: "list",
            message: "What would you like to do ",
            choices: ["Attack", "Drink portion", "Run for your life"]
        });
        if (ask.opt === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDerecer();
                console.log(`${p1.name} fuel remain ${p1.fuel}`);
                console.log(`${op1.name} fuel remain ${op1.fuel}`);
                if (p1.fuel <= 0) {
                    console.log("you loose , Better luck next time");
                    process.exit();
                }
            }
            if (num <= 0) {
                op1.fuelDerecer();
                console.log(`${p1.name} fuel remain ${p1.fuel}`);
                console.log(`${op1.name} fuel remain ${op1.fuel}`);
                if (op1.fuel <= 0) {
                    console.log("you win");
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            p1.fuelincrease();
            console.log(`You fuel is ${p1.fuel}`);
        }
        if (ask.opt === "Run for your life") {
            console.log("You lose , Better luck next time");
            process.exit();
        }
    }
} while (true);
{ }
