class Cursor
{
    private cursor : HTMLDivElement | null;
    private x : number;
    private y : number;

    public constructor()
    {
        this.cursor = document.getElementById("cursor") as HTMLDivElement;
        this.cursor?.blur();
        window.addEventListener("mousemove", this.moveCursor);
        this.x = 0;
        this.y = 0;
    }

    public moveCursor = (e : MouseEvent) =>
    {
        this.x = e.clientX;
        this.y = e.clientY;
        /* //disable cursor
        if(this.cursor != null)
        {  
            this.cursor.blur(); 
            this.x = e.clientX - this.cursor.clientWidth / 2;
            this.y = e.clientY - this.cursor.clientHeight / 2;
            this.cursor.style.transform = `translate3d(${this.x}px, ${this.y}px , 0)`;
            //console.log(e.clientX + " " + e.clientY);
        }*/
        
    }

    get X() : number
    {
        return this.x;
    }

    get Y() : number
    {
        return this.y;
    }

    
}