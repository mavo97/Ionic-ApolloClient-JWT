import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    //users: Observable<User[]>;
    constructor(private apollo: Apollo,
                private auth: AuthService, private router: Router ) { }
    ngOnInit() {} 
    email: string;
    contrasena: string;
    token: string;
    logForm() {
      this.auth.logForm(this.email, this.contrasena);
      console.log(this.contrasena);
    }
    signUp() {
      this.router.navigateByUrl('/signup');
    } }