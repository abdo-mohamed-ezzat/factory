import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router,private acitveRouter: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/home']);
  }

}