import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CartillainitComponent } from './cartillainit.component';

describe('CartillainitComponent', () => {
  let component: CartillainitComponent;
  let fixture: ComponentFixture<CartillainitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartillainitComponent]
    });
    fixture = TestBed.createComponent(CartillainitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
