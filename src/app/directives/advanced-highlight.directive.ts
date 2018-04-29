import { Directive, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector:'[app-advanced-highlight]'
})

export class AdvancedHighlightDirective implements OnInit{
    constructor(private element:ElementRef,private renderer:Renderer2){}
    ngOnInit(){
        this.renderer.setStyle(this.element.nativeElement,'background-color','yellow');
    }
}