import { IClothes } from './ClothesInterface';
import { IProduct } from './ProductInterface';

export interface IDress extends IProduct, IClothes {
     length: string;
     sleeves: string;
}
