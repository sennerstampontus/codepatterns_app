import { IWatch } from '@/models/interfaces/WatchInterface';
import axios from 'axios';
import { mapList } from './MapType';

// This method is seperate from others to follow SRP. This method only retrives
// the list of Watches and pass it forward.
// By using the generic method mapList, I've even more made this method
// responsible to only one thing, now it does not convert the fetched list to
// the correct interface, that is taken care of by "mapList()".

export const getWatches = async (): Promise<Array<IWatch>> => {
     let result = await axios.get('https://localhost:7110/api/getwatches');
     let watches: IWatch[] = mapList<IWatch>(result.data);

     //--- Did this before mapList was implemented ---

     // result.data.forEach((element: IWatch) => {
     //      watches.push(element);
     // });

     return watches;
};
