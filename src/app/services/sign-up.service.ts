import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const signUp = gql`
  mutation signup($email: String!, $contrasena: String!, $nombre: String!, $apellidos: String!,
  $fecha_nacimiento: String!, $telefono: String!, $username: String! ) {
    signup(email: $email, password: $contrasena, nombre: $nombre, apellidos: $apellidos,
    fecha_nacimiento: $fecha_nacimiento, telefono: $telefono, username: $username ) {
      username
      email
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private router:Router, private apollo:Apollo) { }
  email: string;
  contrasena: string;
  nombre: string;
  apellidos: string;
  fecha_nacimiento: string;
  username: string;
  telefono: string;

  back() {
    this.router.navigateByUrl('/home');
  }

  logSignUp(email, contrasena, nombre, apellidos, fecha_nacimiento, username, telefono) {
    console.log(contrasena);
    this.apollo.mutate({
      mutation: signUp,
      variables: {
        email,
        contrasena,
        nombre,
        apellidos,
        fecha_nacimiento,
        username,
        telefono
      }
    }).subscribe(({ data }) => {
      this.back();
      console.log(data);
      //console.log('got data', data);
      //console.log(this.token)
    }, (error) => {
      console.log('there was an error sending the query', error);

    });
  }
}
