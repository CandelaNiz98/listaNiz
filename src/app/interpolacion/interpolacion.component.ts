import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-interpolacion',
    templateUrl: './interpolacion.component.html',
    styleUrls: ['./interpolacion.component.scss']
})
export class InterpolacionComponent implements OnInit{
    value='Candela'
    edad=23;
    notaMayor=true;
    valuecap= 'candela'
    constructor(){}

    ngOnInit(): void {
        
    }
}

