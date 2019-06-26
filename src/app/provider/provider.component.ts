import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss'],
})
export class ProviderComponent implements OnInit {

  constructor(private services: ServiciosService, private router: Router,
    private route:ActivatedRoute) { }

  servidores:any = {};
  providers: any = {};
  providers2: any = {};
  providers3: any = {};
  ngOnInit() {
    this.route.params.subscribe(params => {
       //log the entire params object
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
    this.providers3 = this.providers2[numero];
    console.log(this.providers3);
  }
  profile(){
    this.router.navigateByUrl('/profile')
  }

}
