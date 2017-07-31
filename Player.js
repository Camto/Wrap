class Player {
	
	constructor(x, y) {
		
		this.spawn(x, y);
		
		this.collision = new Collision(x, y, 18, 18);
		
	}
	
	teleport(x, y) {
		
		this.x = x;
		this.y = y;
		
	}
	
	spawn(x, y) {
		
		this.spawn_x = (screen.width / 2) - 9;
		this.spawn_y = (screen.height / 2) - 9;
		
		this.x = x;
		this.y = y;
		
		this.last_xv = 0;
		this.last_yv = 0;
		
		this.xv = 0;
		this.yv = 0;
		
	}
	
	update() {
		
		this.last_xv = (you.xv / 2) + (you.last_xv / 2);
		this.last_yv = (you.yv / 2) + (you.last_yv / 2);
		
		this.collision = new Collision(this.x, this.y, 18, 18);
		
		for(var count = 0; count < end.collisions.length; count++) {
			
			if(this.collision.collide(end.collisions[count])) {
				
				next_level();
				
			}
			
		}
		
		this.collision_bottom = new Collision(this.x + 2, this.y + 18, 14, 0);
		
		for(var count = 0; count < monsters.length; count++) {
			
			if(this.collision_bottom.collide(monsters[count].collision)) {
				
				monsters.splice(count, 1);
				
				this.yv = -8;
				
				count--;
				
			}
			
		}
		
		this.collision = new Collision(this.x, this.y, 18, 18);
		
		for(var count = 0; count < monsters.length; count++) {
			
			if(this.collision.collide(monsters[count].collision)) {
				
				level--;
				next_level();
				
				// levels[level - 1].load_level(); // restart level without title screen, bad choice, the player (could) need a break (maybe they missed the message, maybe they're stressed, who knows).
				
				return 1;
				
			}
			
		}
		
		if((keys[key_codes.left] || keys[key_codes.a]) && !(keys[key_codes.right] || keys[key_codes.d])) {
			
			this.xv += -1;
			
		} else if(!(keys[key_codes.left] || keys[key_codes.a]) && (keys[key_codes.right] || keys[key_codes.d])) {
			
			this.xv += 1;
			
		}
		
		this.xv *= 0.85; // weee! sliding!
		
		this.x += this.xv;
		
		this.collision = new Collision(this.x, this.y, 18, 18);
		
		for(var count1 = 0; count1 < lava_blocks.length; count1++) {
			
			for(var count2 = 0; count2 < lava_blocks[count1].collisions.length; count2++) {
				
				if(this.collision.collide(lava_blocks[count1].collisions[count2])) {
					
					level--;
					next_level();
					
					// levels[level - 1].load_level(); // restart level without title screen, bad choice, the player (could) need a break (maybe they missed the message, maybe they're stressed, who knows).
					
					return 1;
					
				}
				
			}
			
		}
		
		this.touching_world = false;
		
		for(var count1 = 0; count1 < blocks.length; count1++) {
			
			for(var count2 = 0; count2 < blocks[count1].collisions.length; count2++) {
				
				if(this.collision.collide(blocks[count1].collisions[count2])) {
					
					this.touching_world = true;
					
				}
				
			}
			
		}
		
		for(var count = 0; count < moving_platforms.length; count++) {
			
			if(this.collision.collide(moving_platforms[count].collision)) {
				
				this.touching_world = true;
				
			}
			
		}
		
		if(this.touching_world) {
			
			this.x -= this.xv;
			
			this.xv = 0;
			
		}
		
		this.y += this.yv;
		
		this.collision = new Collision(this.x, this.y, 18, 18);
		
		for(var count1 = 0; count1 < lava_blocks.length; count1++) {
			
			for(var count2 = 0; count2 < lava_blocks[count1].collisions.length; count2++) {
				
				if(this.collision.collide(lava_blocks[count1].collisions[count2])) {
					
					level--;
					next_level();
					
					// levels[level - 1].load_level(); // restart level without title screen, bad choice, the player (could) need a break (maybe they missed the message, maybe they're stressed, who knows).
					
					return 1;
					
				}
				
			}
			
		}
		
		this.touching_world = false;
		
		for(var count1 = 0; count1 < blocks.length; count1++) {
			
			for(var count2 = 0; count2 < blocks[count1].collisions.length; count2++) {
				
				if(this.collision.collide(blocks[count1].collisions[count2])) {
					
					this.touching_world = true;
					
				}
				
			}
			
		}
		
		for(var count = 0; count < moving_platforms.length; count++) {
			
			if(this.collision.collide(moving_platforms[count].collision)) {
				
				this.touching_world = true;
				
			}
			
		}
		
		if(this.touching_world) {
			
			this.y -= this.yv;
			
			this.yv = 0;
			
			this.y++;
			
			this.collision = new Collision(this.x, this.y, 18, 18);
			this.touching_world = false;
			
			for(var count1 = 0; count1 < blocks.length; count1++) {
				
				for(var count2 = 0; count2 < blocks[count1].collisions.length; count2++) {
					
					if(this.collision.collide(blocks[count1].collisions[count2])) {
						
						this.touching_world = true;
						
					}
					
				}
				
			}
			
			for(var count = 0; count < moving_platforms.length; count++) {
				
				if(this.collision.collide(moving_platforms[count].collision)) {
					
					this.touching_world = true;
					
				}
				
			}
			
			if((keys[key_codes.up] || keys[key_codes.w]) && this.touching_world) {
				
				this.yv = -6.5;
				
			}
			
			this.y--;
			
		} else {
			
			this.yv += 0.25;
			
			if(this.yv > 12) {
				
				this.yv = 12;
				
			}
			
		}
		
		if(this.x > screen.width) {
			
			this.teleport(this.x - screen.width, this.y);
			
		}
		
		if(this.x < 0) {
			
			this.teleport(this.x + screen.width, this.y);
			
		}
		
		if(this.y > screen.height) {
			
			this.teleport(this.x, this.y - screen.height);
			
		}
		
		if(this.y < 0) {
			
			this.teleport(this.x, this.y + screen.height);
			
		}
		
	}
	
	draw() {
		
		screen.rect(this.spawn_x, this.spawn_y, 18, 18, '#000000');
		
	}
	
}