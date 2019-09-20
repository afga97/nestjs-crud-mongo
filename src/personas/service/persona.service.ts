import { Injectable } from '@nestjs/common';
import { PersonaModel } from '../model/persona.model';
import { domainToASCII } from 'url';

@Injectable()
export class PersonaService {

    private personas:Array<PersonaModel>= [];

    guardar(nombre: string, apellido: string, edad:number, correo:string) : string {
        let id = (Math.floor(Math.random() * 4000 + 1)).toString()
        let per = new PersonaModel(id, nombre, apellido, edad, correo)
        this.personas.push(per);
        return id;
    }

    listar(): Array<PersonaModel> {
        return [...this.personas]
    }

    obtener(id){
        let datos = this.buscar(id);
        if (datos === null) {
            return null
        }
        return { ...datos.per }
    }

    buscar(id: string){
        let index = this.personas.findIndex( e => e.id === id)
        if (index === -1){
            return null;
        }
        let per = this.personas[index]
        return {per, index}
    }

    modificar(id:string, nombre: string, apellido:string, edad:number, correo:string) {
        let per = this.buscar(id)
        if (per === null) {
            return null;
        }
        let persona = this.personas[per.index];
        if (nombre !== null){
            persona.nombre = nombre;
        }
        if (apellido !== null){
            persona.apellido = apellido
        } 

        if (edad !== null){
            persona.edad = edad
        }

        if (correo !== null) {
            persona.correo = correo
        }
        this.personas[per.index] = persona;
        return true
    }
    
}