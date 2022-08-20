class Particle extends AcGameObject{
    constructor(playground,x,y,radius,vx,vy,color,speed,move_length) {
        super();
        this.move_length=move_length
        this.playground=playground
        this.ctx=this.playground.game_map.ctx
        this.x=x
        this.y=y
        this.vx=vx
        this.vy=vy
        this.radius=radius
        this.color=color
        this.speed=speed
        this.epx=0.01
        this.friction=0.9
    }
    start() {

    }
    update() {
        if(this.move_length<this.epx || this.speed<this.epx){
            this.destroy()
            return false
        }
        let moved=Math.min(this.move_length,this.speed*this.timedelta/1000)
        this.x+=this.vx*moved
        this.y+=this.vy*moved
        this.move_length-=moved
        this.speed*=this.friction
        this.render()
    }
    render(){
        let scale =this.playground.scale
        this.ctx.beginPath()
        this.ctx.arc(this.x*scale, this.y*scale, this.radius*scale, 0, Math.PI * 2, false)
        this.ctx.fillStyle = this.color
        this.ctx.fill()
    }
}