import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { ProductosModule } from './productos/productos.module';

// const URL = process.env.MONGODB
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/personas', { useNewUrlParser: true }),
    PersonasModule,
    ProductosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
