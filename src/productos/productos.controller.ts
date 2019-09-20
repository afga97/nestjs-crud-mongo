// https://edabit.com/
import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { IProducto } from './models/productos.model';
import { ProductCreateDto } from './dto/productos-crear.dto';
import { ProductUpdateDto } from './dto/producto-update.dto';

@Controller('producto')
export class ProductosController {

    constructor(
        private readonly _productoService: ProductosService
    ){}

    @Get()
    async productsAll(): Promise<IProducto[]>{
        return await this._productoService.findAll()
    }

    @Get(':id')
    async productGet(
        @Param('id') idProduct: string
    ): Promise<IProducto>{
        const product = await this._productoService.getProduct(idProduct)
        if (!product){
            throw new HttpException("No se encontró ningun producto", HttpStatus.NOT_FOUND)
        }
        return product
    }

    @Post()
    async productoCreate(
        @Body() productoCreateDto : ProductCreateDto
    ): Promise<IProducto> {
        const product = await this._productoService.createProduct(productoCreateDto)
        if (!product) {
            throw new HttpException("Ocurrió un error al guardar el producto", HttpStatus.BAD_REQUEST)
        }
        return product
    }

    @Patch(':id')
    async productUpdate(
        @Param('id') idProduct: string,
        @Body() productoUpdateDto: ProductUpdateDto
    ): Promise<IProducto>{
        const product = await this._productoService.update(idProduct, productoUpdateDto)
        if (!product) {
            throw new HttpException("Ocurrió un error al actualizar el producto", HttpStatus.BAD_REQUEST)
        }
        return product
    }

    @Delete(':id')
    async productDelete(
        @Param('id') idProduct: string
    ): Promise<boolean>{
        const response = this._productoService.delete(idProduct)
        if (!response) {
            throw new HttpException("Ocurrió un error al eliminar el producto", HttpStatus.BAD_REQUEST)
        }
        return response
    }

}
