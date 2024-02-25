import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { Iproperty } from '../Iproperty.Interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-Rent-Property',
  templateUrl: './Rent-Property.component.html',
  styleUrls: ['./Rent-Property.component.css']
})
export class RentPropertyComponent implements OnInit {

  SellRent = 1;
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
      
       // console.log(this.route.snapshot.url.toString());
      
      }, error => {
        console.log(error);
      }
      
    );
  }
}


