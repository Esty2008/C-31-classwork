class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage('sprites/smoke.png');
    this.trajectery=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    for(var i=0;i<this.trajectery.length;i=i+1){
      image(this.smoke,this.trajectery[i][0],this.trajectery[i][1])
    }
    
    if(this.body.velocity.x>10 && this.body.position.x>200){
      var t = [this.body.position.x,this.body.position.y];
      this.trajectery.push(t);
    }

    super.display();
  }
}
