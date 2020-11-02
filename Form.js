class Form{
    constructor(){
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h2');
    }
    hide(){
        this.button.hide();
        this.title.hide();
        this.greeting.hide();
    }
    display(){
        this.title.html("Tank Fighters");
        this.title.position(550,200);
        this.title.style({color:"GREEN"});

        this.button.position(600, 400);
        this.button.mousePressed(()=>{
            gameState = "play";
            this.button.hide();
            this.title.hide();
          });
    }
}