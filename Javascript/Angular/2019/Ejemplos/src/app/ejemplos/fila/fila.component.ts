import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.css']
})
export class FilaComponent implements OnInit {
  colorCheck = true;
  constructor() { }

  ngOnInit() {
  }

  voltearColor(){
    this.colorCheck = !this.colorCheck;
    console.log(this.colorCheck);
  }

}
