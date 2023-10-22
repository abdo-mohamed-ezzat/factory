import { Injectable } from '@angular/core';
import {IOrder} from '../viewModels/iorder';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  orders!: IOrder[];
  constructor() { 
    this.orders = [
      {
        id: 1,
        name: 'metal1',
        price: 10,
        quantity: 22
      },
      {
        id: 2,
        name: 'metal1',
        price: 5,
        quantity: 6
      },
      {
        id: 3,
        name: 'metal1',
        price: 3,
        quantity: 1
      },
      {
        id: 4,
        name: 'Fries',
        price: 4,
        quantity: 5
      },
      {
        id: 5,
        name: 'Ice metal1',
        price: 2,
        quantity: 5
      },
      {
        id: 1,
        name: 'metal1',
        price: 10,
        quantity: 22
      },
      {
        id: 2,
        name: 'metal1',
        price: 5,
        quantity: 6
      },
      {
        id: 3,
        name: 'metal1',
        price: 3,
        quantity: 1
      },
      {
        id: 4,
        name: 'Fries',
        price: 4,
        quantity: 5
      },
      {
        id: 5,
        name: 'Ice metal1',
        price: 2,
        quantity: 5
      },
      
    ]
  }

  getAllOrders(): Observable<IOrder[]> {
    return new Observable<IOrder[]>(observer => {
      observer.next(this.orders);
    });
  }
}
