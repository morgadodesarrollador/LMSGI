import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from './comunicacion.service';

@Component({
  selector: 'app-comp-lejanos',
  templateUrl: './comp-lejanos.component.html',
  styleUrls: ['./comp-lejanos.component.css']
})
export class CompLejanosComponent implements OnInit {

  constructor(public scomunicacion: ComunicacionService) { }

  ngOnInit() {
  }

}
