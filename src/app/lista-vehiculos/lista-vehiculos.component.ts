import { Component, OnInit } from '@angular/core';

const url = 'https://swapi.dev/api/vehicles';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
