import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { Router } from '@angular/router';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { LoadingController, AlertController } from '@ionic/angular';



export interface User {
  id: string;
  username: string;
  email: string;
}
export interface LoginResponse {
  token: string;
  user: User;
}

const login = gql`
  mutation login($email: String!, $contrasena: String! ) {
    login(email: $email, password: $contrasena) {
      token
      user{
        email
      }
    }
  }
`;

export interface Query {
  getUsers: User[];
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  users: Observable<User[]>;
  constructor(private apollo: Apollo,
              private httpLink: HttpLink, private router: Router,
              public loadingController: LoadingController, public alertController:AlertController ) {


               }
  navigateToLogin() {
    this.router.navigateByUrl('/profile');
  }
  isLoading = false;
  email: string;
  contrasena: string;
  token: string;
  async present() {
    this.isLoading = true;
    return await this.loadingController.create({
      duration: 1000,
    }).then(a => {
      a.present().then(() => {
        console.log('presented');
        if (!this.isLoading) {
          a.dismiss().then(() => console.log('abort presenting'));
        }
      });
    });
  }
  
  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss().then(() => console.log('dismissed'));
  }
  logout() {
    // some app logic

    // reset the store after that
    this.apollo.getClient().resetStore();
    this.router.navigateByUrl('/home');
  }

  logForm(email, contrasena) {
    this.apollo.mutate({
      mutation: login,
      variables: {
        email,
        contrasena
      }
    }).subscribe(({ data }) => {
      //console.log('got data', data);
      this.token = data.login.token;
      localStorage.setItem('token', this.token);
      this.present();
      this.navigateToLogin();
      //console.log(this.token)
    }, (error) => {
      console.log('there was an error sending the query', error);
    });
  }

  }

