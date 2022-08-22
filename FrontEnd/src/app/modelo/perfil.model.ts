export class perfil {
    id?: number;
    nombre: string;
    fotoPerfil: string;
    fotoFondo: string;
    acercaDe: string;

    constructor(nombre: string,
        fotoPerfil: string,
        fotoFondo: string,
        acercaDe: string){
            this.nombre = nombre;
            this.fotoPerfil = fotoPerfil;
            this.fotoFondo = fotoFondo;
            this.acercaDe = acercaDe;
        }
}