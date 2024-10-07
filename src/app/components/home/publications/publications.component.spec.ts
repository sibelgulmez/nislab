import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { publicationsComponent } from './publications.component';

describe('publicationsComponent', () => {
  let component: publicationsComponent;
  let fixture: ComponentFixture<publicationsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ publicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(publicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
