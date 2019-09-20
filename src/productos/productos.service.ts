import { Injectable, HttpException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IProducto } from './models/productos.model';
import { ProductCreateDto } from './dto/productos-crear.dto';
import { ProductUpdateDto } from './dto/producto-update.dto';

@Injectable()
export class ProductosService {

    constructor(
        @InjectModel('Producto') private readonly productoModel: Model<IProducto>
    ){}
    
    async createProduct(createProductoDto: ProductCreateDto): Promise<IProducto> {
        const createProduct = new this.productoModel(createProductoDto)
        try{
            return await createProduct.save();
        }catch(Exception){
            return null
        }
    }

    async findAll(): Promise<IProducto[]> {
        try{
            return await this.productoModel.find().exec();
        }catch(Exception){
            return null;
        }
    }

    async getProduct(id: string): Promise<IProducto> {
        try{
            return await this.productoModel.findById({_id: id}).exec()
        }catch(Exception){
            return null
        }
    }

    async update(id:string, updateProducto: ProductUpdateDto): Promise<IProducto> {
        try{
            return await this.productoModel.findByIdAndUpdate({ _id: id }, updateProducto, { new: true })
        }catch(Exception){
            return null
        }
    }

    async delete(id: string): Promise<boolean> {
        try{
            const product = await this.productoModel.findOneAndDelete({ _id: id })
            if (!product) {
                return false
            }
        }catch(Exception){
            return null
        }
    }

}
