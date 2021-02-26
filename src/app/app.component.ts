import {Component, OnInit} from '@angular/core';
import {Users} from "./_model/users";
import {AppRest_service} from "./app.rest_service";

declare const myFunc:any;
export class selct {
    id: number;
    num: number;
}

@Component({
    selector: 'Users-app',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
    users:Users[]=[];
    constructor(public rs:AppRest_service) {
    }
    startIndex=0;
    endIndex=10;

    numbr:number=10;

    selectedOption: number;


    options: selct[]= [
        { id: 10, num: 10 },
        { id: 20, num: 20 },
        { id: 30, num: 30 },
        { id: 50, num: 50 }
    ]
    print() {
        if (this.selectedOption==10){this.numbr=10;}
        else if(this.selectedOption==20){this.numbr=20;}
        else if(this.selectedOption==30){this.numbr=30;}
        else if(this.selectedOption==50){this.numbr=50;}

    }

    ngOnInit(): void {
        this.rs.getUsers().subscribe((response)=>{this.users=response;})
    }
    updateIndex(pageIndex){
        this.startIndex=pageIndex*this.numbr;
        this.endIndex=this.startIndex+this.numbr;
    }
    getArrayFromNumber(length) {
        return new Array(length/10);
    }

    callFunc() {
        myFunc();
    }
}

