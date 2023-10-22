import { Component } from '@angular/core';
import { IOrder } from '../viewModels/iorder';
import { OrderService } from '../services/order.service';
import { tick } from '@angular/core/testing';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  totalOrders = 0;
  orders: IOrder[] = [];
  constructor(private OrderService: OrderService, private router: Router) {}

  ngOnInit() {
    this.OrderService.getAllOrders().subscribe(() => {
      this.OrderService.getAllOrders().subscribe((orders: IOrder[]) => {
        this.orders = orders;
        this.totalOrders = this.orders.length;
      });
    });
  }

  onAddOrder() {
    this.router.navigate(['/add-order']);
  }
}
