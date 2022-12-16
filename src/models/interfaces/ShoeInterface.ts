import { IProduct } from './ProductInterface';

// Due to LSP I've inherited the IProduct interface to IShoe because it
// make sense that a Shoe is part of a product model.

export interface IShoe extends IProduct {
     size: number[];
     color: string[];
     heels?: string;
}
