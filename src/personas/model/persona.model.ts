export class PersonaModel {
    constructor(
        public id:string, 
        public nombre:string, 
        public apellido: string,
        public edad:number, 
        public correo:string
    ){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.correo = correo
    }
}