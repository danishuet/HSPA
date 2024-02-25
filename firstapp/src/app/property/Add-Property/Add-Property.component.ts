import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-Add-Property',
  templateUrl: './Add-Property.component.html',
  styleUrls: ['./Add-Property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form') addPropertyForm: NgForm;
  constructor(private route:Router) { }

  ngOnInit() {
   
  }
  onSubmit()
  {
    console.log(this.addPropertyForm);
    console.log('Congrats message submitted')
  }
  onBack()

  {
     this.route.navigate(['/']);
  }

}
