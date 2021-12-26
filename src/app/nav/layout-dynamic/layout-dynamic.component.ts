import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { ScreenService } from '../../Services/screen.service';
import { ScreenState } from '../../types/ScreenTypes';
import { HeaderDesktopComponent } from '../header-desktop/header-desktop.component';
import { HeaderMobileComponent } from '../header-mobile/header-mobile.component';
import { HeaderDirective } from '../header.directive';
import { HeaderInterface } from '../HeaderInterface';

@Component({
  selector: 'app-layout-dynamic',
  templateUrl: './layout-dynamic.component.html',
  styleUrls: ['./layout-dynamic.component.css']
})
export class LayoutDynamicComponent implements OnInit {

  @ViewChild(HeaderDirective, {static: true}) headerHost!: HeaderDirective;
  screenState : ScreenState;

  constructor(private screenService: ScreenService) {
    
  }

  loadHeader(){
    const parentViewRef = this.headerHost.parentViewRef;
    parentViewRef.clear();
    let header: Type<any> = null;
    debugger;
    if(this.screenState.mobile){
      // create mobile header
      header = HeaderMobileComponent;
    } else {
      // desktop header
      header = HeaderDesktopComponent;
    }
    const componentRef = parentViewRef.createComponent<HeaderInterface>(header);

  }

  ngOnInit(): void {
    this.screenService.getScreenObserver().subscribe(screenState => {
      console.log('screenState', screenState); // have to unsubscribe?
      this.screenState = screenState;
      this.loadHeader();
      //change the header dynamically 
    })
  }

}
