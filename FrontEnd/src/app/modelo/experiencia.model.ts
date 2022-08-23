export class experiencia {
    id?: number;
    empresa: string;
    puesto: string;
    anoIngreso: number;
    anoEgreso: number;

    constructor(empresa: string,
        puesto: string,
        anoIngreso: number,
        anoEgreso: number,){
            this.empresa = empresa;
            this.puesto = puesto;
            this.anoIngreso = anoIngreso;
            this.anoEgreso = anoEgreso;
        }
}