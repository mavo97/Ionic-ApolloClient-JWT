import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ServiciosService } from '../services/servicios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-servicio-target',
  templateUrl: './servicio-target.component.html',
  styleUrls: ['./servicio-target.component.scss'],
})
export class ServicioTargetComponent implements OnInit {
  @Input() item:any = {};
  @Input() index:number;
  @Output() itemSeleccionado:EventEmitter<number>;
  servidores:any = {};
  providers: any = {};
  providers2: any = {};
 
  constructor(private services: ServiciosService, private router: Router,
    private route:ActivatedRoute, public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.itemSeleccionado = new EventEmitter();
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      this.servic(params['id']);
      //log the value of id
    });
  }

  servic(numero){
    this.servidores = this.services.getServicios2();
    this.providers = this.servidores[numero];
    this.providers2 = this.providers['servidores'];
    console.log(this.servidores[numero]);
    console.log(this.providers2);
  }
  verProvider(){
    this.router.navigate(['/provider',this.index]);
    //this.heroeSeleccionado.emit(this.index)
  }
}
