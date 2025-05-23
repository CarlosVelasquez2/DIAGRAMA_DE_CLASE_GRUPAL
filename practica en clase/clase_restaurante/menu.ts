import { Plato } from './plato';

export class Menu{
    platos: Plato[] = [];

    agregar_Plato(plato: Plato):void{
        this.platos.push(plato);
        console.log(`Plato ${plato.nombre} añadido al menú.`);
    }
    mostrar_Menu():void{
        console.log("MENÚ DEL RESTAURANTE:");
        this.platos.forEach(plato => plato.mostrar_Info());
    }
    buscar_Por_Categoria(categoria: string): Plato[]{
        return this.platos.filter(plato => plato.categoria.toLowerCase() === categoria.toLowerCase());
    }
}