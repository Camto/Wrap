class Lava {
	
	constructor(x, y) {
		
		this.x = x;
		this.y = y;
		
		this.collisions = [
			
			new Collision(x - screen.width, y - screen.height, 20, 20),
			new Collision(x               , y - screen.height, 20, 20),
			new Collision(x + screen.width, y - screen.height, 20, 20),
			new Collision(x - screen.width, y                , 20, 20),
			new Collision(x               , y                , 20, 20),
			new Collision(x + screen.width, y                , 20, 20),
			new Collision(x - screen.width, y + screen.height, 20, 20),
			new Collision(x               , y + screen.height, 20, 20),
			new Collision(x + screen.width, y + screen.height, 20, 20)
				
		]
		
	}
	
	draw() {
		
		screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y - screen.height, 20, 20, "red");
		screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y - screen.height, 20, 20, "red");
		screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y - screen.height, 20, 20, "red");
		screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y                , 20, 20, "red");
		screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y                , 20, 20, "red");
		screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y                , 20, 20, "red");
		screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y + screen.height, 20, 20, "red");
		screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y + screen.height, 20, 20, "red");
		screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y + screen.height, 20, 20, "red");
		
	}
	
}