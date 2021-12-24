import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Yo {{value}}</div>`,
})
export class AppComponent {
  value = 'World';
}
