class Canvas {
	
	constructor(w, h) {
		
		this.canvas = document.createElement("canvas");
		this.canvas.width = this.width = w;
		this.canvas.height = this.height = h;
		this.draw = this.canvas.getContext("2d");
		document.body.appendChild(this.canvas);
		this.collision = new Collision(0, 0, this.width, this.height);
		
	}
	
	rect(x, y, w, h, c) {
		
		this.draw.fillStyle = c;
		this.draw.fillRect(x, y, w, h);
		
	}
	
	text(text, x, y, colour, size, font, extras) {
		
		if(extras != undefined) {
			
			this.draw.font = extras + " " + size + "px " + font;
			
		} else {
			
			this.draw.font = size + "px " + font;
			
		}
		
		this.draw.fillStyle = colour;
		this.draw.textAlign = "center";
		this.draw.fillText(text, x, y + (size / 2));
		
	}
	
	clear_screen() {
		
		this.draw.clearRect(0, 0, this.width, this.height);
		
	}
	
}