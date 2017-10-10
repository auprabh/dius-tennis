// Class for keeping track of player's score

export default class Player {
    
        constructor(name) {
            this.score = 0;
            this.name = name;
        }
    
        addPoint() {
            // Increment current score (this.score)
            this.score++;
        }
        
    }