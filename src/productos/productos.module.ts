import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { ProductoSchema } from './models/productos.model';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }])
    ],
    exports: [],
    controllers: [ProductosController],
    providers: [ProductosService]
})
export class ProductosModule {}
