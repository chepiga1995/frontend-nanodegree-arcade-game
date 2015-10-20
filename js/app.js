var Entity = function(x, y, speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
}
Entity.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Enemy object
var Enemy = function() {
    Entity.apply(this, arguments);
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

//Enemy's methods

Enemy.prototype.update = function(dt) {
    this.x += dt * this.speed;
    this.x = this.x % 505;
};

//Player

var Player = function(){
    Entity.apply(this, arguments);
    this.sprite = 'images/char-boy.png';
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

//Player's methods

Player.prototype.handleInput = function(direction){
    this.x += this.speed * direction[0];
    this.y += this.speed * direction[1];
};

//Instance

var allEnemies = [new Enemy(20, 20, 50)];
var player = new Player(120, 120, 50);




document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: [-1, 0],
        38: [0, -1],
        39: [1, 0],
        40: [0, 1]
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
