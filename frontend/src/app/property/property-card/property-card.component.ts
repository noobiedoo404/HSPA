import { Component, Input } from "@angular/core";

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
    @Input() property : any;
}