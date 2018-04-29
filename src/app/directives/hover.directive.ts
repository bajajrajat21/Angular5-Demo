import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector:'[app-hover]'
})

export class HoverDirective{
    @HostBinding('style.backgroundColor') backgroundColor;

    @HostListener('mouseover') mouseover = function(event){
        this.backgroundColor = "green";
    }

    @HostListener('mouseleave') mouseleave = function(event){
        this.backgroundColor = "transparent";
    }
}