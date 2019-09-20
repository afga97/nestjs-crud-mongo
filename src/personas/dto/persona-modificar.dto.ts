import { IsNotEmpty, IsInt, Min, IsEmail } from 'class-validator';
// https://medium.com/@jonjam/validation-using-javascript-decorators-ba22c337a47a

export class PersonaModificarDto {
    
    @IsNotEmpty({message: 'El nombre es requerido'})
    readonly nombre:string;
    
    @IsNotEmpty({ message: 'El apellido es requerido'})    
    readonly apellido: string;

    
    @IsInt({message: 'La edad debe de ser un número'})
    @Min(1, {message: 'La edad debe ser mayor a uno'})  
    readonly edad:number;
    
    @IsNotEmpty({message: 'El correo es obligatorio'})
    @IsEmail(undefined, {
        message: "El correo debe ser valido"
    })
    readonly correo:string;
}