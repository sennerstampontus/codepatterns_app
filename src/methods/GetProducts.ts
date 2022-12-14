import { IProduct } from '@/models/interfaces/ProductInterface';
import { IWatch } from '@/models/interfaces/WatchInterface';
import { getShoes } from './GetShoes';
import { getWatches } from './GetWatches';

export const getAllProducts = async (): Promise<IProduct[]> => {
     let products: IProduct[] = [];
     const shoes = await getShoes();
     shoes.forEach((element: IProduct) => {
          products.push(element);
     });
     const watches = await getWatches();
     watches.forEach((element: IWatch) => {
          products.push(element);
     });

     return products;
};
