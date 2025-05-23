import { Pedido } from './pedido';

export class Pago{
    pedido:Pedido;
    metodo_pago:string;
    monto_pago:number;
    fecha_pago:Date;

    constructor(pedido:Pedido, metodo_pago:string){
        this.pedido=pedido;
        this.metodo_pago=metodo_pago;
        this.monto_pago=pedido.total;
        this.fecha_pago=new Date();
    }

    procesar_Pago():void{
        console.log(`Pago de $${this.monto_pago.toFixed(2)} procesado mediante ${this.metodo_pago} para el cliente ${this.pedido.cliente.nombre}.`);
    }
}