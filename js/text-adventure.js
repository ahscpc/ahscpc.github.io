var reset = function() {
    display.innerText = "";
    game.play();
};

var game = {
    
    write: function(text) {
        display.innerText += text + "\n";
        display.scrollTop = display.scrollHeight;
    },
    
    die: function(message) {
        this.write(message);
        this.write("Game Over");
        setTimeout(reset, 2000);
    },
    
    keyPress: function(key) {
        if (key.keyCode == "13") {
            if (input.value == "1" || input.value == "2") {
                game.write("\n");
                game.onEnter(input.value);
            } else {
                game.write("Bad input given. Enter 1 or 2 to choose an option.");
            }
            input.value = "";
        }
    },
    
    play: function() {
        
        this.write("You are in a dark room with two doors.");
        this.write("[1] Enter the door on the left\n[2] Enter the door on the right");
        this.onEnter = function(text) {
            if (text == "1") {
                this.leftDoor();
            } else if (text == "2") {
                this.die("There was a trap door infront of the door that opened when you opened the door. You fall to your death.");
            }
        };
    },
    
    leftDoor: function() {
        this.write("You find yourself in a graveyard. It is night and there is no moon.");
        this.write("[1] Run out of it as fast as you can\n[2] Observe your surroundings");
        this.onEnter = function(text) {
            if (text == "1") {
                this.escape();
            } else if (text == "2") {
                this.die("A witch casts a spell on you, instantly killing you.");
            }
        }
    },
    
    escape: function() {
        this.write("You see 10 skeletons from the graveyard coming after you.");
        this.write("[1] Attack the skeletons\n[2] Continue hiding");
        this.onEnter = function(text) {
            if (text == "1") {
                this.die("At 10 to 1, they easily overpower you.");
            } else if (text == "2") {
                this.hide();
            }
        }
    },
    
    hide: function() {
        this.write("You hide behind a wall and the skeletons continue without noticing you. There is a house with a shed next to it near you.");
        this.write("[1] Enter the house\n[2] Enter the shed");
        this.onEnter = function(text) {
            if (text == "1") {
                this.house()
            } else if (text == "2") {
                this.die("As you walk in the shed, you step on a pressure plate, activating the 200 pounds of TNT below.");
            }
        };
    },
    
    house: function() {
        this.write("As you walk in, a wizard comes out of the shadows.");
        this.write("[1] Make conversation\n[2] Attack him");
        this.onEnter = function(text) {
            if (text == "1") {
                this.talk();
            } else if (text == "2") {
                this.die("The wizard casts a spell on you, turning you to mush.");
            }
        };
    },
    
    talk: function() {
        this.write("The wizard commands you to retrieve a magic dagger for him.");
        this.write("[1] Accept the quest\n[2] Decline the quest");
        this.onEnter = function(text) {
            if (text == "1") {
                this.startQuest();
            } else if (text=="2") {
                this.die("The wizard was not asking for your opinion. He reduces you to a pile of ash out of rage.");
            }
        }
    },
    
    startQuest: function() {
        this.write("This is as far as we have gotten with this game. If you want it to continue, submit a pull request to ahscpc/ahscpc.github.io on GitHub.");
        setTimeout(reset, 10000);
    }
};

input.onkeydown = game.keyPress;
game.play();

window.onload = function() {
    input.focus();
};
