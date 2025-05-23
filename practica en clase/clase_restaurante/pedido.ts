import { Cliente } from './cliente';
import { Plato } from './plato';

export class Pedido{
    private _cliente: Cliente;
    public get cliente(): Cliente {
        return this._cliente;
    }
    public set cliente(value: Cliente) {
        this._cliente = value;
    }
    platos:Plato [] = [];
    total: number=0;
    Reservacion:string;
    private _mesa: number;
    public get_mesa(): number {
        return this._mesa;
    }
    public set_mesa(value: number) {
        this._mesa = value;
    }

    constructor(cliente:Cliente, Reservacion:string, mesa:number){
        this.cliente=cliente;
        this.Reservacion=Reservacion;
        this._mesa=mesa
    }

    agregar_PLato(plato: Plato):void{
        this.platos.push(plato);
        this.total += plato.precio;
        console.log(`${plato.nombre} añadido al pedido.`);
    }
    mostrar_Pedido():void{
        console.log(`Pedido de ${this.cliente.nombre}:`);
        this.platos.forEach(p => console.log(`- ${p.nombre}: ${p.precio.toFixed(2)}`));
        console.log(`Total: $${this.total.toFixed(2)}`);
    }
    cancelar_Pedido():void{
        this.platos=[];
        this.total=0;
        console.log("Pedido cancelado.");
    }
}
