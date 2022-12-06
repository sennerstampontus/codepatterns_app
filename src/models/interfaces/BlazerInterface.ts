import { IClothes } from './ClothesInterface';
import { IProduct } from './ProductInterface';

export interface IBlazer extends IProduct, IClothes {
     sleeves?: string;
}
