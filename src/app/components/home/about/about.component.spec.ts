import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { aboutComponent } from './about.component';

describe('aboutComponent', () => {
  let component: aboutComponent;
  let fixture: ComponentFixture<aboutComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ aboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(aboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
