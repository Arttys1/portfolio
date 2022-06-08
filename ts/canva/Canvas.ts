//threshold for the distance where we draw a line between two particles
const thresholdDistanceParticle : number = 150;
const canvasHeight : number = window.innerHeight;
const offsetCanvas : number = 50;   //limit where we remove particles 
const NumberParticleLimit = 50;

/**
 * Class who manage canva and his elements
 */
class Canvas
{
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private particles : Particle[];

    public constructor(canvasName: string)
    {
        this.canvas = document.getElementById(canvasName) as HTMLCanvasElement;
        this.updateSizeCanvas();
        window.addEventListener("resize", ()=>
        {
            this.updateSizeCanvas();
        });

        this.context = this.canvas.getContext("2d") as CanvasRenderingContext2D;
        this.particles = new Array<Particle>();
    }

    public update() : void
    {
        this.particles.forEach(particle => {
            particle.update();

            //if particle is out of canvas, we remove it from the list
            if(particle.X < -offsetCanvas || particle.X > this.canvas.width + offsetCanvas
            || particle.Y < -offsetCanvas || particle.Y > this.canvas.height+ offsetCanvas)
            {
                this.particles.splice(this.particles.indexOf(particle), 1);
            }                
        });
    }    

    public draw() : void
    {
        //clear the canvas
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

        //draw background
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        //draw gradient background
        var gradient = this.context.createRadialGradient(
            this.canvas.width / 2, canvasHeight - 60, 200,   //inner cercle
            this.canvas.width / 2, canvasHeight - 60, 400); //outer cercle
        gradient.addColorStop(0, "#082131");
        gradient.addColorStop(1, "#030D13");

        // Fill with gradient
        this.context.fillStyle = gradient;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height); 

        //draw particles
        this.particles.forEach((particle) => {
            particle.draw(this.context);
        });
        
        //for each particle, we check if it is near to other particles and if it is, we draw a line between them
        for(let i : number = 0; i < this.particles.length; i++)
        {
            for(let j = i + 1; j < this.particles.length; j++)
            {
                //if two particles are near, we draw a line between them
                if(this.particles[i].isNear(this.particles[j], thresholdDistanceParticle))
                {
                    this.drawLineBetween(this.particles[i], this.particles[j], this.particles[i].euclideanDistance(this.particles[j]));
                }
            }
        }

        //draw line between cursor and particles
        let offset : DOMRect = this.canvas.getBoundingClientRect();
        let x : number = cursor.X - offset.left;
        let y : number = cursor.Y - offset.top;            

        var cursorParticle : Particle = new Particle(x, y, [0, 0]);
        cursorParticle.draw(this.context);

        this.particles.forEach((particle) => {
            if(particle.isNear(cursorParticle, thresholdDistanceParticle))
            {
                this.drawLineBetween(particle, cursorParticle, particle.euclideanDistance(cursorParticle));
            }
        });
    }

    public drawLineBetween(particle1 : Particle, particle2 : Particle, distance : number) : void
    {
        //more distance, less opacity
        let colorCoeff = 1 - (distance / thresholdDistanceParticle);
                                    //skyblue
        this.context.strokeStyle = "rgba(137, 207, 235, " + colorCoeff + ")";
        this.context.beginPath();
        this.context.moveTo(particle1.X, particle1.Y);
        this.context.lineTo(particle2.X, particle2.Y);
        this.context.stroke();
        this.context.closePath();
    }

    public updateSizeCanvas() : void
    {
        let body : HTMLElement = document.getElementById("body") as HTMLElement;
        
        this.canvas.width = body.clientWidth;
        this.canvas.height = canvasHeight;
    }

    public addParticle(particle: Particle) : void
    {
        this.particles.push(particle);
    }

    public removeParticle(particle: Particle) : void
    {
        this.particles.splice(this.particles.indexOf(particle), 1);
    }

    public generateParticles(nbParticles: number) : void
    {
        if(this.particles.length < NumberParticleLimit)
        {
            for(let i : number = 0; i < nbParticles; i++)
            {
                this.addParticle(Particle.generateRandomParticle(this.canvas.width, this.canvas.height));
            }
        }
    }

}