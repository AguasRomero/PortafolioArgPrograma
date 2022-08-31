export class educacion {
    id?: number;
    institucion: string;
    logoInstitucion: string;
    titulo: string;
    anoIngreso: number;
    anoEgreso: number;

    constructor(institucion: string,
        logoInstitucion: string,
        titulo: string,
        anoIngreso: number,
        anoEgreso: number,){
            this.titulo = titulo;
            this.institucion = institucion;
            this.logoInstitucion = logoInstitucion;
            this.anoIngreso = anoIngreso;
            this.anoEgreso = anoEgreso;
        }
}