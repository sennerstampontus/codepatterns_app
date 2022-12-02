import { IProduct } from '@/models/interfaces/ProductInterface';
import { v4 as uuid } from 'uuid';

export const productlist: Array<IProduct> = [
     {
          id: '1',
          title: 'Tunn röd linne klänning',
          price: 30,
          currency: '$',
          category: 'Klänningar',
          rating: 4,
          itemImage:
               'https://images.pexels.com/photos/9558228/pexels-photo-9558228.jpeg?auto=compress&cs=tinysrgb&w=1600',
     },
     {
          id: '2',
          title: '"No Sleeve" kavaj',
          price: 53,
          currency: '$',
          category: 'Kavajer',
          rating: 5,
          itemImage:
               'https://images.pexels.com/photos/12887176/pexels-photo-12887176.jpeg?auto=compress&cs=tinysrgb&w=1600',
     },
     {
          id: '3',
          title: 'Gula skor med texas stil',
          price: 44,
          currency: '$',
          category: 'Skor',
          rating: 3,
          itemImage:
               'https://images.pexels.com/photos/4046699/pexels-photo-4046699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     },
     {
          id: '4',
          title: 'Schyssta solbrillor',
          price: 28,
          currency: '$',
          category: 'Solglasögon',
          rating: 4,
          itemImage:
               'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1600',
     },
];
