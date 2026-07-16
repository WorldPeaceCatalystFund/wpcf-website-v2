import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactReportComponent } from './impact-report.component';

describe('ImpactReportComponent', () => {
  let component: ImpactReportComponent;
  let fixture: ComponentFixture<ImpactReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
