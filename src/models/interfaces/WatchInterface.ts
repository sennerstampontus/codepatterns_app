import { IProduct } from './ProductInterface';

export interface IWatch extends IProduct {
     isWaterproof: boolean;
     type: string;
     wristband: string;
     color: string[];
}
