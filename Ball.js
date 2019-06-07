class Ball {
	constructor (x, y) {
		this.x = x
		this.y = y
		this.r = 15
		this.c = '#ddb112'
		this.speedX = this.rand() *4
		this.speedY = this.rand() *4
	}

	draw() {
		push()
		ellipseMode(RADIUS)
		fill(this.c)
		ellipse(this.x, this.y, this.r, this.r)
		pop()
	}

	move() {
		this.x += this.speedX
		this.y += this.speedY
		this.hitEdge()
	}

	rand() {
		return floor(random(0, 2)) *2 -1
	}

	hitEdge() {
		if(this.y - this.r <= 0 || this.y + this.r >= height)
			this.speedY = -this.speedY
	}

	hitLeftEdge() {
		return this.x - this.r <= 0
	}

	hitRightEdge() {
		return this.x + this.r >= width
	}

	reset() {
		this.x = width * 0.5
		this.y = height * 0.5
		this.speedX = this.rand() * 4
		this.speedY = this.rand() * 4
	}
}