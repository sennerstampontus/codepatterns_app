import { IBlazer } from '@/models/interfaces/BlazerInterface';
import { IClothes } from '@/models/interfaces/ClothesInterface';
import { IDress } from '@/models/interfaces/DressInterface';
import { IProduct } from '@/models/interfaces/ProductInterface';
import { IShoe } from '@/models/interfaces/ShoeInterface';
import { ISunglasses } from '@/models/interfaces/SunglassesInterface';
import { IWatch } from '@/models/interfaces/WatchInterface';

/**
 * ? Extending IClothes with IProduct to apply size and colors.
 * ? To apply ISP and seperate the interfaces.
 */

export const productlist: Array<IProduct> = [
     {
          id: 1,
          title: 'Thin linen dress',
          description: 'Summer vibin\' with this "new in" linen dress!',
          price: 30,
          size: ['S', 'M', 'L', 'XL'],
          color: ['Red', 'Yellow', 'White'],
          dressLength: 'Long dress',
          sleeves: 'Long sleeves',
          category: 'Dresses',
          rating: 4,
          imageUrl:
               'https://images.pexels.com/photos/9558228/pexels-photo-9558228.jpeg?auto=compress&cs=tinysrgb&w=1600',
     } as IDress,
     {
          id: 2,
          title: '"No Sleeve" Blazer',
          description:
               'Theres is nothing that compares to this amazing no sleeve blazer for women.',
          price: 53,
          size: ['S', 'M', 'L', 'XL'],
          color: ['Yellow', 'Red', 'White'],
          sleeves: 'No sleeves',
          category: 'Blazers',
          rating: 5,
          imageUrl:
               'https://images.pexels.com/photos/12887176/pexels-photo-12887176.jpeg?auto=compress&cs=tinysrgb&w=1600',
     } as IBlazer,
     {
          id: 3,
          title: 'Yellow Texas Boots',
          description:
               "Like Texas? We do too. That's why these boots are here, to remind you of beautiful Texas.",
          price: 44,
          size: [38, 39, 40, 41, 42, 43, 44],
          color: ['Yellow', 'Red', 'White'],
          category: 'Shoes',
          rating: 3,
          imageUrl:
               'https://images.pexels.com/photos/4046699/pexels-photo-4046699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     } as IShoe,
     {
          id: 4,
          title: 'Cool Sunglasses',
          description:
               'As the sun glares off from these sunglasses, you can totally enjoy the sunlight without having to peer.',
          price: 28,
          color: ['Brown/Leapard', 'Pearl White', 'Black'],
          hasStrenght: false,
          isPolorized: true,
          category: 'Sunglasses',
          rating: 4,
          imageUrl:
               'https://images.pexels.com/photos/255305/pexels-photo-255305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     } as ISunglasses,
     {
          id: 5,
          title: 'Long sleeve dress',
          description:
               'This autumn inspired long sleeve dress is a MUST when the leaves starting to fall.',
          price: 28,
          size: ['S', 'M', 'L', 'XL'],
          color: ['Red', 'Yellow', 'White'],
          sleeves: 'Long Sleeves',
          dressLength: 'Long dress',
          category: 'Dresses',
          rating: 4,
          imageUrl:
               'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     } as IDress,
     {
          id: 6,
          title: 'Street t shirt',
          description: 'Wanna feel street? Get this t shirt!',
          price: 12,
          size: ['S', 'M', 'L', 'XL'],
          color: ['Red', 'Yellow', 'White'],
          category: 'T shirts',
          rating: 5,
          imageUrl:
               'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     } as IClothes,
     {
          id: 7,
          title: 'Polorized sunglasses',
          description:
               'Nothing goes up to a pair of unique polorized sunglasses!',
          price: 28.99,
          color: ['White', 'Grey', 'Pink', 'Black'],
          isPolorized: true,
          hasStrenght: true,
          strenght: ['-1', '0', '+1', '+2'],
          category: 'Sunglasses',
          rating: 3,
          imageUrl:
               'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     } as ISunglasses,
     {
          id: 8,
          title: 'Tommy Hillfiger watch',
          description: 'Woman? Want a nice looking watch from TH? Here it is!',
          price: 33,
          watchType: 'Analog',
          isWaterproof: false,
          wristband: 'Leather',
          category: 'Watches',
          rating: 4,
          imageUrl:
               'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     } as IWatch,
];
