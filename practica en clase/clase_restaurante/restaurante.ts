import { Reservacion }from './reservacion';

export class Restaurante{
    direccion: string;
    horario_atencion: Date;
    capacidad: number;
    reservaciones: Reservacion[] = [];

    constructor(direccion: string, horario_atencion:Date, capacidad: number){
        this.direccion=direccion;
        this.horario_atencion=horario_atencion;
        this.capacidad=capacidad;
    }

    Abrir_Restaurante(): void{
        console.log("El restaurante ha sido abierto.");
    }

    Cerrar_Restaurante(): void{
        console.log("El restaurante ha sido cerrado.");
    }

    Reservar_Mesa(reserva: Reservacion): void{
        this.reservaciones.push(reserva);
        reserva.hacer_Reserva();
    }
}