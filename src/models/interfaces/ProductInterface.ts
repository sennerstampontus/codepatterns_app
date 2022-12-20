// I've created a "base interface" that can be inherited by other interfaces that make sense
// With LSP in mind I did this interface to be of a standard props that every product will have.
// Also with OCP in mind, we don't have to go to this interface again to add props if
// we add new products with new properties, that will be specified in that products interface.
// Which in that case also will go according to ISP, (Interface Seggregation Principle).
// Splitting the interfaces so that they do not need to depend on unused props in a different product.

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
