import { IProduct } from './ProductInterface';

export interface ISunglasses extends IProduct {
     isPolorized: boolean;
     hasStrenght: boolean;
     strenght?: string[];
     color: string[];
}
