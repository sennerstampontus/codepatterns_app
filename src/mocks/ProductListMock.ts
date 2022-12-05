import { ISizeAndColors } from '@/models/interfaces/SizeAndColorsInterface';
/**
 * ? Extended IProduct in ISizeAndColors to simulate "Open closed principle",
 * ? because I forgot to put "Sizes" and "Colors" in the inteface.
 * ? So, to not mess with the working interface I rather extended it to another interface
 * ? and used that one in this list instead.
 */

export const productlist: Array<ISizeAndColors> = [
     {
          id: 1,
          title: 'Thin linen dress',
          description: 'Summer vibin\' with this "new in" linen dress!',
          price: 30,
          currency: '$',
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['Red', 'Yellow', 'White'],
          category: 'Dresses',
          rating: 4,
          itemImage:
               'https://images.pexels.com/photos/9558228/pexels-photo-9558228.jpeg?auto=compress&cs=tinysrgb&w=1600',
     },
     {
          id: 2,
          title: '"No Sleeve" Blazer',
          description:
               'Theres is nothing that compares to this amazing no sleeve blazer for women.',
          price: 53,
          currency: '$',
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['Red', 'Yellow', 'White'],
          category: 'Blazers',
          rating: 5,
          itemImage:
               'https://images.pexels.com/photos/12887176/pexels-photo-12887176.jpeg?auto=compress&cs=tinysrgb&w=1600',
     },
     {
          id: 3,
          title: 'Yellow Texas Boots',
          description:
               "Like Texas? We do too. That's why these boots are here, to remind you of beautiful Texas.",
          price: 44,
          currency: '$',
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['Red', 'Yellow', 'White'],
          category: 'Shoes',
          rating: 3,
          itemImage:
               'https://images.pexels.com/photos/4046699/pexels-photo-4046699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     },
     {
          id: 4,
          title: 'Cool Sunglasses',
          description:
               'As the sun glares off from these sunglasses, you can totally enjoy the sunlight without having to peer.',
          price: 28,
          currency: '$',
          sizes: ['One Size'],
          colors: ['Brown/Leapard', 'Pearl White', 'Black'],
          category: 'Sunglasses',
          rating: 4,
          itemImage:
               'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1600',
     },
     {
          id: 5,
          title: 'Long sleeve dress',
          description:
               'This autumn inspired long sleeve dress is a MUST when the leaves starting to fall.',
          price: 28,
          currency: '$',
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['Red', 'Yellow', 'White'],
          category: 'Dresses',
          rating: 4,
          itemImage:
               'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     },
     {
          id: 6,
          title: 'Street t shirt',
          description: 'Wanna feel street? Get this t shirt!',
          price: 12,
          currency: '$',
          sizes: ['S', 'M', 'L', 'XL'],
          colors: ['Red', 'Yellow', 'White'],
          category: 'T shirts',
          rating: 5,
          itemImage:
               'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     },
     {
          id: 7,
          title: 'Polorized sunglasses',
          description:
               'Nothing goes up to a pair of unique polorized sunglasses!',
          price: 28.99,
          sizes: ['One Size'],
          colors: ['White', 'Grey', 'Pink', 'Black'],
          currency: '$',
          category: 'Sunglasses',
          rating: 3,
          itemImage:
               'https://images.pexels.com/photos/701877/pexels-photo-701877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     },
     {
          id: 8,
          title: 'Tommy Hillfiger watch',
          description: 'Woman? Want a nice looking watch from TH? Here it is!',
          price: 33,
          sizes: ['One Size'],
          colors: ['White', 'Pink', 'Black'],
          currency: '$',
          category: 'Watches',
          rating: 4,
          itemImage:
               'https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
     },
];
