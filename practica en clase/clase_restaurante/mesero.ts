import { Empleado } from './Empleado';
import { Pedido } from './pedido';

export class Mesero extends Empleado{
    constructor(nombre:string, apellido:string, telefono:string, direccion:string, salario:number){
        super(nombre, apellido, telefono, direccion, 'Mesero', salario);
    }

    tomar_Pedido(pedido: Pedido):void{
        console.log(`${this.nombre} ${this.apellido} ha tomado el pedido del cliente ${pedido.cliente.nombre}.`);
    }
    entregar_Pedido(pedido: Pedido):void{
        console.log(`${this.nombre} ${this.apellido} ha entregado el pedido al cliente ${pedido.cliente.nombre}.`);
    }
    entregar_Cuenta(pedido: Pedido):void{
        console.log(`${this.nombre} ${this.apellido} ha entregado la cuenta al cliente ${pedido.cliente.nombre}.`);
    }
}