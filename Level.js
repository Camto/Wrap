class Level {
  
  constructor(title, captions, game_components, script) {
    
    this.title = title;
    this.captions = captions;
    this.captions.push("");
    this.captions.push("(press [enter]");
    this.captions.push("to continue)");
    this.game_components = game_components;
    this.script;
    if(script) {
      
      this.script = script;
    
    }
    
    this.ready_for_load = false;
    
  }
  
  load_level() {
    
    screen.clear_screen();
    
    monsters = [];
    blocks = [];
    barriers = [];
    
    for(var y = 0; y < this.game_components.length; y++) {
      
      for(var x = 0; x < this.game_components[y].length; x++) {
        
        switch(this.game_components[y][x]) {
          
          case " ": break;
          
          case "#": blocks.push(new Block(x * 20, y * 20)); break;
          
          case "@": you.spawn(x * 20, (y * 20) - 1); break;
          
          case "$": end = new Goal(x * 20, y * 20); break;
          
          case "*": monsters.push(new Monster(x * 20, y * 20, 0)); break;
          
          case "^": monsters.push(new Monster(x * 20, y * 20, 1)); break;
          
          case "_": barriers.push(new Barrier(x * 20, y * 20)); break;
          
        }
        
      }
      
    }
    
    if(this.script) {
      
      this.script.wrap();
      
    }
    
  }
  
}