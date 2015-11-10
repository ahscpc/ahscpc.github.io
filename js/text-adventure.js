var reset = function() {
    display.innerText = "";
    game.play();
};

var game = {
    
    write: function(text) {
        display.innerText += text + "\n";
    },
    
    keyPress: function(key) {
        if (key.keyCode == "13") {
            game.onEnter(input.value);
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
        this.write("[1] Run out of it as fast as you can\n[2]Observe your surroundings");
        this.onEnter = function(text) {
            if (text == "1") {
                this.escape();
            } else if (text == "2") {
                this.die("A witch casts a spell on you, instantly killing you.");
            }
        }
    },
    
    escape: function() {
        this.write("You just barely evade the 10 skeletons that saw you and chased after you.");
        this.write("[1]Attack the skeletons\n[2]Continue hiding");
        this.onEnter = function(text) {
            if (text == "1") {
                this.die("At 10 to 1, they easily overpower you.");
            } else if (text == "2") {
                this.hide();
            }
        }
    },
    
    die: function(message) {
        this.write(message);
        this.write("Game Over");
        setTimeout(reset, 2000);
    },
    
    hide: function() {
        
    }
};



input.onkeydown = game.keyPress;
game.play();


