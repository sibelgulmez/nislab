import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { thesesComponent } from './theses.component';

describe('thesesComponent', () => {
  let component: thesesComponent;
  let fixture: ComponentFixture<thesesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ thesesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(thesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
