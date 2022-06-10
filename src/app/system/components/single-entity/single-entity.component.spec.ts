import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEntityComponent } from './single-entity.component';

describe('SingleEntityComponent', () => {
  let component: SingleEntityComponent;
  let fixture: ComponentFixture<SingleEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
