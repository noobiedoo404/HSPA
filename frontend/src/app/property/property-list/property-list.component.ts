import { Component, OnInit } from '@angular/core';
import { IProperty } from 'src/app/IProperty';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  // properties: Array<IProperty>=[];
  properties: any;
  constructor(private housingService: HousingService) {
  }
  ngOnInit(): void {
    this.housingService.getProperties().subscribe(
      {
        next: value => {this.properties = value; 
                    console.log(value)},
        error: err => console.log('error:', err)
      }
    )
  }
}
