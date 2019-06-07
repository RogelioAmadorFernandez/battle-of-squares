class Paddle {
	constructor (x, c) {
	this.x = x
	this.h = 100
	this.y = floor((height * 0.5) - this.h * 0.5)
	this.w = 25
	this.c = c
	this.point = 0
	}

	draw() {
		push()
		fill(this.c)
		rect(this.x, this.y, this.w, this.h)
		pop()
	}

	move(dir) {
		if(this.isValidMove(dir))
			this.y += dir
		return
	}

	isValidMove(dir) {
		return !(this.y + dir +5 <= 0 || this.y + dir -5 >= height -this.h)
	}

	getPoint() {
		return this.point
	}

	scorePoint() {
		this.point++
	}
}