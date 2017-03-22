function next_level() {
	
	level++;
	if(level > levels.length) {
		
		level = 1;
		
	}
	
	loading_level = 1;
	in_title = true;
	
}

function begin(in_debug) {
	
	init(in_debug);
	
	window.requestAnimationFrame(game);
	
}

function init(in_debug) {
	
	// document.body.style.margin = "0px 0px 0px 0px";
	
	set_debug(in_debug);
	
	frame = 0;
	
	keys = {};
	
	document.addEventListener("keydown", function(key) {
		
		keys[key.keyCode] = true;
		
	});
	
	document.addEventListener("keyup", function(key) {
		
		delete keys[key.keyCode];
		
	});
	
	key_codes = {
		
		up: 38,
		left: 37,
		down: 40,
		right: 39,
		
		w: 87,
		a: 65,
		s: 83,
		d: 68,
		
	}
	
	screen = new Canvas(400, 400);
	
	screen.canvas.style.border = "5px solid black";
	screen.canvas.style.position = "absolute";
	screen.canvas.style.margin = "auto";
	screen.canvas.style.top = "0px";
	screen.canvas.style.left = "0px";
	screen.canvas.style.bottom = "0px";
	screen.canvas.style.right = "0px";
	
	/*
	screen.canvas.style.borderLeft = "5px solid #D08000";
	screen.canvas.style.borderTop = "5px solid #F0A000";
	screen.canvas.style.borderRight = "5px solid blue";
	screen.canvas.style.borderBottom = "5px solid blue";
	screen.canvas.style.borderRadius = "5%";
	*/
	
	you = new Player(0, 0);
	end = new Goal(0, 0);
	monsters = [];
	blocks = [];
	barriers = [];
	moving_platforms = [];
	
	levels = [
		
		new Level("The Beginning", ["Use the arrow", "keys (or wasd)", "to move.", "", "Get to the yellow", "square to win!"], [
			
			"                    ",
			"                    ",
			"       ##           ",
			"       ##           ",
			"       ##           ",
			"       ##           ",
			"       ##           ",
			"    $  ##     @     ",
			"  #######  #######  ",
			"  #######  #######  ",
			"                    ",
			"                    ",
			
		]),
		
		new Level("Monsters!", ["Jump on enemies", "heads to kill them!"], [
			
			"                                            ",
			"                                            ",
			"                                            ",
			"                                            ",
			"                                            ",
			"                                            ",
			"                                            ",
			"                                            ",
			"@          *          $          *          ",
			"############################################"
			
		], new Wrapper(
				
				`
				Monster0 @direction: (1)|
				Monster1 @direction: (0)|
				`
				
			)),
		
		new Level("Maze", ["Sometimes...", "", "...there are many", "ways to get", "to one goal..."], [
			
			"###      ##      ###",
			"###      ## $       ",
			"###      #####      ",
			"        ######      ",
			"        #########   ",
			"        #########   ",
			"#####      #########",
			"#####      #########",
			"#####      #########",
			"########      ######",
			"########      ######",
			"              ###   ",
			"      #####         ",
			"      #####         ",
			"###   #####    @ ###",
			"###      ###########",
			"###      ###########",
			"######   ###########",
			"######   ###########",
			"######   ##      ###"
			
		]),
		
		new Level("Staircase", ["...Sometimes", "", "paths are simpler", "than we may think..."], [
			
			"####################",
			"########            ",
			"######              ",
			"####              $ ",
			"##      * ##########",
			"        ############",
			"      ############  ",
			"    ############    ",
			"  ############      ",
			"############      * ",
			"##########        ##",
			"########        ####",
			"######        ######",
			"####        ########",
			"##      * ##########",
			"        ############",
			"      ############  ",
			"    #######         ",
			"  #######           ",
			"#######   @  ##     "
			
		], new Wrapper(
				
				`
				Monster0 @direction: (1)|
				Monster1 @direction: (1)|
				Monster2 @direction: (1)|
				`
				
			)),
		
		new Level("The Pillars", ["...Sometimes", "", "we must", "find creative ways", "to resolve", "our problem..."], [
			
			"####    ####    ####",
			"                    ",
			"                    ",
			"####    ####    ####",
			"####    ####    ####",
			"####    ####    ####",
			"####    ####    ####",
			"####    ####    ####",
			"#                  #",
			"#                  #",
			"#                  #",
			"# @      *       $*#",
			"####    ####    ####",
			"####    ####    ####",
			"####    ####    ####",
			"####    ####    ####",
			"####    ####    ####",
			"####    ####    ####",
			"####    ####    ####",
			"####    ####    ####"
			
		], new Wrapper(
				
				`
				Monster0 @direction: (0)|
				Monster1 @direction: (0)|
				Monster0 @patrol_lines: (7, 11) (11, 11)|
				Monster1 @patrol_lines: (15, 11)|
				`
				
			)),
		
		new Level("Freefall", ["Sometimes...", "", "...you have to", "take a leap...", "", "...a leap", "of faith!"], [
			
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"#                                       ",
			"# @                                   $ ",
			"####                                 ###"
			
		]),
		
		new Level("The Plains", ["You have", "an INFINITE", "amount of tries...", "", "...But yet", "you don't have", "endless time?"], [
			
			"        ####        ",
			"    #  #########    ",
			"#####  #############",
			"#        !!!        ",
			"#        !!!        ",
			"#        !!!        ",
			"#                   ",
			"##                  ",
			" ### @          ##  ",
			"   ####-      ##### ",
			"#    $#       ######",
			"#######       ######",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    ",
			"                    "
			
		])
			
	];
	
	level = 0;
	next_level();
	
}

function game() {
	
	/*
	frame++;
	
	if(frame > 1000) {
		
		frame = 0;
		
	}
	*/
	
	screen.clear_screen();
	
	if(!loading_level) {
	
		you.update();
		for(var count = 0; count < monsters.length; count++) {
			
			monsters[count].update();
			
		}
		for(count = 0; count < moving_platforms.length; count++) {
			
			moving_platforms[count].update();
			
		}
		
		screen.rect(0, 0, screen.width, screen.height, "#F8F8F8");
		screen.text(levels[level - 1].title, screen.width / 2 - (you.last_xv * (0.0025 * screen.width)), screen.height / 4 - (you.last_yv * (0.0041 * screen.height)), "white", (0.1 * screen.width).toString(), "arial");
		
		end.draw();
		for(count = 0; count < monsters.length; count++) {
			
			monsters[count].draw();
			
		}
		for(count = 0; count < moving_platforms.length; count++) {
			
			moving_platforms[count].draw();
			
		}
		you.draw();
		for(count = 0; count < blocks.length; count++) {
			
			blocks[count].draw();
			
		}
		
	}
	
	if(loading_level && in_title) {
		
		if((screen.height == levels[level - 1].game_components.length * 20) && (screen.width == levels[level - 1].game_components[0].length * 20) && keys[13]) {
			
			in_title = false;
			
		} else {
			
			screen.width += (levels[level - 1].game_components[0].length * 20 - screen.width) / 16;
			screen.canvas.width = screen.width;
			if(Math.abs((levels[level - 1].game_components[0].length * 20) - screen.width) < 5) {
				
				screen.width = screen.canvas.width = levels[level - 1].game_components[0].length * 20;
				
			}
			
			screen.height += (levels[level - 1].game_components.length * 20 - screen.height) / 16;
			screen.canvas.height = screen.height;
			if(Math.abs((levels[level - 1].game_components.length * 20) - screen.height) < 5) {
				
				screen.height = screen.canvas.height = levels[level - 1].game_components.length * 20;
				
			}
			
			screen.rect(0, 0, Math.max(screen.width, levels[level - 1].game_components[0].length * 20), Math.max(screen.height, levels[level - 1].game_components.length * 20), "black");
			screen.text(levels[level - 1].title, screen.width / 2, screen.height / 4.5, "white", (0.125 * Math.min(screen.height, screen.width)).toString(), "courier", "bold");
			for(var count = 0; count < levels[level - 1].captions.length; count++) {
				
				screen.text(levels[level - 1].captions[count], screen.width / 2, screen.height / 1.5 + (count * (0.0625 * screen.height)) - ((levels[level - 1].captions.length * (0.0625 * screen.height)) / 2), "white", (0.0625 * Math.min(screen.height, screen.width)).toString(), "courier");
				
			}
			
		}
		
	} else if(loading_level && !in_title) {
		
		levels[level - 1].load_level();
		
		loading_level = 0;
		
	}
	
	window.requestAnimationFrame(game);
	
}

begin(0);