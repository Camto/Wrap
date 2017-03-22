class Collision {
	
	constructor(x, y, w, h) {
	
		this.x = x;
		this.y = y;
		this.h = h;
		this.w = w;
	
	}
	
	collide(other) {
		
		return ((this.x < (other.x + other.w)) && ((this.x + this.w) > other.x) && (this.y < (other.y + other.h)) && ((this.y + this.h) > other.y));
		
	}
	
}