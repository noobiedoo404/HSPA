import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }
getProperties(){
  return this.http.get('data/properties.json');
}
}
