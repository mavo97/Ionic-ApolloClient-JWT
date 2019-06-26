import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpService } from '../services/sign-up.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  constructor(private router:Router, private signService: SignUpService ) { }

  ngOnInit() {}

  email: string;
  contrasena: string;
  nombre: string;
  apellidos: string;
  fecha_nacimiento: string;
  username: string;
  telefono: string;
  telefono2;
  logSignUp(){
    this.telefono2 = this.telefono.toString();
    this.signService.logSignUp(this.email, this.contrasena, this.nombre, this.apellidos,
      this.fecha_nacimiento, this.username, this.telefono2);
  }
  back() {
    this.router.navigateByUrl('/home');
  }
}
