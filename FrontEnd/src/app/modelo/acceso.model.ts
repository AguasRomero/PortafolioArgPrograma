export class acceso{
    id?: string;
    usuario: string;
    constrasena: string; 

    constructor(usuario: string,
        constrasena: string){
            this.usuario = usuario;
            this.constrasena = constrasena;
        }
}