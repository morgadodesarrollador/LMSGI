import { Component, OnInit } from '@angular/core';
import { ComunicacionService } from '../../comunicacion.service';

@Component({
  selector: 'app-nieto-b',
  templateUrl: './nieto-b.component.html',
  styleUrls: ['./nieto-b.component.css']
})
export class NietoBComponent implements OnInit {

  constructor(private scomunicacion: ComunicacionService) { }
  mensaje: string;
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
