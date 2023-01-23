import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IncremetadorComponent } from '../incremetador/incremetador.component';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.component.html',
  styleUrls: ['./progreso.component.css']
})
export class ProgresoComponent implements OnInit {

  @ViewChild(IncremetadorComponent, {static: false}) incHijo: IncremetadorComponent;

  public defecto1: number = 10;
  public defecto2: number = 90;
  
  public textoHijo = 'hola hijo';
  constructor() { }

  saludarHijo(){
    console.log(this.incHijo);
    this.incHijo.editaMsn(this.textoHijo);
    //let span = this.incHijo.progress.nativeElement.querySelector('span.leyenda');
    //span.classList.add('sombreado');
  }
  
  ngOnInit() {
  }

  actualizar( event: number ){
    console.log ('event ', event);
    this.defecto1 = event;
  }

}
