import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuheadLayoutComponent } from './buhead-layout.component';

describe('BuheadLayoutComponent', () => {
  let component: BuheadLayoutComponent;
  let fixture: ComponentFixture<BuheadLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuheadLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuheadLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
