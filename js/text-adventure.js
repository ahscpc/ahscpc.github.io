var game = {
    
    write: function(text) {
        display.innerText += text + "\n";
    },
    
    keyPress: function(key) {
        if (key.keyCode == "13") {
            var text = new String(input.textContent);
            input.textContent = "";
            this.onEnter(text);
        }
    },
    
    play: function() {
        this.write("[1] Enter the door on the left\n[2] Enter the door on the right");
        this.onEnter = function(text) {
            if (text.textContent == "1") {
                this.leftDoor();
            } else if (text.textContent == "2") {
                this.rightDoor();
            }
        };
    },
    
    leftDoor: function() {
        this.write("You live");
    },
    
    rightDoor: function() {
        this.write("You die");
    }
};

input.onkeydown = game.keyPress;
game.play();
