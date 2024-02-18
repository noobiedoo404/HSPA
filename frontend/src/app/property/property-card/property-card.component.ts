import { Component } from "@angular/core";

//components take object as parameter
@Component({

    selector : 'app-property-card',
    // template : '<h1>this is property card</h1>'
    templateUrl : 'property-card.component.html',
    //styles : ['h1{font-weight: bold}']
    styleUrls : ['property-card.component.css']
}

)
export class PropertyCardComponent {
    Property : any = {
        "name": "1BHK",
        "location" : "Kolkata",
        "Price" : "$10000"
    }
}