import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FilaComponent } from '../fila/fila.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements AfterViewInit {
  items = [1,2,3, 4, 5];

  @ViewChildren(FilaComponent) hijos: QueryList<FilaComponent>;
  // con viewChildren agarramos todas las referencias del hijo FilaComponent y 
  // las tenemos en la varible "hijos" QueryList<FilaComponent>
  
  constructor() { }

  ngAfterViewInit(): void {
    // deseamos subscribirnos a los cambios del ViewChildren. Cuando se crea/borra un componente
    // hacemos un subscribe a los cambios (changes) de la variable hijos
    this.hijos.changes.subscribe((componentes: QueryList<FilaComponent>) => {
      componentes.forEach( componente => {

      })
    });
  }
  agregar(){
    // añadimos un elemento a items
    this.items.push(this.items.length +1 );
  }

  eliminar() {
    // eliminamos un elemento de items
    this.items.pop();
  }

  voltearColor(index: number){
    // accedemos al hijo en la posición index y ejecutamos el método voltearColor() del hijo
    const hijo = this.hijos.toArray()[index];
    hijo.voltearColor();
  }

  voltearColores() {
    // recorremos todos los hios y ejecutamos el método voltearColor() del hijo
    this.hijos.forEach((hijo: FilaComponent) => {
      hijo.voltearColor();
    });
  }
}
