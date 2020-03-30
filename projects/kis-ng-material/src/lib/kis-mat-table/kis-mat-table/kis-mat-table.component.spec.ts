import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KisMatTableComponent } from './kis-mat-table.component';

describe('MatTableComponent', () => {
  let component: KisMatTableComponent;
  let fixture: ComponentFixture<KisMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KisMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
