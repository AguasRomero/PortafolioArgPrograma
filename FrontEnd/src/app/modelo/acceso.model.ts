export class acceso{
    id?: string;
    usuario: string;
    contrasena: string; 

    constructor(usuario: string,
        contrasena: string){
            this.usuario = usuario;
            this.contrasena = contrasena;
        }
}