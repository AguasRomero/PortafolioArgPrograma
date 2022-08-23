export class proyectos {
    id?: number;
    proyecto: string;
    descripcion: string;
    anoCreacion: number;
    fotoProyecto: string;

    constructor(proyecto: string,
        descripcion: string,
        anoCreacion: number,
        fotoProyecto: string){
            this.proyecto = proyecto;
            this.descripcion = descripcion;
            this.anoCreacion = anoCreacion;
            this.fotoProyecto = fotoProyecto;
        }
}