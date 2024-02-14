import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }
  getAllPropertise()
  {
    return this.http.get('data/Properties.json').pipe(
      map(data => {
      const propertiesArray: Array<any> = [];
      for (const id in data)
      {
        if (data.hasOwnProperty(id)) {
          
            propertiesArray.push(data[id]);
        }
      
      }
        return propertiesArray;
    }
    ));
  }
}
