import {Directive, OnInit, ElementRef} from '@angular/core';

@Directive({
    selector:'[app-highlight]'
})

export class HighlightDirective implements OnInit{
    constructor(private element:ElementRef){}
    ngOnInit(){
        this.element.nativeElement.style.backgroundColor="red";
    }
}