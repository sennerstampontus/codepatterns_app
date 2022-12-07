import { IClothes } from './ClothesInterface';
import { IProduct } from './ProductInterface';

export interface IDress extends IProduct, IClothes {
     dressLength: string;
     sleeves: string;
}
