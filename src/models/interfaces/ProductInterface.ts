// I've created a "base interface" that can be inherited by other interfaces that make sense
// With LSP in mind I did this interface to be of a standard props that every product will have.

export interface IProduct {
     id: number;
     title: string;
     description: string;
     price: number;
     category: string;
     rating: number;
     imageUrl: string;
     isOnSale: boolean;
     saleProcent: number;
     salePrice: number;
}
