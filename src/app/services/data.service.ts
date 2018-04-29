import { OnInit, Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class DataService implements OnInit{
    userDataArr;
    constructor(private http:HttpClient){}
    ngOnInit(){
        this.fetchUserData();
    };
    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
    addUser(name,title){
        // this.http.post('http://localhost:3000/users',{firstName:name,lastName:title},
        // {headers: new HttpHeaders({ 'Content-Type': 'application/json' })}
        // ).map((response:Response)=>console.log(response));
        return this.http.post('http://localhost:3000/users',{name:name,title:title},this.httpOptions ).pipe(
            tap(()=>this.fetchUserData())
        )
    }

    getUserData():any{
        return this.http.get('http://localhost:3000/users');
        // this.fetchUserData().subscribe(
        //     data => {return this.userDataArr}
        // )            
        //return this.userDataArr;

    }

    fetchUserData(){
        this.http.get('http://localhost:3000/users').subscribe(
            data=> (this.userDataArr = data)
        )
        // subscribe(
        //     data => {this.userDataArr = data},
        //     err => {console.log("Data Fetch Error")},
        //     () => {console.log("Data Fetch Complete")}
        // )
    }
}