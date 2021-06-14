class Paper
{
constructor(x,y,r){
    var options={
        restitution:0.3,
        friction:0,
        density:1.2

    
    }
    this.image=loadImage("paper.png")
    this.x=x
    this.y=y
    this.r=r
    this.body=Bodies.circle(x, y, r, options);
}

display(){
image(this.image);
}




}