import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { researchareasComponent } from './researchareas.component';

describe('researchareasComponent', () => {
  let component: researchareasComponent;
  let fixture: ComponentFixture<researchareasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ researchareasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(researchareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
