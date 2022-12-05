import { IProduct } from './ProductInterface';

export interface ISizeAndColors extends IProduct {
     sizes: string[];
     colors: string[];
}
