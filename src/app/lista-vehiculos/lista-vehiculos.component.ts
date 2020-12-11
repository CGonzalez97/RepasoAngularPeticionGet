import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SolicitarVehiculosService } from '../service/solicitar-vehiculos.service';

const url = 'https://swapi.dev/api/vehicles';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {

  constructor(private vehiculoServicio:SolicitarVehiculosService) { }

  listaVehiculos = new MatTableDataSource();
  listaColumnas = ['name','model','manufacturer','vehicle_class','crew','passengers'];
  displayedColumns: string[] = ['name','model','manufacturer','vehicle_class','crew','passengers'];

  ngOnInit(): void {
      this.vehiculoServicio.getVehiculos().subscribe((resp)=>{
      this.listaVehiculos.data = resp.results;
    });
  }

}
