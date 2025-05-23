export class Cliente{
    nombre: string;
    apellido:string;
    telefono:string;
    direccion:string;

    constructor(nombre:string, apellido:string, telefono:string, direccion:string){
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
        this.direccion=direccion;
    }

    hacer_Pedidos():void{
        console.log(`${this.nombre} ${this.apellido} ha hecho un pedido.`);
    }
    pagar_Cuenta():void{
        console.log(`${this.nombre} ${this.apellido} ha pagado la cuenta.`);
    }
    cancelar_Pedido():void{
        console.log(`${this.nombre} ${this.apellido} ha cancelado su pedido.`);
    }
}