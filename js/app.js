// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += dt * this.speed;
    this.x = this.x % 505;
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var Player = function(){
    Enemy.apply(this, arguments);
}
Player.prototype = Object.create(Enemy.prototype);
Player.prototype.constructor = Player;
var allEnemies = [new Enemy(20, 20, 50)];
var player = new Player(120, 120, 50);
Player.prototype.handleInput = function(direction){
    this.x += this.speed * direction[0];
    this.y += this.speed * direction[1];
};
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: [0, -1],
        38: [1, 0],
        39: [0, 1],
        40: [-1, 0]
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
