import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url = "https://restcountries.com/v3.1/all";

@Injectable({
  providedIn: 'root'
})
export class PaisesApiService {
  paises;
  constructor(private http: HttpClient) 
  { 
    this.paises = this.http.get<any>("https://restcountries.com/v3.1/all");
  }
  
  getPaises() {
    return this.paises;
  }
}
