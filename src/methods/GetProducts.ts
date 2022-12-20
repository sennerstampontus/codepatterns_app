import { IProduct } from '@/models/interfaces/ProductInterface';
import { getShoes } from './GetShoes';
import { getWatches } from './GetWatches';

/* 
     Due to SRP I extracted this method, as well as the methods that it's calling.
     The only thing this method is doing is fetch all products and return a list of them.

     If I wanted to get all products and add to the list of products,
     it only takes to add the new endpoint/method to get the new category
     and add [...newCategory]. Without having to change the working methods or lists.

*/

export const getAllProducts = async (): Promise<IProduct[]> => {
     const shoes = await getShoes();
     const watches = await getWatches();

     let products: IProduct[] = [...shoes, ...watches];

     return products;
};
