import { IWatch } from '@/models/interfaces/WatchInterface';
import axios from 'axios';

export const getWatches = async (): Promise<Array<IWatch>> => {
     let watches: IWatch[] = [];
     let result = await axios.get('https://localhost:7110/api/getwatches');

     result.data.forEach((element: IWatch) => {
          watches.push(element);
     });

     return watches;
};
