import { IProduct } from './ProductInterface';

// LSP tells us to not make wierd inheritance. So this IWatch only inherits
// the props from IProduct, because it translates into a Product
// but with some extra properties.

export interface IWatch extends IProduct {
     isWaterproof: boolean;
     watchType: string;
     wristband: string;
}
