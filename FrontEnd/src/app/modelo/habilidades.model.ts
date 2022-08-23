export class habilidades {
    id?: number;
    habilidad: string;
    porcentaje: number;
    IoL: boolean;

    constructor(habilidad: string,
        porcentaje: number,
        IoL: boolean,){
            this.habilidad = habilidad;
            this.porcentaje = porcentaje;
            this.IoL = IoL;
        }
}