import { Cliente } from './cliente';
import { Pedido } from './pedido';

export class Reservacion extends Pedido{
    fecha_reservacion:Date;
    hora_reservacion:Date;
    confirmada:boolean;
    mesa:number;

    constructor(fecha_reservacion:Date, hora_reservacion:Date, cliente:Cliente, _mesa:number){
        super(cliente, 'Reservacion', _mesa);
        this.fecha_reservacion=fecha_reservacion;
        this.hora_reservacion=hora_reservacion;
    }

    hacer_Reserva():void{
        console.log(`Reservación realizada para ${this.cliente.nombre} en la mesa ${this.mesa}.`);
    }
    cancelar_Reserva():void{
        console.log(`Reservacion cancelada para ${this.cliente.nombre}.`);
    }
    confirmar_Reserva():void{
        this.confirmada=true;
        console.log(`Reservacion confirmada para ${this.cliente.nombre} en la mesa ${this.mesa}.`);
    }
}