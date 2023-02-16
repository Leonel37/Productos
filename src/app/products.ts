export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

export const products = [
  {
    id: 1,
    name: 'OPPO',
    price: 2000,
    description: 'A large phone with one of the best screens',
    stock: 3
  },
  {
    id: 2,
    name: 'Apple',
    price: 6909,
    description: 'A great phone with one of the best cameras',
    stock: 1
  },
  {
    id: 3,
    name: 'Xiami',
    price: 2990,
    description: '',
    stock: 3
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/