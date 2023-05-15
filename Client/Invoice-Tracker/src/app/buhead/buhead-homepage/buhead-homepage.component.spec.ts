import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuheadHomepageComponent } from './buhead-homepage.component';

describe('BuheadHomepageComponent', () => {
  let component: BuheadHomepageComponent;
  let fixture: ComponentFixture<BuheadHomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuheadHomepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuheadHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
