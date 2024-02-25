
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { Iproperty } from '../Iproperty.Interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent:number = 1;
  properties:Iproperty[];
  constructor(private route:ActivatedRoute,private housingService: HousingService) { }

  ngOnInit(): void {
    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
  }
    this.housingService.getAllPropertise(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
      
       console.log(this.route.snapshot.url.toString());
      
      }, error => {
        console.log(error);
      }
      
    );
  }
}