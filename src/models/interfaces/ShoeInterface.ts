import { IProduct } from './ProductInterface';

// Due to LSP I've inherited the IProduct interface to IShoe because it
// make sense that a Shoe is part of a product model.
// ISP tells us that the code should not be forced to depend on something it does not use.
// So this interface is a part of IProduct but seperated, so objects that implements IProduct don't have to depend on
// the properties this shoe has. Therefore IShoe interface.

export interface IShoe extends IProduct {
     size: number[];
     color: string[];
     heels?: string;
}
