import { IWatch } from '@/models/interfaces/WatchInterface';
import axios from 'axios';
import { mapList } from './MapType';

// This method is seperate from others to follow SRP. This method only retrives
// the list of Watches and pass it forward.
// By using the generic method mapList, I've even made this method even more
// responsible to only one thing, now it does not convert the fetched list to
// the correct interface, that is taken care of by "mapList()".

export const getWatches = async (): Promise<IWatch[]> => {
     let result = await axios.get('https://localhost:7110/api/getwatches');

     // I think SRP is the most efficient principle and easiest to think of and apply.
     // So when I built this method to get Wacthes from db/api, wanted to lift out the mapping method,
     // because that should not be part of a getWatches method. So this now both "mapList()" and "getWatches" is separated
     // from each other, and therefore, follow SRP.

     let watches: IWatch[] = mapList<IWatch>(result.data);

     //--- Did this before mapList was implemented ---

     // result.data.forEach((element: IWatch) => {
     //      watches.push(element);
     // });

     return watches;
};
