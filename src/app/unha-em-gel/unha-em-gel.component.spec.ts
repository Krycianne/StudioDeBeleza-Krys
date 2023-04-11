import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnhaEmGelComponent } from './unha-em-gel.component';

describe('UnhaEmGelComponent', () => {
  let component: UnhaEmGelComponent;
  let fixture: ComponentFixture<UnhaEmGelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnhaEmGelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnhaEmGelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
