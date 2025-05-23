export class Plato{
    nombre:string;
    ingrediente:string;
    precio:number;
    categoria: string;

    constructor(nombre:string, ingrediente:string, precio:number, categoria:string){
        this.nombre=nombre;
        this.ingrediente=ingrediente;
        this.precio=precio;
        this.categoria=categoria;
    }

    mostrar_Info():void{
        console.log(`Plato: ${this.nombre}, ${this.precio.toFixed(2)} - ${this.ingrediente} [${this.categoria}]`);
    }
}