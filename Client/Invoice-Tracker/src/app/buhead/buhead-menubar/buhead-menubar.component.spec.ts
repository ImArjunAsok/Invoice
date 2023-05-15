import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuheadMenubarComponent } from './buhead-menubar.component';

describe('BuheadMenubarComponent', () => {
  let component: BuheadMenubarComponent;
  let fixture: ComponentFixture<BuheadMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuheadMenubarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuheadMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
