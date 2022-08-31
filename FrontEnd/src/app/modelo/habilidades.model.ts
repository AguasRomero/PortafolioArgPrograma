export class habilidades {
    id?: number;
    habilidad: string;
    porcentaje: number;
    ioL: boolean;

    constructor(habilidad: string,
        porcentaje: number,
        ioL: boolean,){
            this.habilidad = habilidad;
            this.porcentaje = porcentaje;
            this.ioL = ioL;
        }
}