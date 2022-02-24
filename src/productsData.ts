import { Product } from './app/services/shopping-cart.service';
import { v4 as uuid } from 'uuid';
export const productsData: Product[] = [
  {
    price: 7,
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    name: 'Smartphone',
    details: 'This is a good product',
    uuid: uuid(),
    remove: true,
    quantity: 1,
  },
  {
    price: 15,
    image:
      'https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    name: 'Desktop',
    details:
      'The internet’s source of freely-usable images. Powered by creators everywhere.',
    uuid: uuid(),
    remove: false,
    quantity: 1,
  },
  {
    price: 35,
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    name: 'IPhone 7',
    details: 'This is a good product',
    uuid: uuid(),
    remove: true,
    quantity: 1,
  },
  {
    price: 22,
    image:
      'https://images.unsplash.com/photo-1519735777090-ec97162dc266?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZHVjdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    name: 'Mobile',
    details:
      'The internet’s source of freely-usable images. Powered by creators everywhere.',
    uuid: uuid(),
    remove: false,
    quantity: 1,
  },
  {
    price: 17,
    image:
      'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    name: 'Powered by creators',
    details:
      'The internet’s source of freely-usable images. Powered by creators everywhere.',
    uuid: uuid(),
    remove: false,
    quantity: 1,
  },
  {
    price: 12,
    image:
      'https://images.unsplash.com/photo-1645584579033-0ed0404624f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    name: 'unsplash',
    details: 'Freely-usable images. Powered by creators everywhere.',
    uuid: uuid(),
    remove: true,
    quantity: 1,
  },
];
