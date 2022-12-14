import { IShoe } from '@/models/interfaces/ShoeInterface';
import axios from 'axios';

export const getShoes = async (): Promise<Array<IShoe>> => {
     let shoes: IShoe[] = [];
     let result = await axios.get('https://localhost:7110/api/getshoes');

     result.data.forEach((element: IShoe) => {
          shoes.push(element);
     });

     return shoes;
};
