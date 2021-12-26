import { Inject, Injectable } from '@angular/core';
import { Observable, fromEvent, debounceTime, map, distinctUntilChanged, startWith, tap, Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { ScreenState } from '../types/ScreenTypes';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  MOBILE_MAX_WIDTH = 425;
  TABLET_MAX_WIDTH = 1024;  
  screenState : any = {};
//Create observable from the window event
  _resize$ : Observable<number> | undefined;
  resizeSubscription : Subscription;
  ScreenState$ = new BehaviorSubject<ScreenState>({mobile: false, tablet: false, desktop: true});

  constructor() { 
    this._resize$ = 
    fromEvent(window, 'resize')
    .pipe(
      debounceTime(200),
      map(() => window.innerWidth), //Don't use mapTo! 
      distinctUntilChanged(),
      startWith(window.innerWidth),
      tap(width => this.setWindowWidth(width)), 
    );
    this.resizeSubscription = this._resize$.subscribe(); 
  }

  setWindowWidth(width: number){
    const mobile = width <= this.MOBILE_MAX_WIDTH;
    const tablet = width <= this.TABLET_MAX_WIDTH && width > this.MOBILE_MAX_WIDTH;
    this.screenState = { mobile, tablet, desktop: !mobile && !tablet}
    this.ScreenState$.next(this.screenState);
  }

  getScreenObserver(): Observable<ScreenState>{
    return this.ScreenState$;
  }

  ngOnDestroy(){
    this.resizeSubscription.unsubscribe();
  }


}
