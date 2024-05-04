import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  constructor( private route:ActivatedRoute, private router:Router) { }
  public propertyId:any;

  ngOnInit() {
    // to convert string to number use + at the beginning of the string variable.
    // this.propertyId= +this.route.snapshot.params['id'];

    this.route.params.subscribe((params)=>{
        this.propertyId = +params['id']; 
    })
  }

  inSelectButton() {
    // on click of the button, user wants to go to the next tab or next item
    this.propertyId+=1;

    // navigate to another tab
    this.router.navigate(['property-details/',this.propertyId])

  }


}
