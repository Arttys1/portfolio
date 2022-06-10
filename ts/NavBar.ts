class NavBar
{
    private navBar : HTMLUListElement;
    private open : boolean;
    constructor()
    {
        this.navBar = document.getElementById("navBar") as HTMLUListElement;
        this.open = false;
        let icon : HTMLElement | null = document.getElementById("navBarIcon");
        if(window.innerWidth <= 600)
        {
            icon?.addEventListener("click", () => {
                this.openCloseNavBar();
            });
            icon?.addEventListener("touch", () => {
                this.openCloseNavBar();
            });

            for(let i : number= 0; i < this.navBar.children.length; i++)
            {
                this.navBar.children[i]?.children[0]?.addEventListener("click", () => {
                    this.closeNavBar();
                });
            }
        }
        
    }    

    private openCloseNavBar() : void
    {
        if(!this.open)
        {
            this.openNavBar();
        }
        else
        {
            this.closeNavBar();
        }
        this.open = !this.open;
    }

    private closeNavBar() : void
    {
        for(let i : number= 1; i < this.navBar.children.length; i++)
        {
            let li : HTMLElement = this.navBar.children[i] as HTMLElement;
            li.style.display="none";
        }
    }

    private openNavBar() : void
    {
        for(let i : number= 0; i < this.navBar.children.length; i++)
        {
            let li : HTMLElement = this.navBar.children[i] as HTMLElement;
            li.style.display="block";
        }
    }
}