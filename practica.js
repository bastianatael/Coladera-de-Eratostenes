class Dado{
    lanzar(){
        return Math.ceil(Math.random()*6);
    }
}
class Corredor{
    constructor(nombre){
        this.nombre=nombre;
        this.dado=new this.dado();
        this.posicion=0;
    }
    correr(){
        let cara=this.dado.lanzar();
        if(rand==1){
            this.posicion+=3;
        }
        else if(cara<=3){
            this.posicion++;
        }
        else if(cara<=6){
            this.posicion+=2;
        }
    }
}
class Carrera{
    constructor(){
        this.c1=new Corredor("Bastian");
        this.c2=new Corredor("Goku");
        this.distancia=100;
    }

    iniciar(){
        while(this.c1.posicion<this.distancia && this.c2.posicion<this.distancia){
        this.c1.correr();
        this.c2.correr();
        console.log(this.c1.posicion+": : :"+this.c2.posicion);
        }
        if(c1>=this.distancia && c2>=this.distancia) console.log("Hubo empate")
        else if(c1>=this.distancia){
            console.log("c1 ganó")
        } else console.log("c2 ganó")
    }
}