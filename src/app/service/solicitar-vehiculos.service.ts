import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ListaVehiculos} from '../interfaces/vehiculos-response';

const url = 'https://swapi.dev/api/vehicles';

@Injectable({
  providedIn: 'root'
})
export class SolicitarVehiculosService {

  constructor(private http:HttpClient) { }

  getVehiculos():Observable<ListaVehiculos>{
    return this.http.get<ListaVehiculos>(url);
  }

}
