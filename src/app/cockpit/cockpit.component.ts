import {Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
    selector:'app-cockpit',
    templateUrl:'cockpit.component.html'
})

export class CockpitComponent implements OnInit{
    constructor(private dataService:DataService){}
    ngOnInit(){}
    addUser(firstName,lastName):void{
        this.dataService.addUser(firstName.value,lastName.value).subscribe(
            () => console.log("Added")
        )
    }
}