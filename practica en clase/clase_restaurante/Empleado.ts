export class Empleado{
    nombre: string;
    apellido: string;
    telefono: string;
    direccion:string;
    cargo: string;
    salario:number;
    
    constructor(nombre:string, apellido:string, telefono:string, direccion:string, cargo:string, salario:number){
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
        this.direccion=direccion;
        this.cargo=cargo;
        this.salario=salario;
    }

    registrar_Entrada():void{
        console.log(`${this.nombre} ${this.apellido} ha iniciado su turno como ${this.cargo}.`);
    }
    registrar_Salida():void{
        console.log(`${this.nombre} ${this.apellido} ha terminado su turno.`);
    }
}