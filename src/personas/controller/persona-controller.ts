import { Controller, Post, Body, ValidationPipe, UsePipes, Get, Patch, Param, HttpException, HttpStatus } from '@nestjs/common';
import { PersonaService } from '../service/persona.service';
import { PersonaCrearDto } from '../dto/persona-crear.dto';
import { PersonaModificarDto } from '../dto/persona-modificar.dto';

@Controller('persona')
export class PersonaController {
    
    constructor(private _personaService: PersonaService){}
    
    @Post()
    @UsePipes(ValidationPipe)
    guardar(@Body() personaDto: PersonaCrearDto){
        let id = this._personaService.guardar(
            personaDto.nombre, 
            personaDto.apellido, 
            personaDto.edad, 
            personaDto.correo
        );
        return { ok: true, id }
    }

    @Get()
    listar(){
        return this._personaService.listar()
    }

    @Patch(":id")
    modificar(
        @Param('id') id:string,
        @Body() personaModificarDto: PersonaModificarDto
    ){
        let respuesta = this._personaService.modificar(
            id, personaModificarDto.nombre, personaModificarDto.apellido, personaModificarDto.edad, personaModificarDto.correo
        )
        if (respuesta == null){
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Persona no encontrada'
            }, 404)
        }
        return { ok: true }
    }

    @Get(':id')
    obtener(
        @Param('id') id:string
    ){
        let respuesta = this._personaService.obtener(id)
        if (respuesta === null){
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Persona no encontrada'
            }, 404)
        }
        return respuesta
    }

}
