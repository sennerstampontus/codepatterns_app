import { IShoe } from '@/models/interfaces/ShoeInterface';
import axios from 'axios';
import { mapList } from './MapType';

// This method is seperate from others to follow SRP. This method only retrives
// the list of Shoes and pass it forward.
// By using the generic method mapList, I've even more made this method
// responsible to only one thing, now it does not convert the fetched list to
// the correct interface, that is taken care of by "mapList()".

export const getShoes = async (): Promise<Array<IShoe>> => {
     let result = await axios.get('https://localhost:7110/api/getshoes');
     let shoes: IShoe[] = mapList<IShoe>(result.data);

     //--- Did this before mapList was implemented ---

     // result.data.forEach((element: IShoe) => {
     //      shoes.push(element);
     // });

     return shoes;
};
