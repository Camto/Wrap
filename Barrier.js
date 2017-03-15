class Barrier {
  
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
  
}