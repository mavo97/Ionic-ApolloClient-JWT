import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ServiciosService } from '../services/servicios.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  @Input() servicio:any = {};
  @Input() index:number;
  @Output() servicioSeleccionado:EventEmitter<number>;
  
  constructor(private auth: AuthService,
    public actionSheetController: ActionSheetController,
    private router: Router, private services: ServiciosService) { 
      
    this.servicioSeleccionado = new EventEmitter(); 
    }

  ngOnInit() {
   
  
  }
  verServicio(){
    this.router.navigate(['/servicio',this.index]);
    //this.heroeSeleccionado.emit(this.index)
  }
}
