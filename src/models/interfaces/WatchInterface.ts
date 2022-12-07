import { IProduct } from './ProductInterface';

export interface IWatch extends IProduct {
     isWaterproof: boolean;
     watchType: string;
     wristband: string;
     color: string[];
}
