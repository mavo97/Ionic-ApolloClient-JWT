import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ServiciosService } from '../services/servicios.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  categoria:any = {};
  categorias:any = {};

  constructor(private auth: AuthService,
    public actionSheetController: ActionSheetController,
    private router: Router, private services: ServiciosService,
    ) { }

  ngOnInit() {
    this.servic();
  }
  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.categorias.length == 1000) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  back() {
    this.router.navigateByUrl('/profile');
  }
  servic(){
    this.categorias = this.services.getServicios();
    console.log(this.categorias); 
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
  profile(){
    this.router.navigateByUrl('/profile');
  }
  verServicio(idx:number){
    this.router.navigate(['/servicio',idx])
  }
}
