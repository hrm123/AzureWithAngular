import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><app-layout-dynamic>Hello {{value}}</app-layout-dynamic></div>`,
})
export class AppComponent {
  value = 'World';
}
