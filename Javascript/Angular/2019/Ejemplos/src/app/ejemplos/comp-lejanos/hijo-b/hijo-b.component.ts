import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../comunicacion.service';

@Component({
  selector: 'app-hijo-b',
  templateUrl: './hijo-b.component.html',
  styleUrls: ['./hijo-b.component.css']
})
export class HijoBComponent implements OnInit {
  mensaje: string;
  constructor(private _scomunicacion: ComunicacionService) { }

  ngOnInit() {
  }
  recibirCambios(){
    this.mensaje= this._scomunicacion.mensaje;
  }

}
