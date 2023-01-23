import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incremetador',
  templateUrl: './incremetador.component.html',
  styleUrls: ['./incremetador.component.css']
})
export class IncremetadorComponent implements OnInit {
 
  @ViewChild ('txtProgress', {static: false}) progress: ElementRef;
  // ambas variables son de entrada, provienen del componente padre
  // tslint:disable-next-line: comment-format
  // se declaran con el decorador @Input()

  // tslint:disable-next-line: no-input-rename
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  // definimos el evento cambioValor que actualizará el valor de salida
  // que el padre deberá de capturar. 
  // Emitimos un número como un evento
  // tslint:disable-next-line: no-output-rename
  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  

  constructor() { // se crea el componente
    console.log ('Ley Const', this.leyenda);
    console.log ('%', this.porcentaje);
  
      
   }

  cambiar(valor: number) {
    
    if ( this.porcentaje < 0 ) {
      this.porcentaje = 0;
      return;
    }

    if (this.porcentaje > 100){
      this.porcentaje = 100;
      return;
    }
    this.porcentaje += valor;
    // emitimos el valor del porcentaje hacia el padre
    this.cambioValor.emit(this.porcentaje);

    console.log(this.porcentaje);
  }

  // evento que detecta un cambio manual en el input (ngModel)
  cambio(newValue: number) {
    console.log (newValue);
    // devuelve el input progreso
    let progresoHTML: any = document.getElementsByName('porcentaje')[0];
    if ( newValue > 100 ) {
      this.porcentaje = 100;
    } else if ( newValue < 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje  = newValue;
    }
    // modifico el input con el @ViewChild
    this.progress.nativeElement.value = this.porcentaje;
    this.progress.nativeElement.focus();
    // modifico el input hmtl
   // progresoHTML.value = Number (this.porcentaje);
    this.cambioValor.emit(this.porcentaje);
    console.log(this.progress);

  }
  ngOnInit() { // se inicializa el componente
    console.log ('Ley Init', this.leyenda);
  }

  editaMsn(msn){
    this.leyenda = msn;
  }
}
