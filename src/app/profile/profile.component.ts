import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { ActionSheetController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

export interface User {
  id: string;
  username: string;
  email: string;
}
export interface Response {
  me: User;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  data: Observable<any>;

  constructor(private apollo: Apollo, private auth: AuthService,
    public actionSheetController: ActionSheetController, private menu: MenuController,
    private router: Router) { }

  ngOnInit() {
    
  /*this.users = this.apollo.watchQuery<Response>({query: me})
    .valueChanges
    .pipe(
      map(result => result.data.me)
    );*/

    this.data = this.apollo.watchQuery<any>({
      query: gql`
        query me{
          me{
            username
            email
            nombre
            apellidos
            telefono
            fecha_nacimiento
          }
        }
      `
    }).valueChanges.pipe(map(result=>result.data.me))
    this.data.subscribe()
    }
    navigate() {
      this.router.navigateByUrl('/services');
    }
    async logOut() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Cerrar Sesión',
        buttons: [{
          text: 'Salir',
          role: 'destructive',
          icon: 'arrow-round-back',
          handler: () => {
            this.auth.logout();
          }
        },  {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }
}

