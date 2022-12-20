import { IShoe } from '@/models/interfaces/ShoeInterface';
import axios from 'axios';
import { mapList } from './MapType';

// This method is seperate from others to follow SRP. This method only retrives
// the list of Shoes and pass it forward.
// By using the generic method mapList, I've even more made this method
// responsible to only one thing, now it does not convert the fetched list to
// the correct interface, that is taken care of by "mapList()".

export const getShoes = async (): Promise<IShoe[]> => {
     let result = await axios.get('https://localhost:7110/api/getshoes');

     // I think SRP is the most efficient principle and easiest to think of and apply.
     // So when I built this method to get Wacthes from db/api, wanted to lift out the mapping method,
     // because that should not be part of a getWatches method. So this now both "mapList()" and "getWatches" is separated
     // from each other, and therefore, follow SRP.

     let shoes: IShoe[] = mapList<IShoe>(result.data);

     //--- Did this before mapList was implemented ---

     // result.data.forEach((element: IShoe) => {
     //      shoes.push(element);
     // });

     return shoes;
};
