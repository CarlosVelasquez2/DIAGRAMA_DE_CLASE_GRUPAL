import { Empleado } from './Empleado';
import { Pedido } from './pedido';

export class Cocinero extends Empleado{
    constructor(nombre:string, apellido:string, telefono:string, direccion:string, salario:number){
        super(nombre, apellido, telefono, direccion, 'Cocinero', salario);
    }

    preparar_Pedido(pedido: Pedido): void{
        console.log(`${this.nombre} ${this.apellido} está preparando el pedido del cliente ${pedido.cliente.nombre}.`);
    }
}