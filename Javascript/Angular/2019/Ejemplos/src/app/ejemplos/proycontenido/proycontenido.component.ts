import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proycontenido',
  templateUrl: './proycontenido.component.html',
  styleUrls: ['./proycontenido.component.css']
})
export class ProycontenidoComponent implements OnInit {

  constructor() { }

  mensaje() {
    alert ('alerta desde el hijo');
  }
  ngOnInit() {
  }

}
