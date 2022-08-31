export class experiencia {
    id?: number;
    empresa: string;
    logoEmpresa: string;
    puesto: string;
    anoIngreso: number;
    anoEgreso: number;

    constructor(empresa: string,
        logoEmpresa: string,
        puesto: string,
        anoIngreso: number,
        anoEgreso: number,){
            this.empresa = empresa;
            this.logoEmpresa = logoEmpresa;
            this.puesto = puesto;
            this.anoIngreso = anoIngreso;
            this.anoEgreso = anoEgreso;
        }
}