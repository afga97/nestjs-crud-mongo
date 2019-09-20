import { Module } from '@nestjs/common';
import { PersonaController } from './controller/persona-controller';
import { PersonaService } from './service/persona.service';

@Module({
    imports: [],
    // exports: [PersonaService],
    controllers: [PersonaController],
    providers: [PersonaService],
})
export class PersonasModule {}
