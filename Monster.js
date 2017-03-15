class Monster {
  
  constructor(x, y, direction) {
    
    this.spawn(x, y, direction);
    
    this.collision = new Collision(x, y, 18, 18);
    
  }
  
  teleport(x, y) {
    
    this.x = x;
    this.y = y;
    
  }
  
  spawn(x, y, direction) {
    
    this.x = x;
    this.y = y;
    
    this.xv = (((direction * 2) - 1) * 2);
    this.yv = 0;
    
  }
  
  update() {
    
    this.x += this.xv;
    
    this.collision = new Collision(this.x, this.y, 18, 18);
    this.touching_world = false;
    
    for(var count1 = 0; count1 < blocks.length; count1++) {
      
      for(var count2 = 0; count2 < blocks[count1].collisions.length; count2++) {
        
        if(this.collision.collide(blocks[count1].collisions[count2])) {
          
          this.touching_world = true;
          
        }
        
      }
      
    }
    
    for(var count1 = 0; count1 < barriers.length; count1++) {
      
      for(var count2 = 0; count2 < barriers[count1].collisions.length; count2++) {
        
        if(this.collision.collide(barriers[count1].collisions[count2])) {
          
          this.touching_world = true;
          
        }
        
      }
      
    }
    
    if(this.touching_world) {
      
      this.x -= this.xv;
      
      this.xv *= -1;
      
    }
    
    this.y += this.yv;
    
    this.collision = new Collision(this.x, this.y, 18, 18);
    this.touching_world = false;
    
    for(var count1 = 0; count1 < blocks.length; count1++) {
      
      for(var count2 = 0; count2 < blocks[count1].collisions.length; count2++) {
        
        if(this.collision.collide(blocks[count1].collisions[count2])) {
          
          this.touching_world = true;
          
        }
        
      }
      
    }
    
    if(this.touching_world) {
      
      this.y -= this.yv;
      
      this.yv = 0;
      
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
  
  modify_attribute(attribute, parens_nums, parens_nums_string) {
    
    switch(attribute) {
      
      case "direction": this.xv = (((parens_nums[0][0] * 2) - 1) * 2); break;
      
      default: debug("Error: unknown attribute: " + attribute + " was given the parens_nums: " + parens_nums_string + ".");
      
    }
    
  }
  
  draw() {
    
    screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y - screen.height, 20, 20, '#B06010');
    screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y - screen.height, 20, 20, '#B06010');
    screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y - screen.height, 20, 20, '#B06010');
    screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y                , 20, 20, '#B06010');
    screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y                , 20, 20, '#B06010');
    screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y                , 20, 20, '#B06010');
    screen.rect(this.x - you.x + you.spawn_x - screen.width, this.y - you.y + you.spawn_y + screen.height, 20, 20, '#B06010');
    screen.rect(this.x - you.x + you.spawn_x               , this.y - you.y + you.spawn_y + screen.height, 20, 20, '#B06010');
    screen.rect(this.x - you.x + you.spawn_x + screen.width, this.y - you.y + you.spawn_y + screen.height, 20, 20, '#B06010');
    
  }
  
}