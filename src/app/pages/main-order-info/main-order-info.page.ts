import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-order-info',
  templateUrl: './main-order-info.page.html',
  styleUrls: ['./main-order-info.page.scss'],
})
export class MainOrderInfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onOrderDetails() {
    this.router.navigate(['/order-details']);
  }
}
