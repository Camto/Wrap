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
		lava_blocks = [];
		barriers = [];
		moving_platforms = [];
		
		for(var y = 0; y < this.game_components.length; y++) {
			
			for(var x = 0; x < this.game_components[y].length; x++) {
				
				switch(this.game_components[y][x]) {
					
					case "\t": console.log("crap"); break;
					
					case " ": break;
					
					case "#": blocks.push(new Block(x * 20, y * 20)); break;
					
					case "@": you.spawn(x * 20, (y * 20) - 1); break;
					
					case "$": end = new Goal(x * 20, y * 20); break;
					
					case "*": monsters.push(new Monster(x * 20, y * 20)); break;
					
					case "-": moving_platforms.push(new Horiz_Moving_Platform(x * 20, y * 20)); break;
					
					case "|": moving_platforms.push(new Vert_Moving_Platform(x * 20, y * 20)); break;
					
					case "!": lava_blocks.push(new Lava(x * 20, y * 20)); break;
					
				}
				
			}
			
		}
		
		if(this.script) {
			
			this.script.wrap();
			
		}
		
	}
	
}