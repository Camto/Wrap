class Vert_Patrol_Line {
	
	constructor(x, y) {
		
		this.x = x;
		this.y = y;
		
		this.collisions = [
			
			new Collision(x - screen.width, y - screen.height, 0, 20),
			new Collision(x               , y - screen.height, 0, 20),
			new Collision(x + screen.width, y - screen.height, 0, 20),
			new Collision(x - screen.width, y                , 0, 20),
			new Collision(x               , y                , 0, 20),
			new Collision(x + screen.width, y                , 0, 20),
			new Collision(x - screen.width, y + screen.height, 0, 20),
			new Collision(x               , y + screen.height, 0, 20),
			new Collision(x + screen.width, y + screen.height, 0, 20)
			
		]
		
	}
	
	draw() {
		
		screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y - screen.height, 1, 20, "blue");
		screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y - screen.height, 1, 20, "blue");
		screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y - screen.height, 1, 20, "blue");
		screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y                , 1, 20, "blue");
		screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y                , 1, 20, "blue");
		screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y                , 1, 20, "blue");
		screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y + screen.height, 1, 20, "blue");
		screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y + screen.height, 1, 20, "blue");
		screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y + screen.height, 1, 20, "blue");
		
	}
	
}

class Horiz_Patrol_Line {
	
	constructor(x, y) {
		
		this.x = x;
		this.y = y;
		
		this.collisions = [
			
			new Collision(x - screen.width, y - screen.height, 20, 0),
			new Collision(x               , y - screen.height, 20, 0),
			new Collision(x + screen.width, y - screen.height, 20, 0),
			new Collision(x - screen.width, y                , 20, 0),
			new Collision(x               , y                , 20, 0),
			new Collision(x + screen.width, y                , 20, 0),
			new Collision(x - screen.width, y + screen.height, 20, 0),
			new Collision(x               , y + screen.height, 20, 0),
			new Collision(x + screen.width, y + screen.height, 20, 0)
			
		]
		
	}
	
	draw() {
		
		screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y - screen.height, 20, 1, "blue");
		screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y - screen.height, 20, 1, "blue");
		screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y - screen.height, 20, 1, "blue");
		screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y                , 20, 1, "blue");
		screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y                , 20, 1, "blue");
		screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y                , 20, 1, "blue");
		screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y + screen.height, 20, 1, "blue");
		screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y + screen.height, 20, 1, "blue");
		screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y + screen.height, 20, 1, "blue");
		
	}
	
}