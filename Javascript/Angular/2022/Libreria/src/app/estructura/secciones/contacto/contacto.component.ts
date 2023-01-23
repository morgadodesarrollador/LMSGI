import { Component, OnInit } from '@angular/core';
import { IPeliculas } from 'src/app/Interfaces/Peliculas';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {


  constructor(private peliculasService: PeliculasService) { }
  async ngOnInit() {

  }

}
