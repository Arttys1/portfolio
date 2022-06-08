/**
 * Class representing a particle on the canvas.
 */
class Particle
{
    private x: number;
    private y: number;

    private direction : [number, number];

    constructor(x: number, y: number, direction: [number, number])
    {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public static generateRandomParticle(width : number, height : number) : Particle
    {
        return new Particle(Math.random() * width, Math.random() * height, [Math.random() * 2 - 1, Math.random() * 2 - 1]);
    }

    public update() : void
    {
        this.x += this.direction[0];
        this.y += this.direction[1];
    }

    public draw(context: CanvasRenderingContext2D) : void
    {
        context.beginPath();
        context.strokeStyle = "white";
        context.fillStyle = "white";
        context.ellipse(this.x, this.y, 1, 1, 0, 0, 2 * Math.PI);
        context.fill();
        context.stroke();
        context.closePath();
    }

    public euclideanDistance(particle : Particle) : number
    {
        return Math.sqrt(Math.pow(particle.X - this.X, 2) + Math.pow(particle.Y - this.Y, 2));
    }

    public isNear(particle : Particle, threshold : number) : boolean
    {
        return this.euclideanDistance(particle) <= threshold;
    }

//#region Properties

    get X(): number
    {
        return this.x;
    }

    get Y(): number
    {
        return this.y;
    }

    get Direction(): [number, number]
    {
        return this.direction;
    }

    set X(x: number)
    {
        this.x = x;
    }

    set Y(y: number)
    {
        this.y = y;
    }

    set Direction(direction: [number, number])
    {
        this.direction = direction;
    }

//#endregion Properties
}