import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayComponenetComponent } from './display-componenet.component';

describe('DisplayComponenetComponent', () => {
  let component: DisplayComponenetComponent;
  let fixture: ComponentFixture<DisplayComponenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayComponenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
