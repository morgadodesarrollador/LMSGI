import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../../comunicacion.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-nieto-a',
  templateUrl: './nieto-a.component.html',
  styleUrls: ['./nieto-a.component.css']
})
export class NietoAComponent implements OnInit {
  public mensaje: string = 'jfksdf';
  constructor(private scomunicacion: ComunicacionService) { }

  ngOnInit() {
    // nos subscribimos al Subject del servicio. Cada vez que se dispare el evento del Subject
    // ejecutaremos el siguiente código
    this.scomunicacion.enviarMensajeObservable.subscribe(response => {
      // response es el mensaje que enviamos en la función next() del servicio
      this.mensaje = response;
    });
  }
  cambairTexto(mesaje: string) {
    this.scomunicacion.enviarMensaje(this.mensaje);
  }

}
