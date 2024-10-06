import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IPropertyBase } from 'src/app/model/iPropertyBase';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  cityList: any[] = [];

  @ViewChild('form') addPropertyForm!: NgForm;

  propertyView: IPropertyBase = {
    id: 0,
    name: '',
    price: 0,
    sellRent: 0,
    propertyType: '',
    furnishingType: '0',
    bhk: 0,
    builtArea: 0,
    city: '',
    readyToMove: false
};
  
  constructor( private router:Router, private housingService: HousingService) { }
  
  ngOnInit() {
    this.housingService.getProperties().subscribe(
      {
        next: value => {this.cityList = value; 
                    console.log(value)},
        error: err => console.log('error:', err)
      }
    )
  }
  
  onBack(){
    this.router.navigate(['/']);
  }
  
  onSubmitClick(){
    console.log('submit button clicked!')
    console.log(this.addPropertyForm);
  }
  
}
