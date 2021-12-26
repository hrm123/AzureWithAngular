import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHeaderdirective]'
})
export class HeaderDirective {

  constructor(public parentViewRef: ViewContainerRef) { }

}
