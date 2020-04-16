class Form{
	constructor(){
		this.reset = createButton('Reset');

	}
	display(){
		this.reset.position(600,10);
	}

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

