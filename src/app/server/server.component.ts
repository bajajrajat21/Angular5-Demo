import {Component, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
    selector:'app-server',
    templateUrl:'server.component.html'
})

export class ServerComponent implements OnInit{
    dataArray;
    constructor(private dataService:DataService){}
    ngOnInit(){
        this.getData();
        this.refreshData();
    }
    refreshData(){
        setInterval(()=>{
            this.getData();
        },5000);
    }
    getData(){
        this.dataService.getUserData().subscribe(
            data=> {this.dataArray = data}
        )
    }
}