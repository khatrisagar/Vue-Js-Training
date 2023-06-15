export interface itemInterface {
  readonly _id?: string;
  name: string;
  description: string;
  price: number;
  minPrice: number;
  maxPrice: number;
}

export interface itemDetailInterface {
  description: string;
  maxPrice: number;
  minPrice: number;
  price: number;
  seller: string;
}

export interface sellerItemInterface {
  readonly _id: string;
  name: string;
  details: itemDetailInterface;
  createdAt: string;
  updatedAt: string;
}
export interface sellerItemStateInterface {
  sellerItems: Array<sellerItemInterface>;
}
