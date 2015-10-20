HEIGHT = 606;
WIDTH = 505;

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
    if (this.x < WIDTH){
        this.x += dt * this.speed;
    } else{
        this.x = - 100;
    }
};

//Player

var Player = function(){
    Entity.apply(this, arguments);
    this.sprite = 'images/char-boy.png';
}

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;
Player.prototype.height = 100;
Player.prototype.width = 80;
//Player's methods

Player.prototype.isInCanvas = function(direction){
    var x = this.x + this.speed * direction[0];
    var y = this.y + this.speed * direction[1];
    return x > -15 && x < WIDTH - 100 && y > -15 && y < HEIGHT - 170;
}

Player.prototype.handleInput = function(direction){
    if (this.isInCanvas(direction)){
        this.x += this.speed * direction[0];
        this.y += this.speed * direction[1];
    }
};

//Instance

var allEnemies;// = [new Enemy(20, 20, 50)];
var player;// = new Player(203, 420, 20);

//Collisions

var checkCollisions = function(){
    for (i in allEnemies){
        // console.log(Math.abs(allEnemies[0].y - player.y));
        if (Math.abs(allEnemies[i].x - player.x) < 60 && Math.abs(allEnemies[i].y - player.y) < 60)
            return true;     
    }
    return false
}


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: [-1, 0],
        38: [0, -1],
        39: [1, 0],
        40: [0, 1]
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
