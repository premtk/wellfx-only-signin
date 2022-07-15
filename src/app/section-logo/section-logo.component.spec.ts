import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLogoComponent } from './section-logo.component';

describe('SectionLogoComponent', () => {
  let component: SectionLogoComponent;
  let fixture: ComponentFixture<SectionLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
