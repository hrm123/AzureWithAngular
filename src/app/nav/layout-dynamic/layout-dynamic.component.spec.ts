import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDynamicComponent } from './layout-dynamic.component';

describe('LayoutDynamicComponent', () => {
  let component: LayoutDynamicComponent;
  let fixture: ComponentFixture<LayoutDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutDynamicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
