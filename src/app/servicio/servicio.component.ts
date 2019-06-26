import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.scss'],
})
export class ServicioComponent implements OnInit {

  constructor(private services: ServiciosService, private router: Router,
    private route:ActivatedRoute, public actionSheetController: ActionSheetController) { }
  servidores:any = {};
  providers: any = {};
  providers2: any = {};
  ngOnInit() {
    
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.servic(params['id']);
      //log the value of id
    });
  }
  back(){
    this.router.navigateByUrl('/services')
  }
  
  servic(numero){
    this.servidores = this.services.getServicios2();
    this.providers = this.servidores[numero];
    this.providers2 = this.providers['servidores'];
    console.log(this.servidores[numero]);
    console.log(this.providers2);
  }
  profile(){
    this.router.navigateByUrl('/profile')
  }
  verProvider(idx:number){
    this.router.navigate(['/provider',idx])
  }
}
