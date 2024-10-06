import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IProperty} from '../IProperty';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }
  // getProperties(): Observable<IProperty[]> {
  //   return this.http.get('data/properties.json').pipe(
  //     map(
  //       (data: any) => {
  //         const propertiesArray: Array<IProperty> = [];
  //         for (const id in data) {
  //           if (data.hasOwnProperty(id)) {
  //             propertiesArray.push(data[id]);
  //           }
  //         }
  //         return propertiesArray;
  //       }
  //     )

  //   )
  // }

  getProperties(): Observable<string[]>{
    return this.http.get<string[]>('https://localhost:44350/api/city');
  }
}
