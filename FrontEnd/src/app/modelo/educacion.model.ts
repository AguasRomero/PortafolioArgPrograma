export class educacion {
    id?: number;
    institucion: string;
    titulo: string;
    anoIngreso: number;
    anoEgreso: number;

    constructor(institucion: string,
        titulo: string,
        anoIngreso: number,
        anoEgreso: number,){
            this.titulo = titulo;
            this.institucion = institucion;
            this.anoIngreso = anoIngreso;
            this.anoEgreso = anoEgreso;
        }
}