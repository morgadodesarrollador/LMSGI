import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  // contiene el texto que se va aemitiralos textareadelos componentes
  public mensaje: string;
  // Subject: permite emitir/enviar mensajes (el valor de la variable)  a MULTIPLES OBSERVADORES
  // varios componentes van a SUBSCRIBIRSE a este Subject lo que hará que cada vez transmitamos 
  // un mensaje todos los componentes subscritos recibirán dicho mensaje
  // Subject<string>:el mensje emitido es de tipo string
  private enviarMensajeSubject = new Subject<string>();
  // esta es ua variable auxiliar que facilita que los componentes se subscriban al Subject
  // a traves de la variable 'enviarMensajeObservable'  nuestros componentes se subscribirán 
  // al Subject 'enviarMensajeSubject'
  public enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  // enviaremos el mensaje a todos los componente subscritos al Subject usando la función 'next()'
  public enviarMensaje(mensaje: string) {
    this.mensaje = mensaje;
    // el observable 'enviarMensajeSubject' devolverá el 'mensaje' de su función next(). 
    // A este observable se subscribirán los componentes, recibiendo el 'mensaje' en el evento subscribe()
    this.enviarMensajeSubject.next(mensaje);
  }
}
