import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Iproperty } from '../property/Iproperty.Interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }
  getAllPropertise(SellRent:number) :Observable<Iproperty[]>
  {
    return this.http.get('data/Properties.json').pipe(
      map(data => {
      const propertiesArray: Array<Iproperty> = [];
      for (const id in data)
      {
        if (data.hasOwnProperty(id) && data[id].SellRent===SellRent) {
          
            propertiesArray.push(data[id]);
        }
      
      }
        return propertiesArray;
    }
    ));
  }
}
