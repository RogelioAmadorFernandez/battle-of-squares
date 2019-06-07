const UP = -5
const DOWN = 5
let p1
let p2
let ball

function setup() {
	createCanvas(windowWidth, windowHeight);
	p1 = new Paddle(0, 'red')
	p2 = new Paddle(width - 25, 'blue')
	ball = new Ball(floor(width * 0.5), floor(height * 0.5))
}

function draw() {
	drawTable()
	drawPoint()
	drawPaddles()
	movePaddles()
	ball.draw()
	ball.move()
	score()
}

function drawTable() {
	background('#333333')
	push()
	stroke('white')
	line(floor(width * 0.5), 0, floor(width * 0.5), height)
	pop()
}

function drawPaddles() {
	p1.draw()
	p2.draw()
}

function drawPoint() {
	push()
	fill('white')
	textSize(35)
	text(p1.getPoint(), floor(width * 0.25), 75)
	text(p2.getPoint(), floor(width * 0.75), 75)
	pop()
}

function score() {
	if(ball.hitLeftEdge()){
		p2.scorePoint()
		ball.reset()
	}else if(ball.hitRightEdge()){
		p1.scorePoint()
		ball.reset()
	}
}

function movePaddles() {
	const P1_UP_KEY = 87
	const P1_DOWN_KEY = 83

	if(keyIsDown(P1_UP_KEY)){
		p1.move(UP)
	}
	if(keyIsDown(P1_DOWN_KEY)){
		p1.move(DOWN)
	}
	if(keyIsDown(UP_ARROW)){
		p2.move(UP)
	}
	if(keyIsDown(DOWN_ARROW)){
		p2.move(DOWN)
	}
}