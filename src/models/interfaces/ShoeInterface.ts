import { IProduct } from './ProductInterface';

export interface IShoe extends IProduct {
     size: number[];
     color: string[];
     heels?: string;
}
