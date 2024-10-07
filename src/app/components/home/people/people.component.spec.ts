import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { peopleComponent } from './people.component';

describe('peopleComponent', () => {
  let component: peopleComponent;
  let fixture: ComponentFixture<peopleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ peopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(peopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
